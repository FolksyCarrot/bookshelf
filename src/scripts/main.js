import { bookShelfHtml } from "./bookOnShelf.js"
import { fetchBooks, fetchBooksOnShelf, fetchShelves } from "./dataAccess.js"

const mainContainer = document.querySelector("#mainContainer")

const renderHtml = () => {
    fetchBooks()
    fetchBooksOnShelf()
    fetchShelves()
    .then(() => mainContainer.innerHTML = bookShelfHtml() )
    
}

renderHtml()