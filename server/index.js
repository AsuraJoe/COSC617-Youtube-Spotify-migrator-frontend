const express = require ('express')
const app = express()
const cors= require('cors')
const mongoose = require('mongoose')
const User= require('./models/user.model')
const jwt= require('jsonwebtoken')


app.use(cors())
app.use(express.json())


mongoose.connect('mongodb+srv://asmith204:Phonzo123@cluster0.ouzob.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
app.post('/api/register', async (req, res) => {
    console.log(req.body)
    try{
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
        })
        res.json({status: 'ok'})
    }catch(err){
     res.json({status: 'error', error:'Duplicate Email'})
     console.log(err)
    }
     
 })
 
 app.post('/api/login', async (req, res) => {
  
 
       const user =  await User.findOne({
             email: req.body.email,
             password: req.body.password,
         })
         if (user){
             const token=jwt.sign({
                 name: user.name,
                 email: user.email,

             }, 'test123' )
             return res.json({status:'ok', user:token})
         }else{
             return res.json({status:'error', user:false})
         }
         res.json({status: 'ok'})
      
  })
app.listen(1339, ()=>{
    console.log('server started on 1339')
})