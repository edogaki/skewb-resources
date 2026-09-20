import { createFileRoute, Link } from "@tanstack/react-router";
import { getBlogInfoFromLink } from "#/utils/blog";

const mdFiles = import.meta.glob("#/content/blog/*.md", {
    query: "?raw",
    import: "default",
});

const blogLinksList = Object.keys(mdFiles).map((path) =>
    path.replace("/src/content/blog/", "").replace(".md", ""),
);

export const Route = createFileRoute("/blog/")({
    component: RouteComponent,
});

const blogPostsInfo = blogLinksList
    .map(getBlogInfoFromLink)
    .sort(({ date: date1 }, { date: date2 }) => date2.localeCompare(date1));

function RouteComponent() {
    return (
        <main className="page-wrap px-4 py-12">
            <section className="island-shell rounded-2xl p-6 sm:p-8">
                <h6 className="island-kicker mb-2">Edogaki's</h6>
                <h1 className="display-title mb-5 text-4xl font-bold text-(--sea-ink) sm:text-5xl">
                    Skewb Blog
                </h1>
                <h2 className="mb-3 text-2xl font-semibold text-(--sea-ink)">
                    Blog Posts
                </h2>
                <div className="flex flex-col gap-1">
                    {blogPostsInfo.map(({ link, date, title }) => (
                        <div key={link}>
                            <Link
                                to="/blog/$blogTitle"
                                params={{ blogTitle: link }}
                                className="underline capitalize"
                            >
                                {date} - {title}
                            </Link>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
}
