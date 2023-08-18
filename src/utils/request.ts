
export async function fetchApi<T>(
    url: string,
): Promise<T> {
    try {
        const headers = new Headers();
        // TODO: Put in .env
        headers.append('Authorization', 'Bearer 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');

        const res = await fetch(url, {
            headers: headers,
        });
        const json = await res.json();

        return json;
    } catch (e) {
        throw `Error when fetching API: ${e}`;
    }
}