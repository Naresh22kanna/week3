import express from express
const app=express()
const port=1300

app.use(express.json());

app.listen(port,()=>{
    console.log('This port num is 1300')
})

