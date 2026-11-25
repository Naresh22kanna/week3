import express from 'express'

const app=express()

const port =1000;

app.listen(port,()=>{
    console.log('this port num is 1000');
})

const products = [
    {id:1, product: 'Mobile'},
    {id:2, product: 'TV'},
    {id:3, product: 'Tab'},
    {id:4, product: 'Laptop'},
]

/* app.get(['/products', '/pro','/product'],(req,res)=>{
    res.send(product);
} ) */

app.get(['/products/:id', '/pro/:id','/product/:id'],(req,res)=>{
    const id = parseInt(req.params.id);
    if(isNaN(id)){
        return res.status(400).send({Msg:'Number not found'})
    }
   const pr = products.find((product)=>product.id === id)

   if(pr){
    res.send(pr);
   }else {
   return res.send({msg: 'User Not Found'})
   }
} )
app.get('/',(req,res)=>{
    res.send({msg:'Please check the URL'})
})

app.get(['/products', '/pro','/product'],(req,res)=>{
    const {query:{filter,value}}  = req;
    console.log(filter,value);
     if(!filter || !value){
    res.send(products)
}else
     {
    
    res.send(products.filter(((x)=>x['product'].toLowerCase().includes(value))))   
}}
 )