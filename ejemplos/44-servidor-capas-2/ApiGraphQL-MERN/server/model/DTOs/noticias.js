function noticiaDTO(noticia,_id,fyh) {
    return {
        ...noticia,
        _id: _id+'',    //convierto id a string
        fyh
    }
}

export default noticiaDTO