import express from 'express'
const app= express()

const port=1200;

app.listen(port,()=>{
    console.log('This port num is 1200')
})
const students = [
    { id: 1, name: "Naresh", department: "IT", age: 22 },
    { id: 2, name: "Viswa", department: "CSE", age: 21 },
    { id: 3, name: "Gokul", department: "IT", age: 23 },
    { id: 4, name: "Sundar", department: "ECE", age: 22 },
    { id: 5, name: "Fazil", department: "CSE", age: 24 }
];

 
/* app.get(['/student/:id','/stu/:id','/students/:id'],(req,res)=>{
    const id = parseInt(req.params.id)
    if(isNaN(id)){
            return res.status(400).send("Id not found please enter valid id")
    }
    const st= students.find((stu)=>stu.id===id);
    if(st){     
        res.send(st)
    }else{
        res.status(404).send({Msg: 'User id not found'})
    }
})


   
app.get(['/student','/stu','/students'],(req,res)=>{
    const {filter,value}=req.query;
 if(!filter || !value){
    res.send(students)
}else
     {
    res.send(students.filter ((ss)=>String(ss[filter]).toLowerCase().includes(value.toLowerCase())))
}
}) */

app.get('/api',(req,res)=>{
        const {name,department,age}= req.query

      const a=  students.filter((x)=>{
            return (!name || x.name.toLowerCase() .includes( name.toLowerCase())
        )  &&
             (!department || x.department.toLowerCase() === department.toLowerCase()) && 
            (!age || x.age === Number(age))
        })
        if(a.length>0){
            return res.send(a);
        }else{
            res.send('Please check the value');
        }
})

