const router = require('express').Router();
const controller = require('./controller');



//list
router.get('/todo', controller.listTodo);

//create
router.post('/todo', controller.createTodo);

//read get
router.get('/todo/:id', controller.readTodo)

//update put
router.put('/todo/:id', controller.updateTodo)


//delete delete
router.delete('/todo/:id', controller.deleteTodo)



module.exports = router;
  
