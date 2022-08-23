const express=require("express")
const router=new express.Router();
const Student=require("../models/studentsSechema")

//for checking purpose
router.get("/aish",(req,res)=>{
    res.send("hELLO .");
});


//create a new students
// router.post("/students",(req,res)=>{
//     console.log(req.body)
   
//     const user=new Student(req.body)
//     user.save().then(()=>{
//         return res.sendStatus(200).send(user)
// //  res.sendStatus(200).send(user);
// }).catch((e)=>{
//     return res.sendStatus(400).send(e)
// })
   
// res.send("hello from aish")
// })



//create a new students
router.post("/students", async(req,res)=>{

    try {
        console.log(req.body)  
        const user=new Student(req.body)
        const createuser=await user.save();
      
        res.status(200).send(createuser)
       
       // Error.captureStackTrace(err);
      } catch (error) {
         res.status(400).send(error)
       
    }
   
})


//read data
router.get("/students", async(req,res)=>{
    try {
        const studentData=await Student.find();
        console.log(studentData)
        res.send(studentData)
    } catch (error) {
        res.send(error)
    }
    })
    
    
    //only find one student data
    
    router.get("/students/:id", async(req,res)=>{
        try {
            const _id =req.params.id;
            const studentData=await Student.findById( _id);
           
            console.log(studentData)
                res.send(studentData)
            
           
        } catch (error) {
            res.send(error)
        }
        })
    
    
    //update  student
    router.patch("/students/:id", async(req,res)=>
    {
        try {
            const _id =req.params.id;
            const studentData=await Student.findByIdAndUpdate( _id,req.body,{
                new :true
            }); 
            console.log(studentData)
            res.send(studentData)
        } catch (error) {
            res.status(400).send(error)
           
        }
    }
    
    )
    //delete   student
    router.delete("/students/:id", async(req,res)=>
    {
        try {
            const _id =req.params.id;
            const studentData=await Student.findByIdAndDelete( _id)
            res.send(studentData)
                    
    
        } catch (error) {
            res.status(400).send(error)
           
        }
    }
    
    )







module.exports =router;