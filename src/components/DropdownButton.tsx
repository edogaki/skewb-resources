import { type ReactNode, useEffect, useRef, useState } from "react";

export default function DropdownButton({
    className,
    buttonContent,
    children,
}: {
    className: string;
    buttonContent: ReactNode;
    children: ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const divRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const onClickOutside = (e: PointerEvent) => {
            if (!divRef.current) return;
            if (!(e.target instanceof Element)) return;
            if (!divRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", onClickOutside);
        return () => {
            document.removeEventListener("click", onClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block" ref={divRef}>
            <button
                type="button"
                className={className}
                onClick={() => setIsOpen((b) => !b)}
            >
                {buttonContent}
            </button>
            {isOpen && (
                <div className="absolute z-100 top-full right-0 w-max bg-(--surface-strong) p-2 shadow-md rounded-xl">
                    {children}
                </div>
            )}
        </div>
    );
}
