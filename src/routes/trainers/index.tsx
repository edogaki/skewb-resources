import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/trainers/")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <main className="page-wrap px-4 py-12">
            <section className="island-shell rounded-2xl p-6 sm:p-8 mb-8">
                <h1 className="display-title mb-3 text-4xl font-bold text-(--sea-ink) sm:text-4xl">
                    Trainers
                </h1>
                <br />
                <Link to="/trainers/ns-center" className="underline">
                    <h2 className="mb-1 text-2xl">NS Center Trainer</h2>
                </Link>
                <Link to="/trainers/ns-case" className="underline">
                    <h2 className="mb-1 text-2xl">NS Case Trainer</h2>
                </Link>
            </section>
        </main>
    );
}
