const mainContainer = document.querySelector("#mainContainer")

const applicationState = {
    books: [],
    booksOnShelf: [],
    shelfs: [],
    HtmlState: {
        bookShelfOneHtml: false,
        bookShelfTwoHtml: false 
    }
}

export const fetchBooks = () => {
    return fetch(`http://localhost:8088/books`)
        .then(response => response.json())
        .then(
            (books) => {
                applicationState.books = books
            }
        )
}

export const getBooks = () => applicationState.books.map(book => ({ ...book }))


export const fetchBooksOnShelf = () => {
    return fetch(`http://localhost:8088/booksOnShelf`)
        .then(response => response.json())
        .then(
            (booksOnShelf) => {
                applicationState.booksOnShelf = booksOnShelf
            }
        )
}

export const getBooksOnShelf = () => applicationState.booksOnShelf.map(book => ({ ...book }))


export const fetchShelves = () => {
    return fetch(`http://localhost:8088/shelfs`)
        .then(response => response.json())
        .then(
            (shelf) => {
                applicationState.shelfs = shelf
            }
        )
}

export const getShelves = () => applicationState.shelfs.map(shelf => ({ ...shelf }))

export const setBookShelfOne = (boolean) => applicationState.HtmlState.bookShelfOneHtml = boolean
export const setBookShelfTwo = (boolean) => applicationState.HtmlState.bookShelfTwoHtml = boolean