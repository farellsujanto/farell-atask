
export async function fetchApi<T>(
    url: string,
): Promise<T> {
    try {
        const headers = new Headers();
        // TODO: Put in .env
        headers.append('Authorization', `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`);

        const res = await fetch(url, {
            headers: headers,
        });
        const json = await res.json();

        return json;
    } catch (e) {
        window.alert(e);
        throw `Error when fetching API: ${e}`;
    }
}