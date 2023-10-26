const todoService = require('../service/TodoService');
async function getAllTodos(req,res,next){
    let todo =await todoService.getAllToDos();
    return res.json(todo);
}

async function getToDoById(req,res,next){
  let todoId = req.params['id'];

  try{
   let todo = await todoService.getToDoById(todoId);
   if(!todo){
       res.status(400).json({
           error : "not found",
       })
   }
   else {
       return res.json(todo);
   }
  }
  catch (e){
      res.status(400).json({
          error : "not found"
      });
  }
}

async function createTodo(req,res,next){
    console.log("req body post", req.body);
    try{
        let todo = await todoService.newTodo(req.body);
        if (!todo){
            throw Error("Cannot save todo");
        }
        await res.status(201).json(todo);
    }catch (err){
        console.log(err);
        await res.status(400).json({message : err});
    }

}

async function updateTodo(req,res,next){
    try{
        let todoId = req.params['id'];
        console.log("Id",todoId,"todo",req.body);
        const todo = await todoService.updateTodo(todoId,req.body);
        if (!todo){
            throw Error("Cannot be Updated!")
        }
        await res.status(200).json(todo);
    }
    catch (err){
        console.log(err);
        await res.status(400).json({message:err});
    }
}

async function deleteTodo(req,res,next){
    try{
        let todoId = req.params['id'];
        console.log("Id",todoId,"todo",req.body);
        const todo = await todoService.deleteTodo(todoId);
        if (!todo){
            throw Error("Cannot be deleted!")
        }
        await res.status(200).json(todo);
    }
    catch (err){
        console.log(err);
        await res.status(400).json({message:err});
    }
}

async function getAllCompletedTodo(req,res){
 let todo = await todoService.getAllCompletedTodo();
 res.json(todo);
}

module.exports={
    getAllTodos,
    getToDoById,
    createTodo,
    updateTodo,
    deleteTodo,
    getAllCompletedTodo
}