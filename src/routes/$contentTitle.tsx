import {
    createFileRoute,
    notFound,
    useLoaderData,
    useParams,
} from "@tanstack/react-router";
import Markdown from "react-markdown";

const mdFiles = import.meta.glob("#/content/*.md", {
    query: "?raw",
    import: "default",
});

export const Route = createFileRoute("/$contentTitle")({
    loader: async ({ params }) => {
        try {
            const mdString =
                await mdFiles[`/src/content/${params.contentTitle}.md`]();
            return mdString;
        } catch {
            throw notFound();
        }
    },
    component: RouteComponent,
});

function RouteComponent() {
    // const { contentTitle } = Route.useParams();
    const mdString = Route.useLoaderData();
    return (
        <main className="page-wrap px-4 py-12">
            <section className="island-shell rounded-2xl p-6 sm:p-8">
                <Markdown
                    components={{
                        h1: ({ node, ...rest }) => (
                            <h1
                                className="display-title mb-5 text-4xl font-bold text-(--sea-ink) sm:text-5xl"
                                {...rest}
                            />
                        ),
                        h2: ({ node, ...rest }) => (
                            <h2
                                className="mb-3 text-2xl font-semibold text-(--sea-ink)"
                                {...rest}
                            />
                        ),
                        h3: ({ node, ...rest }) => (
                            <h3
                                className="mb-3 text-xl font-semibold text-(--sea-ink)"
                                {...rest}
                            />
                        ),
                        h6: ({ node, ...rest }) => (
                            <h6 className="island-kicker mb-2" {...rest} />
                        ),
                        p: ({ node, ...rest }) => (
                            <p
                                className="mb-2 text-base leading-6 text-(--sea-ink-soft)"
                                {...rest}
                            />
                        ),
                    }}
                >
                    {mdString}
                </Markdown>
            </section>
        </main>
    );
}
