export default async function Page() {
    const response = await fetch('http://localhost:3000/api/books');
    const books = await response.json();
    return (
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <code>{JSON.stringify(books, null, 2)}</code>
      </main>
    );
}