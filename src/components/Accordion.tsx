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
        <div className="w-100">
            <button
                type="button"
                className="flex items-center w-100 rounded-sm border border-[rgba(23,58,64,0.2)] bg-white/30 text-xl text-start px-5 py-2.5 font-semibold text-(--sea-ink) no-underline transition hover:border-[rgba(23,58,64,0.66)] "
                onClick={() => setIsOpen((v) => !v)}
            >
                {title}
                <span className="ml-auto text-sm">{isOpen ? "▲" : "▼"}</span>
            </button>
            <div className={`w-100 ${isOpen ? "" : "hidden"} p-2`}>
                {children}
            </div>
        </div>
    );
}
