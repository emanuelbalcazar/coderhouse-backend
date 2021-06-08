const Usuario = require('../model/usuario');

class UsuarioController {

    constructor() {
        this.usuarios = [];
    }

    generar(cant = 50) {
        for (let i = 0; i < cant; i++) {
            this.usuarios.push(Usuario.generarUsuario());
        }

        return this.usuarios;
    }

    buscarPorId(id) {
        const usuario = this.usuarios.find(usuario => usuario.id === id);
        return usuario || { error: `Usuario con id ${id} no encontrado` };
    }

    listar() {
        return this.usuarios;
    }

    agregar(usuario) {
        let id = Usuario.generarId();
        usuario.id = id;
        this.usuarios.push(usuario);

        return this.usuarios;
    }

    actualizar(id, datos) {
        this.usuarios = this.usuarios.map(usuario => {
            if (usuario.id === id) {
                let actualizado = Object.assign(usuario, datos);
                console.log(actualizado);
                return actualizado;
            }

            return usuario;
        });

        return this.usuarios;
    }

    eliminar(id) {
        this.usuarios = this.usuarios.filter(usuario => {
            return (usuario.id !== id);
        });

        return this.usuarios;
    }
}

module.exports = new UsuarioController();