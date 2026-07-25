import { type MouseEventHandler, useEffect, useRef, useState } from "react";
import { type NSCase, nsCasesInfo } from "#/utils/trainer/nsCase";
import NSCaseTrainerAnswerButtonTooltip from "./NSCaseTrainerAnswerButtonTooltip";
import NSCaseTrainerRenderedCase from "./NSCaseTrainerRenderedCase";

function NSCaseTrainerAnswerButton({
    name,
    isError,
    isCorrect,
    onClick,
    useAltName,
    showSkewbRenderer,
}: {
    name: NSCase;
    isError: boolean;
    isCorrect: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
    useAltName?: boolean;
    showSkewbRenderer?: boolean;
}) {
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);
    const [mouseEnteredEvent, setMouseEnteredEvent] = useState<
        | React.MouseEvent<HTMLButtonElement, MouseEvent>
        | React.TouchEvent<HTMLButtonElement>
        | null
    >(null);

    useEffect(() => {
        if (showSkewbRenderer && useAltName) return;
        if (mouseEnteredEvent === null) {
            setIsTooltipOpen(false);
            return;
        }

        if (mouseEnteredEvent.ctrlKey) {
            setIsTooltipOpen(true);
            return;
        }

        const id = setTimeout(() => setIsTooltipOpen(true), 500);
        return () => clearTimeout(id);
    }, [mouseEnteredEvent, showSkewbRenderer, useAltName]);

    const buttonRef = useRef<HTMLButtonElement>(null);
    const tooltipContainerRef = useRef<HTMLDivElement>(null);
    const [isRenderTooltipLeft, setIsRenderTooltipLeft] = useState(false);

    useEffect(() => {
        if (!isTooltipOpen) return;
        if (!buttonRef.current) return;
        if (!tooltipContainerRef.current) return;

        const distanceRight =
            window.innerWidth - buttonRef.current.getBoundingClientRect().right;
        const tooltipWidth =
            tooltipContainerRef.current.getBoundingClientRect().width;
        if (distanceRight < tooltipWidth) {
            setIsRenderTooltipLeft(true);
        } else {
            setIsRenderTooltipLeft(false);
        }
    }, [isTooltipOpen]);

    return (
        <div className="w-full relative">
            <button
                type="button"
                className={`w-full ${showSkewbRenderer ? "rounded-4xl" : "rounded-full"} border border-(--line) ${isError ? "bg-(--error-bg)" : isCorrect ? "bg-(--success-bg)" : "bg-(--surface)"} text-sm  px-0 py-2 font-semibold text-(--sea-ink) no-underline transition hover:-translate-y-0.5 hover:border-(--line-heavy)`}
                onClick={onClick}
                onMouseEnter={(e) => setMouseEnteredEvent(e)}
                onMouseLeave={() => setMouseEnteredEvent(null)}
                onTouchStart={(e) => setMouseEnteredEvent(e)}
                onTouchEnd={() => setMouseEnteredEvent(null)}
                onContextMenu={(e) => e.preventDefault()}
                ref={buttonRef}
            >
                <div>
                    {useAltName
                        ? `${name}: ${nsCasesInfo.get(name)?.altName}`
                        : name}
                </div>
                {showSkewbRenderer && (
                    <div className="w-full flex justify-center-safe">
                        <div className="w-[60%]">
                            <NSCaseTrainerRenderedCase name={name} />
                        </div>
                    </div>
                )}
            </button>
            <div
                className={`${!isTooltipOpen && "hidden"} absolute top-full ${isRenderTooltipLeft ? "right-full" : "left-full"} w-50 z-50 bg-(--surface-strong)`}
                ref={tooltipContainerRef}
            >
                <NSCaseTrainerAnswerButtonTooltip
                    name={name}
                    closeTooltip={() => setIsTooltipOpen(false)}
                />
            </div>
        </div>
    );
}

export default NSCaseTrainerAnswerButton;
