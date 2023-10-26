const express = require('express');
const router = express.Router();
const todos = require("../controller/TodoController");

router.get('/',todos.getAllTodos);
router.get('/completed',todos.getAllCompletedTodo);
router.get('/:id',todos.getToDoById);
router.post('/',todos.createTodo);
router.put('/:id',todos.updateTodo);
router.delete('/:id',todos.deleteTodo);
/*router.get('/download',(req,res,next)=>{
    console.log("file got downloaded");
    res.download('./public/data.txt');
})

router.get('/end',(req,res,next)=>{
    res.send("Connection ended");
    res.end();
})

router.get('/:todoId',(req,res,next)=>{
    console.log('Got it', req.params['todoId']);
    let todoId = req.params['todoId'];
    let todo = todos.find(todo=>todo.id == todoId);
    if(!todo){
        console.log("Not found");
        return res.status(404).json({error : 'Not found'});
    }
    res.json(todo);
})

router.get('/example/b',(req,res,next)=>{
    console.log("The response will be sent by the next function");
    next();
},(req,res)=>{
    res.send('Hello from next function');
})
 */

module.exports = router;