/*----------------------------*/
/*    graphiQL -> get all     */
/*----------------------------*/
{
    noticias {
        _id
        titulo
        cuerpo
        autor
        imagen
        email
        vista
  }
}

/*----------------------------*/
/*   graphiQL -> get por id   */
/*----------------------------*/
query{
     noticias(_id: "7") {
        _id
        titulo
        cuerpo
        autor
        imagen
        email
        vista
    }
}

/*-----------------------------*/
/*     graphiQL -> guardar     */
/*-----------------------------*/
mutation {
    guardarNoticia(
        titulo : "hola",
        cuerpo: "mundo",
        autor: "DS",
        imagen: "http://",
        email: "j@d",
        vista: false) {
            _id
            titulo
            cuerpo
            autor
            imagen
            email
            vista
		}
}

/*-----------------------------*/
/*  graphiQL -> delete por id  */
/*-----------------------------*/
mutation {
    borrarNoticia(_id:"1"){
        _id
        titulo
        cuerpo
        autor
        imagen
        email
        vista
    }
}

/*----------------------------------*/
/*      graphiQL -> actualizar      */
/*----------------------------------*/
mutation {
    actualizarNoticia(_id:"1",vista: true) {
        _id
        titulo
        cuerpo
        autor
        imagen
        email
        vista
    }
}

