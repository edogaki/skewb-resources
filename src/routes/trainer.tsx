import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/trainer")({
    beforeLoad: () => {
        throw redirect({
            to: "/trainers/ns-center",
        });
    },
    component: RouteComponent,
});

function RouteComponent() {
    return <div></div>;
}
