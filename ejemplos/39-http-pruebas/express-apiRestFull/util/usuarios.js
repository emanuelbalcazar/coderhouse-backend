//const getNextId = usuarios => usuarios.length + 1
const getNextId = usuarios => usuarios.length? (usuarios[usuarios.length-1].id + 1) : 1
const getTimestamp = () => Date.now()
const getFechayHora = () => new Date().toLocaleString()

//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
const getIndex = (id,usuarios) => usuarios.findIndex(usuario => usuario.id == id)

//const getFechayHora = new Date().toLocaleString()

module.exports = {
    getNextId,
    getTimestamp,
    getFechayHora,
    getIndex
}