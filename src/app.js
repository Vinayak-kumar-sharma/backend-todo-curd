const express = require('express')
const cors = require('cors')
const pool = require("./database.js")
const app = express()

app.use(cors())
app.use(express.json())

const port = 3000;

//Routes..

app.post("/todo",async(req,res)=>{
  try {
    
    const{ title } = req.body;
    const newtodo = await pool.query('INSERT INTO todo (title) VALUES($1) RETURNING *',
      [title]
    )

    res.json(newtodo.rows[0])

  } catch (error) {
    console.error(error.message)
  }
})

app.get("/",async(req,res)=>{
  try {
    const alltdo = await pool.query('SELECT * FROM todo')
    res.json(alltdo.rows)
  } catch (error) {
    console.error(error.message)
  }
})

app.get("/todo/:id",async(req,res)=> {
  try {
    const {id} = req.params
    const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1',[id])

    res.json(todo.rows)
  } catch (error) {
    console.error(error.message)
  }
})

app.put("/todos/:id",async(req,res)=>{
  try {
    const{ id } = req.params;
    const{ title } = req.body;

    const updatetodo = await pool.query('UPDATE todo SET title = $1 WHERE todo_id = $2',[title, id])

      res.json("TODO was updated!",updatetodo)

  } catch (error) {

    console.error(error.message)
    
  }
})

app.delete("/todo/:id",async(req,res)=>{
  try{
    const{ id } = req.params
    const tododelete = await pool.query('DELETE FROM todo WHERE todo_id = $1',[id])

    res.json('Todo was deleted!')
  }catch(error){
    console.error(error.message)
  }
})




app.listen(port,()=>{
  console.log("server is running")
})

