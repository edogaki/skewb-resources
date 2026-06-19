import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({ component: App });

function App() {
    return (
        <main className="page-wrap px-4 pb-8 pt-14">
            <section className="island-shell rise-in relative overflow-hidden rounded-4xl px-6 py-10 sm:px-10 sm:py-14">
                <div className="pointer-events-none absolute -left-20 -top-24 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(79,184,178,0.32),transparent_66%)]" />
                <div className="pointer-events-none absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(47,106,74,0.18),transparent_66%)]" />
                <p className="island-kicker mb-3">Edogaki's</p>
                <h1 className="display-title mb-5 max-w-3xl text-4xl leading-[1.02] font-bold tracking-tight text-(--sea-ink) sm:text-6xl">
                    Skewb Resources
                </h1>
                <p className="max-w-2xl text-base text-(--sea-ink-soft) sm:text-lg">
                    Helpful tools for Skewbers
                </p>
                {/*
                <div className="flex flex-wrap gap-3">
                    <a
                        href="/about"
                        className="rounded-full border border-[rgba(50,143,151,0.3)] bg-[rgba(79,184,178,0.14)] px-5 py-2.5 text-sm font-semibold text-[var(--lagoon-deep)] no-underline transition hover:-translate-y-0.5 hover:bg-[rgba(79,184,178,0.24)]"
                    >
                        About This Starter
                    </a>
                    <a
                        href="https://tanstack.com/router"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="rounded-full border border-[rgba(23,58,64,0.2)] bg-white/30 px-5 py-2.5 text-sm font-semibold text-[var(--sea-ink)] no-underline transition hover:-translate-y-0.5 hover:border-[rgba(23,58,64,0.35)]"
                    >
                        Router Guide
                    </a>
                </div>
                */}
            </section>

            <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                    [
                        "Skewb Trainer",
                        "Includes NS Center trainer.",
                        "https://edogaki.github.io/skewb-trainer/",
                    ],
                    [
                        "Skewb Layer Solver",
                        "Input your skewb and find out the minimum layer alg for each face.",
                        "/layer-solver",
                    ],
                ].map(([title, desc, href], index) => (
                    <Link to={href} key={title}>
                        <article
                            className="island-shell feature-card rise-in rounded-2xl p-5 min-h-35"
                            style={{ animationDelay: `${index * 90 + 80}ms` }}
                        >
                            <h2 className="mb-2 text-base font-semibold text-(--sea-ink)">
                                {title}
                            </h2>
                            <p className="m-0 text-sm text-(--sea-ink-soft)">
                                {desc}
                            </p>
                        </article>
                    </Link>
                ))}
            </section>

            {/*
            <section className="island-shell mt-8 rounded-2xl p-6">
                <p className="island-kicker mb-2">Quick Start</p>
                <ul className="m-0 list-disc space-y-2 pl-5 text-sm text-[var(--sea-ink-soft)]">
                    <li>
                        Edit <code>src/routes/index.tsx</code> to customize the
                        home page.
                    </li>
                    <li>
                        Update <code>src/components/Header.tsx</code> and{" "}
                        <code>src/components/Footer.tsx</code> for brand links.
                    </li>
                    <li>
                        Add routes in <code>src/routes</code> and tweak visual
                        tokens in <code>src/styles.css</code>.
                    </li>
                </ul>
            </section>
            */}
        </main>
    );
}
