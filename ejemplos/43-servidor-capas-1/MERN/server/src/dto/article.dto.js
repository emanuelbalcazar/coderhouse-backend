class ArticleDTO {

    #id
    #title
    #text
    #author

    constructor(id, title, text, author) {
        this.#id = id
        this.#title = title;
        this.#text = text;
        this.#author = author;
    }

    getId() {
        return this.#id;
    }

    getTitle() {
        return this.#title;
    }

    getText() {
        return this.#text;
    }

    getAuthor() {
        return this.#author;
    }

    toJSON() {
        return {
            id: this.#id,
            title: this.#title,
            author: this.#author,
            text: this.#text
        }
    }
}

module.exports = ArticleDTO;