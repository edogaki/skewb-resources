import { type ReactNode, useEffect, useRef, useState } from "react";

export default function Tooltip({
    content,
    children,
}: {
    content: ReactNode;
    children: ReactNode;
}) {
    const [isTooltipOpen, setIsTooltipOpen] = useState(false);
    const [mouseEnteredEvent, setMouseEnteredEvent] = useState<
        | React.MouseEvent<HTMLSpanElement, MouseEvent>
        | React.TouchEvent<HTMLSpanElement>
        | null
    >(null);

    useEffect(() => {
        if (mouseEnteredEvent === null) {
            setIsTooltipOpen(false);
            return;
        }

        setIsTooltipOpen(true);
        /*
        uncomment and comment the line on top if adding delay
        if (mouseEnteredEvent.ctrlKey) {
            setIsTooltipOpen(true);
            return;
        }
        const id = setTimeout(() => setIsTooltipOpen(true), 500);
        return () => clearTimeout(id);
        */
    }, [mouseEnteredEvent]);

    const containerRef = useRef<HTMLDivElement>(null);
    const tooltipRef = useRef<HTMLDivElement>(null);
    const [isRenderTooltipLeft, setIsRenderTooltipLeft] = useState(false);

    useEffect(() => {
        if (!isTooltipOpen) return;
        if (!containerRef.current) return;
        if (!tooltipRef.current) return;

        const distanceRight =
            window.innerWidth -
            containerRef.current.getBoundingClientRect().right;
        const tooltipWidth = tooltipRef.current.getBoundingClientRect().width;
        if (distanceRight < tooltipWidth) {
            setIsRenderTooltipLeft(true);
        } else {
            setIsRenderTooltipLeft(false);
        }
    }, [isTooltipOpen]);

    return (
        // biome-ignore lint/a11y/noStaticElementInteractions: only hover events, no clicking
        <span
            className="relative"
            onMouseEnter={(e) => setMouseEnteredEvent(e)}
            onMouseLeave={() => setMouseEnteredEvent(null)}
            onTouchStart={(e) => setMouseEnteredEvent(e)}
            onTouchEnd={() => setMouseEnteredEvent(null)}
            onContextMenu={(e) => e.preventDefault()}
            ref={containerRef}
        >
            {children}
            <div
                className={`${!isTooltipOpen && "hidden"} absolute top-full ${isRenderTooltipLeft ? "right-full" : "left-0"} w-50 z-50 bg-(--surface-strong) shadow-lg rounded-md`}
                ref={tooltipRef}
            >
                <div
                    className="w-full p-2"
                    onTouchStart={(e) => setMouseEnteredEvent(e)}
                    onTouchEnd={() => setMouseEnteredEvent(null)}
                >
                    {content}
                </div>
            </div>
        </span>
    );
}
