import { type ReactNode, useState } from "react";

export default function Accordion({
    title,
    defaultIsOpen,
    children,
}: {
    title: string;
    defaultIsOpen: boolean;
    children: ReactNode;
}) {
    const [isOpen, setIsOpen] = useState(defaultIsOpen);
    return (
        <div className="w-full">
            <button
                type="button"
                className="flex items-center w-full rounded-sm border border-(--line) hover:border-(--line-heavy) bg-(--surface) text-xl text-start px-5 py-2.5 font-semibold text-(--sea-ink) no-underline transition"
                onClick={() => setIsOpen((v) => !v)}
            >
                {title}
                <span className="ml-auto text-sm">{isOpen ? "▲" : "▼"}</span>
            </button>
            <div className={`${isOpen ? "" : "hidden"} p-2`}>{children}</div>
        </div>
    );
}
