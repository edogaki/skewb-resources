import { useLocation } from "@tanstack/react-router";
import { type ReactNode, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export default function DropdownButton({
    className,
    dropdownClassName,
    buttonContent,
    children,
    closeOnChangeURL,
}: {
    className: string;
    dropdownClassName?: string;
    buttonContent: ReactNode;
    children: ReactNode;
    closeOnChangeURL?: boolean;
}) {
    const [isOpen, setIsOpen] = useState(false);
    const divRef = useRef<HTMLDivElement>(null);

    const location = useLocation({
        select: (location) => location.pathname,
    });

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

    // biome-ignore lint/correctness/useExhaustiveDependencies: expected behavior
    useEffect(() => {
        if (closeOnChangeURL) {
            setIsOpen(false);
        }
    }, [location, closeOnChangeURL]);

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
                <div
                    className={twMerge(
                        "absolute z-100 top-full right-0 w-max bg-(--surface-strong) p-2 shadow-md rounded-xl",
                        dropdownClassName,
                    )}
                >
                    {children}
                </div>
            )}
        </div>
    );
}
