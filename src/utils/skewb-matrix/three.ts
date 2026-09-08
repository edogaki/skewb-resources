import * as THREE from "three";
import { LineMaterial } from "three/addons/lines/LineMaterial.js";
import { LineSegments2 } from "three/addons/lines/LineSegments2.js";
import { LineSegmentsGeometry } from "three/addons/lines/LineSegmentsGeometry.js";
import * as BufferGeometryUtils from "three/examples/jsm/utils/BufferGeometryUtils.js";
import type { Color } from "../renderer/color";
import type { WCAAlg } from "../solver/alg";
import {
    bitsToNumber,
    type CubeRotation,
    mask11,
    mask12,
    mask13,
    mask21,
    mask22,
    mask23,
    mask31,
    mask32,
    mask33,
    rotateAroundAxis,
    shift11,
    shift12,
    shift13,
    shift21,
    shift22,
    shift23,
    shift31,
    shift32,
    shift33,
} from "./matrixMath";
import { CenterPiece, CornerPiece, SkewbMatrixState } from "./SkewbMatrixState";

const hintDistance = 2.4;
const hintSizeScale = 1;
const hintSpacing = 0.2;
const cameraSpeed = 8;

function cubeRotationToThreeMatrix(r: CubeRotation) {
    return new THREE.Matrix4(
        bitsToNumber((r & mask11) >> shift11),
        bitsToNumber((r & mask12) >> shift12),
        bitsToNumber((r & mask13) >> shift13),
        0,
        bitsToNumber((r & mask21) >> shift21),
        bitsToNumber((r & mask22) >> shift22),
        bitsToNumber((r & mask23) >> shift23),
        0,
        bitsToNumber((r & mask31) >> shift31),
        bitsToNumber((r & mask32) >> shift32),
        bitsToNumber((r & mask33) >> shift33),
        0,
        0,
        0,
        0,
        1,
    );
}

function skewbCornerObjects(colors: Color[]) {
    const cornerCoords = [
        [1, 1, 1, 0, 1, 1, 1, 1, 0],
        [1, 1, 1, 1, 1, 0, 1, 0, 1],
        [1, 1, 1, 1, 0, 1, 0, 1, 1],
    ];
    const cornerGeometries = cornerCoords.map((coords, i) => {
        const geometry = new THREE.BufferGeometry();
        const vertices = new Float32Array(coords);
        geometry.setAttribute(
            "position",
            new THREE.BufferAttribute(vertices, 3),
        );
        const color = new THREE.Color(colors[i]);
        const colorsFloatArray = new Float32Array([
            color.r,
            color.g,
            color.b,
            color.r,
            color.g,
            color.b,
            color.r,
            color.g,
            color.b,
        ]);
        geometry.setAttribute(
            "color",
            new THREE.BufferAttribute(colorsFloatArray, 3),
        );
        return geometry;
    });

    const cornerHintGeometries = cornerCoords.map((coords, i) => {
        const newCoords = coords.map(
            (n, j) =>
                (j % 3 === (4 - i) % 3 ? n + hintDistance : n * hintSizeScale) +
                (n === 0 ? hintSpacing / 2 : 0),
        );
        const geometry = new THREE.BufferGeometry();
        const vertices = new Float32Array(newCoords);
        geometry.setAttribute(
            "position",
            new THREE.BufferAttribute(vertices, 3),
        );
        const color = new THREE.Color(colors[i]);
        const colorsFloatArray = new Float32Array([
            color.r,
            color.g,
            color.b,
            color.r,
            color.g,
            color.b,
            color.r,
            color.g,
            color.b,
        ]);
        geometry.setAttribute(
            "color",
            new THREE.BufferAttribute(colorsFloatArray, 3),
        );
        return geometry;
    });

    const geometry = BufferGeometryUtils.mergeGeometries(cornerGeometries);

    const edgesGeometry = new THREE.EdgesGeometry(geometry);
    const line = new LineSegments2(
        new LineSegmentsGeometry().fromEdgesGeometry(edgesGeometry),
        new LineMaterial({ linewidth: 2, color: 0x000000 }),
    );

    const material = new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        vertexColors: true,
    });
    const mesh = new THREE.Mesh(geometry, material);

    const hintEdgesGeometries = cornerHintGeometries.map(
        (hintGeometry) => new THREE.EdgesGeometry(hintGeometry),
    );
    const hintLines = hintEdgesGeometries.map(
        (hintEdgesGeometry) =>
            new LineSegments2(
                new LineSegmentsGeometry().fromEdgesGeometry(hintEdgesGeometry),
                new LineMaterial({ linewidth: 1, color: 0x000000 }),
            ),
    );

    const hintMaterial = new THREE.MeshBasicMaterial({
        vertexColors: true,
    });
    const hintMeshes = cornerHintGeometries.map(
        (hintGeometry) => new THREE.Mesh(hintGeometry, hintMaterial),
    );

    const group = new THREE.Group();
    group.add(mesh);
    group.add(line);

    const plusZtoPlusYXZRotation = [
        rotateAroundAxis(0b010000, 3),
        rotateAroundAxis(0b000100, 1),
        rotateAroundAxis(0b010000, 0),
    ];
    const plusYXZtoPlusZRotation = [
        rotateAroundAxis(0b010000, 1),
        rotateAroundAxis(0b000100, 3),
        rotateAroundAxis(0b010000, 0),
    ];

    const innerHintGroups = hintMeshes.map((hintMesh, i) => {
        const hintLine = hintLines[i];
        const innerHintGroup = new THREE.Group();
        innerHintGroup.add(hintMesh);
        innerHintGroup.add(hintLine);
        hintMesh.setRotationFromMatrix(
            cubeRotationToThreeMatrix(plusYXZtoPlusZRotation[i]),
        );
        hintLine.setRotationFromMatrix(
            cubeRotationToThreeMatrix(plusYXZtoPlusZRotation[i]),
        );
        return innerHintGroup;
    });

    const outerHintGroup = new THREE.Group();
    innerHintGroups.map((innerHintGroup, i) => {
        outerHintGroup.add(innerHintGroup);

        innerHintGroup.setRotationFromMatrix(
            cubeRotationToThreeMatrix(plusZtoPlusYXZRotation[i]),
        );
        return null;
    });

    return [group, innerHintGroups, outerHintGroup] as const;
}

function hideOutOfViewHints(
    camera: THREE.Camera,
    innerHintGroups: THREE.Object3D[],
) {
    // manually tweaked value, need to change this if any of the dimension values is changed
    const dotLimit = -0.495;
    const cameraDir = new THREE.Vector3();
    camera.getWorldDirection(cameraDir);
    for (const innerHintGroup of innerHintGroups) {
        const hintDir = new THREE.Vector3();
        innerHintGroup.getWorldDirection(hintDir);
        if (cameraDir.dot(hintDir) < dotLimit) {
            innerHintGroup.visible = false;
        } else {
            innerHintGroup.visible = true;
        }
    }
}

function skewbCenterObjects(color: Color) {
    const centerCoords = [1, 1, 0, 1, 0, 1, 1, -1, 0, 1, 0, -1];
    const indices = [0, 1, 2, 2, 3, 0];
    const geometry = new THREE.BufferGeometry();
    const vertices = new Float32Array(centerCoords);
    geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    geometry.setIndex(indices);
    const threeColor = new THREE.Color(color);
    const colorsFloatArray = new Float32Array([
        threeColor.r,
        threeColor.g,
        threeColor.b,
        threeColor.r,
        threeColor.g,
        threeColor.b,
        threeColor.r,
        threeColor.g,
        threeColor.b,
        threeColor.r,
        threeColor.g,
        threeColor.b,
    ]);
    geometry.setAttribute(
        "color",
        new THREE.BufferAttribute(colorsFloatArray, 3),
    );

    const hintGeometry = new THREE.BufferGeometry();
    const hintCenterCoords = [
        1 + hintDistance,
        hintSizeScale - hintSpacing / 2,
        0,
        1 + hintDistance,
        0,
        -hintSizeScale + hintSpacing / 2,
        1 + hintDistance,
        -hintSizeScale + hintSpacing / 2,
        0,
        1 + hintDistance,
        0,
        hintSizeScale - hintSpacing / 2,
    ];
    const hintVertices = new Float32Array(hintCenterCoords);
    hintGeometry.setAttribute(
        "position",
        new THREE.BufferAttribute(hintVertices, 3),
    );
    hintGeometry.setIndex(indices);
    hintGeometry.setAttribute(
        "color",
        new THREE.BufferAttribute(colorsFloatArray, 3),
    );

    const edgesGeometry = new THREE.EdgesGeometry(geometry);
    const line = new LineSegments2(
        new LineSegmentsGeometry().fromEdgesGeometry(edgesGeometry),
        new LineMaterial({ linewidth: 2, color: 0x000000 }),
    );

    const hintEdgesGeometry = new THREE.EdgesGeometry(hintGeometry);
    const hintLine = new LineSegments2(
        new LineSegmentsGeometry().fromEdgesGeometry(hintEdgesGeometry),
        new LineMaterial({
            linewidth: 1,
            color: 0x000000,
        }),
    );

    const material = new THREE.MeshBasicMaterial({
        side: THREE.DoubleSide,
        vertexColors: true,
    });
    const mesh = new THREE.Mesh(geometry, material);

    const hintMaterial = new THREE.MeshBasicMaterial({
        vertexColors: true,
    });
    const hintMesh = new THREE.Mesh(hintGeometry, hintMaterial);

    const group = new THREE.Group();
    group.add(mesh);
    group.add(line);

    const plusZtoPlusXRotation = rotateAroundAxis(0b000100, 1);
    const plusXtoPlusZRotation = rotateAroundAxis(0b000100, 3);

    const innerHintGroup = new THREE.Group();
    innerHintGroup.add(hintMesh);
    innerHintGroup.add(hintLine);
    hintMesh.setRotationFromMatrix(
        cubeRotationToThreeMatrix(plusXtoPlusZRotation),
    );
    hintLine.setRotationFromMatrix(
        cubeRotationToThreeMatrix(plusXtoPlusZRotation),
    );

    const outerHintGroup = new THREE.Group();
    outerHintGroup.add(innerHintGroup);

    innerHintGroup.setRotationFromMatrix(
        cubeRotationToThreeMatrix(plusZtoPlusXRotation),
    );

    return [group, innerHintGroup, outerHintGroup] as const;
}

class SkewbStateRenderer {
    state: SkewbMatrixState;

    skewbCorners: THREE.Object3D[];
    skewbCornerInnerHints: THREE.Object3D[];
    skewbCornerOuterHints: THREE.Object3D[];
    skewbCenters: THREE.Object3D[];
    skewbCenterInnerHints: THREE.Object3D[];
    skewbCenterOuterHints: THREE.Object3D[];

    renderer: THREE.WebGLRenderer;
    scene: THREE.Scene;
    camera: THREE.Camera;

    skewbGroup: THREE.Group;
    skewbGroupDefaultRotation: THREE.Quaternion;

    isDraggingScreen: boolean;
    innerHintGroups: THREE.Object3D[];

    animationId: number | null;

    parentDiv: HTMLDivElement | null;

    maxWidth: number;
    aspectRatio: number;
    currentWidth: number;

    resizeObserver: ResizeObserver;

    constructor(state?: SkewbMatrixState) {
        this.maxWidth = 320;
        this.aspectRatio = 1;
        this.currentWidth = this.maxWidth;
        // inner hints have the world direction perpendicular to their faces
        // so we can track when face is being shown to camera
        // outer hints have the world direction to z axis (default)
        this.skewbCorners = [];
        this.skewbCornerInnerHints = [];
        this.skewbCornerOuterHints = [];
        this.state = state ?? new SkewbMatrixState();
        for (const cp of CornerPiece) {
            const [skewbCorner, skewbCornerInnerHintArr, skewbCornerOuterHint] =
                skewbCornerObjects(this.state.cornerPieceColors[cp]);
            const matrix = cubeRotationToThreeMatrix(
                this.state.cornerPieces[cp],
            );
            skewbCorner.setRotationFromMatrix(matrix);
            skewbCornerOuterHint.setRotationFromMatrix(matrix);

            this.skewbCorners.push(skewbCorner);
            this.skewbCornerInnerHints.push(...skewbCornerInnerHintArr);
            this.skewbCornerOuterHints.push(skewbCornerOuterHint);
        }

        this.skewbCenters = [];
        this.skewbCenterInnerHints = [];
        this.skewbCenterOuterHints = [];
        for (const cp of CenterPiece) {
            const [skewbCenter, skewbCenterInnerHint, skewbCenterOuterHint] =
                skewbCenterObjects(this.state.centerPieceColors[cp]);

            const matrix = cubeRotationToThreeMatrix(
                this.state.centerPieces[cp],
            );
            skewbCenter.setRotationFromMatrix(matrix);
            skewbCenterOuterHint.setRotationFromMatrix(matrix);

            this.skewbCenters.push(skewbCenter);
            this.skewbCenterInnerHints.push(skewbCenterInnerHint);
            this.skewbCenterOuterHints.push(skewbCenterOuterHint);
        }

        this.scene = new THREE.Scene();
        this.scene.background = null;

        this.skewbGroup = new THREE.Group();

        for (const skewbCorner of this.skewbCorners) {
            this.skewbGroup.add(skewbCorner);
        }

        for (const skewbCornerOuterHint of this.skewbCornerOuterHints) {
            this.skewbGroup.add(skewbCornerOuterHint);
        }
        for (const skewbCenter of this.skewbCenters) {
            this.skewbGroup.add(skewbCenter);
        }
        for (const skewbCenterOuterHint of this.skewbCenterOuterHints) {
            this.skewbGroup.add(skewbCenterOuterHint);
        }
        this.scene.add(this.skewbGroup);

        this.skewbGroup.rotateOnWorldAxis(
            new THREE.Vector3(0, 1, 0),
            -Math.PI / 4,
        );
        this.skewbGroup.rotateOnWorldAxis(
            new THREE.Vector3(1, 0, 0),
            Math.atan(1 / Math.sqrt(2)),
        );
        this.skewbGroupDefaultRotation = new THREE.Quaternion();
        this.skewbGroup.getWorldQuaternion(this.skewbGroupDefaultRotation);

        const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
        this.scene.add(ambientLight);

        this.camera = new THREE.PerspectiveCamera(
            55,
            this.aspectRatio,
            0.1,
            2000,
        );
        this.camera.position.x = 0;
        this.camera.position.y = 0;
        this.camera.position.z = 7;

        this.camera.lookAt(new THREE.Vector3(0, 0, 0));

        const pointLight = new THREE.PointLight(0xffffff, 2.5, 0, 0);
        this.camera.add(pointLight);

        this.scene.add(this.camera);

        this.innerHintGroups = this.skewbCornerInnerHints.concat(
            this.skewbCenterInnerHints,
        );

        hideOutOfViewHints(this.camera, this.innerHintGroups);

        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        this.renderer.setSize(this.maxWidth, this.maxWidth / this.aspectRatio);
        this.renderer.setPixelRatio(window.devicePixelRatio);

        this.isDraggingScreen = false;

        this.renderer.domElement.addEventListener(
            "pointerdown",
            this.pointerDownEventListener,
        );
        this.renderer.domElement.addEventListener(
            "pointerup",
            this.pointerUpEventListener,
        );

        this.renderer.domElement.addEventListener(
            "pointermove",
            this.pointerMoveEventListener,
        );

        this.renderer.domElement.addEventListener(
            "contextmenu",
            (event: Event) => {
                event.preventDefault();
            },
        );

        this.renderer.domElement.style =
            "position:absolute; touch-action: none;";

        this.animationId = null;
        this.animate();

        this.parentDiv = null;
        this.resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                if (!entry.contentBoxSize?.[0]) continue;
                const [{ inlineSize }] = entry.contentBoxSize;
                this.setWidth(inlineSize);
            }
        });
    }

    pointerDownEventListener = (event: PointerEvent) => {
        this.isDraggingScreen = true;
        this.renderer.domElement.setPointerCapture(event.pointerId);
        document.body.style.cursor = "grabbing";
    };

    pointerUpEventListener = (_event: PointerEvent) => {
        this.isDraggingScreen = false;
        document.body.style.cursor = "auto";
    };

    pointerMoveEventListener = (event: PointerEvent) => {
        if (!(event.buttons & 2) && !(event.buttons & 1)) {
            this.isDraggingScreen = false;
        }
        if (this.isDraggingScreen) {
            this.skewbGroup.rotateOnWorldAxis(
                new THREE.Vector3(0, 1, 0),
                (event.movementX * cameraSpeed) / this.currentWidth,
            );
            this.skewbGroup.rotateOnWorldAxis(
                new THREE.Vector3(1, 0, 0),
                (event.movementY * cameraSpeed) /
                    (this.currentWidth / this.aspectRatio),
            );
            hideOutOfViewHints(this.camera, this.innerHintGroups);
        }
    };

    animate = () => {
        this.animationId = requestAnimationFrame(this.animate);
        this.renderer.render(this.scene, this.camera);
    };

    stopAnimation() {
        if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
        }
    }

    setFromWCAAlg(alg: WCAAlg) {
        this.state.setFromWCAAlg(alg);
        this.setFromStateRotations();
    }

    setFromStateRotations() {
        for (const cp of CornerPiece) {
            const matrix = cubeRotationToThreeMatrix(
                this.state.cornerPieces[cp],
            );
            this.skewbCorners[cp].setRotationFromMatrix(matrix);
            this.skewbCornerOuterHints[cp].setRotationFromMatrix(matrix);
        }

        for (const cp of CenterPiece) {
            const matrix = cubeRotationToThreeMatrix(
                this.state.centerPieces[cp],
            );
            this.skewbCenters[cp].setRotationFromMatrix(matrix);
            this.skewbCenterOuterHints[cp].setRotationFromMatrix(matrix);
        }
        hideOutOfViewHints(this.camera, this.innerHintGroups);
    }

    resetGroupRotation() {
        this.skewbGroup.setRotationFromQuaternion(
            this.skewbGroupDefaultRotation,
        );
        hideOutOfViewHints(this.camera, this.innerHintGroups);
    }

    mount(parentDiv: HTMLDivElement) {
        this.parentDiv = parentDiv;
        this.parentDiv.appendChild(this.renderer.domElement);
        this.resizeObserver.observe(this.parentDiv);
    }

    unmount() {
        if (!this.parentDiv) return;
        this.parentDiv.removeChild(this.renderer.domElement);
        this.resizeObserver.unobserve(this.parentDiv);
        this.parentDiv = null;
    }

    setWidth(newWidth: number) {
        this.currentWidth = Math.min(this.maxWidth, newWidth);
        this.renderer.setSize(
            this.currentWidth,
            this.currentWidth / this.aspectRatio,
        );
    }

    // Not sure how to implement yet, will do in the future
    // setFromState() {}

    clean() {
        this.stopAnimation();
        this.renderer.domElement.removeEventListener(
            "pointerdown",
            this.pointerDownEventListener,
        );
        this.renderer.domElement.removeEventListener(
            "pointerup",
            this.pointerDownEventListener,
        );
        this.renderer.domElement.removeEventListener(
            "pointermove",
            this.pointerMoveEventListener,
        );
    }
}

export const skewbStateRenderer = new SkewbStateRenderer();
