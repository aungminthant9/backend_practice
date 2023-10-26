// let todos = [
//     {
//         "userId": 1,
//         "id": 1,
//         "title": "delectus aut autem",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 2,
//         "title": "quis ut nam facilis et officia qui",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 3,
//         "title": "fugiat veniam minus",
//         "completed": false
//     },
//     {
//         "userId": 1,
//         "id": 4,
//         "title": "et porro tempora",
//         "completed": true
//     }
// ];
// function getAllTodos(){
//     return todos;
// }
//
// module.exports = {
//     getAllTodos,
// }
let Todos = require('../model/ToDo');
async function getAllToDos(){
    return Todos.find();
}
async function getToDoById(id){
    let todo = await Todos.findById(id);
    //console.log('get Todo by id ',todo);
    return todo;
}

async function newTodo(todo){
    let newTodo = new Todos(todo);
    return newTodo.save();
}

async function updateTodo(todoId,todo){
    let updateTodo = await Todos.findByIdAndUpdate(todoId,todo,{new:true});
    return updateTodo;
}

async function deleteTodo(todoId){
    let deleteTodo = await Todos.findByIdAndDelete(todoId);
    return deleteTodo;
}

async function getAllCompletedTodo(){
    let todo = await Todos.find({
        completed : true
    });
    return todo;
}

module.exports = {
    getAllToDos,
    getToDoById,
    newTodo,
    updateTodo,
    deleteTodo,
    getAllCompletedTodo
}