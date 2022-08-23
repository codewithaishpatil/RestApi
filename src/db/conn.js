//db connection with mongoos
const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/students" ).then(()=>{
    console.log("connection sucess...");
})
    .catch((e)=>{
    console.log("no connection");
})