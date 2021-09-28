function noticiaDTO(noticia,_id,fyh) {
    return {
        ...noticia,
        _id,
        fyh
    }
}

export default noticiaDTO