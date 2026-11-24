
import express from 'express';
const app= express()

const PORT = 2000;

app.get('/',(req,res)=>{
    res.send({msg:'root'});
})

app.get("/users",(req,res)=>{
    res.send(users);
})
app.get("/users/:id",(req,res)=>{
    //console.log(req.params);
    const id = parseInt(req.params.id);
  //  console.log(id);
    if(isNaN(id)){
      return  res.status(400).send({msg: "This is not a number please put valid number"})
    }
    const us=users.find((user)=>user.id ===id);
    //console.log(us);
    if(us){
        return res.send(us)
        
    }
    return res.send({msg: 'User Not Found'})

});

app.listen(PORT,()=>{
    console.log(`This Port num is ${PORT}`);
})

const users = [
     {id : 1,   user_name : "Naresh" },
     {id : 2,   user_name : "Viswa"},
     {id : 3,   user_name : "Gokul"},
     {id : 4,   user_name : "Sundar"},
     {id : 5,   user_name : "Fazil"},
]

