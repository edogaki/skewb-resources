export function unslug(title: string) {
    return title.replaceAll("-", " ").replaceAll("_", "-");
}

export function getBlogInfoFromLink(link: string) {
    const { date, title } = link.match(
        /(?<date>\d{4}-\d{2}-\d{2})-(?<title>.*)$/,
    )?.groups || { date: "1970-01-01", title: link };
    return { link, date, title: unslug(title) };
}
