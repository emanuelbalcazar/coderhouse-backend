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
     return this.id;   
    }

    getTitle() {
        return this.title;
    }

    getText() {
        return this.text;
    }

    getAuthor() {
        return this.author;
    }
}

module.exports = ArticleDTO;