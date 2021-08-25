import { books } from "./books.js"

export const bookShelfHtml = () => {
    return `
    <h1>Books on Shelf</h1>
    <div>
        <h2>Book Shelf</h2>
    </div>

    <div>
        <h2>Books</h2>
        ${books()}
    </div>

    <button>Submit button</button>
    `
}