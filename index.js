const express= require("express");
const app = express();



app.get('/',(req,res)=>{

res.json({message:"done"})

})


app.listen(3000,()=>{
    console.log('app is running....')
})