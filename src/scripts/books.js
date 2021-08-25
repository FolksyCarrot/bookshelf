import { getBooks} from "./dataAccess.js"

export const books = () => {
    let html = "<ol>"
        for (const book of getBooks()) {
            html += `<li>${book.name}</li>`
        }
    html += "</ol>"
    return html
}