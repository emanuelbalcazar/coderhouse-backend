class NoticiasBaseDAO {

    getNext_Id(noticias) {
        let lg = noticias.length
        return lg? parseInt(noticias[lg-1]._id) + 1 : 1
    }

    getIndex(_id,noticias) {
        return noticias.findIndex(noticia => noticia? noticia._id == _id: true)
    }
}

export default NoticiasBaseDAO