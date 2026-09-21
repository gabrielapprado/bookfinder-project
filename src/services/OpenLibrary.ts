export type Book = {
    title:string,
    author_name?: string[],
    first_publish_year?: number;
    cover_i?: number;
    key: string;
};

type OpenLibraryResponse ={
    docs:Book[];
}

export async function searchBook(query:string, limit:number=12):Promise<OpenLibraryResponse> {
    try {
        const response = await fetch(
            `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}&limit=${limit}`
        );

        if (!response.ok) {
            throw new Error(`Erro ao localizar livro: ${response.status}`);
        }

        const data: OpenLibraryResponse = await response.json();

        return data;

    } catch (err) {
        console.error(err);
        throw err;
    }
}

