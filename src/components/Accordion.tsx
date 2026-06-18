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
    return <div>{children}</div>;
}
