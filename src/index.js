const express  = require('express') //importando o express

const  app = express()

app.use(express.json()) //Informando ao express que ele pode obter o body param como JSON

/* Metodos HTTP
    GET - Buscar uma informação dentro do servidor
    POST - Inserir uma informação no servidor
    PUT - Alterar uma informação no servidor
    PATCH - Alterar uma informação específica no servidor
    DELETE - deletar uma informação no servidor
*/

/* Parâmetros
    *Route Params - Identificar um recurso, para poder buscar, editare  deletar o recurso, ex: /courses/:id, :id seria um route param
    *Query Params - Parametros de paginação, filtro /courses?page=3&order=asc, esse '?page=3&order=asc' é um query param - Sendo opcional
    *Body Params - Objetos que serão inseridos ou alterados (JSON)
*/





app.get('/courses', (request, response) =>{
    const query = request.query //Vai pegar o valor do parametro query
    console.log(query)
    return response.json(['Curso1', 'Curso2', 'Curso3'])
})

app.post('/courses', (request, response) =>{
    const body = request.body //Obtendo o body param
    console.log(body)
    return response.json(['Curso1', 'Curso2', 'Curso3', 'Curso4'])
})

app.put('/courses/:id', (request, response) =>{
    const {id} = request.params //Vai pegar o valor de :id, ou seja, o rout param
    console.log(id)
    return response.json(['Curso6', 'Curso2', 'Curso3', 'Curso4'])
})

app.patch('/courses/:id', (request, response) =>{
    return response.json(['Curso6', 'Curso7', 'Curso3', 'Curso4'])
})

app.delete('/courses/:id', (request, response) =>{
    return response.json(['Curso6', 'Curso7', 'Curso4'])
})



app.listen(3333) //Aplicação sendo inicializada na porta 3333
