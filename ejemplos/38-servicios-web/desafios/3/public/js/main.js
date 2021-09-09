async function sendQueryGraphQL(query, variables) {
    try {
        let r = await fetch('/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables 
            })
        })
        let {data} = await r.json()
        console.log(data)
        return data
    }
    catch(error) {
        console.error(error)
    }
}

async function getMensaje() {
    let data = await sendQueryGraphQL('{mensaje}')
    document.querySelector('h1').innerHTML = data.mensaje
}

async function getArticulos() {
    let data = await sendQueryGraphQL('{articulos}')
    document.querySelector('h1').innerHTML = data.mensaje
}

function setListeners() {
    document.querySelector('form').addEventListener('submit', async e => {
        e.preventDefault()

        let titulo = document.querySelectorAll('input')[0].value
        let texto = document.querySelectorAll('input')[1].value
        let autor = document.querySelectorAll('input')[2].value
        document.querySelectorAll('input').forEach(input => {
            input.value = ''  
        })
        
        document.querySelectorAll('input')[1].value = ''
        document.querySelectorAll('input')[2].value = ''

        const articulo = {titulo, texto, autor}
        console.log(articulo)


        const query = `
        mutation guardarArticulo($titulo: String!, $texto: String!, $autor: String! ) {
            guardarArticulo(titulo: $titulo, texto: $texto, autor: $autor ) {
                ... articulosFields
            }
        }
        fragment articulosFields on Articulo {
            titulo
            texto
            autor
        }`
        const variables = articulo

        let rta = await sendQueryGraphQL(query,variables)
        return rta
    })

    document.querySelector('a').addEventListener('click', async e => {
        e.preventDefault()

        let data = await sendQueryGraphQL(`
        {
            articulos {
              titulo
              texto
              autor
            }
          }        
        `)
        //console.log(data)
        document.querySelector('pre').innerText = JSON.stringify(data.articulos,null,2)
    })
}

function start() {
    setListeners()
    getMensaje()
}

start()