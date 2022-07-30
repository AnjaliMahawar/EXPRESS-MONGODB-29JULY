console.log('anjali')
//import area
//const something =require('somelibary')
const express =require('express')
const app =express()
const mongoose = require('mongoose');
require('dotenv').config()

async function main(){

    return await mongoose.connect(`mongodb+srv://${process.env.USER_NAME}:${process.env.PASS}@anjaliserver.1968b.mongodb.net/?retryWrites=true&w=majority`)
}
let po =main();
po.then((d)=>{
   console.log('connected')
   //define schema
   //const<class>
   const Students = mongoose.model('Students',{name:String}); //Actual Arg

   let stu1=new Students({name:"anjali"})
   let po =stu1.save()
   let stu2=new Students({name:"kiran"})
   let po2=stu2.save()
   let stu3=new Students({name:'shivk',
                          name:'payal'})
   let po3=stu3.save()
   

   po.then(()=>{
    console.log('saved')
   }).catch(()=>{
    console.log('not saved')
   })
   

}).catch((err)=>{
  console.log('fail')
})



let port = process.env.PORT
app.listen(port,()=>{
    console.log(`server is running`)
})