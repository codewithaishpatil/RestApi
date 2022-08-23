//create server
const express=require("express")
require("./db/conn"); 
const Student=require("./models/studentsSechema"); 
const router=require("./routers/routes"); 
const app=express()
const port= 8000;
app.use(express.json()) ; //middleware in our app
 app.use(router);

app.listen(port ,()=>{
    console.log(`connection is setup at ${port}`)
})