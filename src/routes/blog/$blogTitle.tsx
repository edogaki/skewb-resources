import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import Markdown from "react-markdown";
import { getBlogInfoFromLink } from "#/utils/blog";

const mdFiles = import.meta.glob("#/content/blog/*.md", {
    query: "?raw",
    import: "default",
});

export const Route = createFileRoute("/blog/$blogTitle")({
    loader: async ({ params }) => {
        try {
            const mdString =
                await mdFiles[`/src/content/blog/${params.blogTitle}.md`]();
            return {
                mdString,
                ...getBlogInfoFromLink(params.blogTitle),
            };
        } catch {
            throw notFound();
        }
    },
    component: RouteComponent,
});

function RouteComponent() {
    // const { contentTitle } = Route.useParams();
    const { mdString, date, title } = Route.useLoaderData();
    return (
        <main className="page-wrap px-4 py-12">
            <section className="island-shell rounded-2xl p-6 sm:p-8">
                <h6 className="island-kicker mb-2">Edogaki's Skewb Blog</h6>
                <h1 className="display-title mb-2 text-4xl font-bold text-(--sea-ink) sm:text-5xl capitalize">
                    {title}
                </h1>
                <div className="italic text-sm mb-5">Published {date}</div>
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
                <Link to="/blog" className="underline">
                    Back
                </Link>
            </section>
        </main>
    );
}
