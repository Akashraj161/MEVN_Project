const express=require('express')
const app=express();
const port=process.env.PORT||4000;   // to run server on available port or 4000
var bodyParser = require('body-parser');
require('./db/conn')  // connecting mongoDb
const userDetails=require('./models/signUpDetails')  // importing data Schema
app.use(express.json())  // to parse the json and use it 
app.use(express.urlencoded({extended:false}));
app.use(bodyParser.urlencoded({
    extended: false
 }));

app.get('/',async(req,res)=>{
    res.send("hello this is backend baby")

})

// To post data
// app.post("/signup",async(req,res)=>{
//     try{
//         const addingNewUser=new userDetails(req.body)
//         console.log(addingNewUser);
        
//         const insertData= await addingNewUser.save()
//         res.status(201).send(insertData)
//     }catch(e){
//         res.status(400).send(e)
        
//     }
// })

app.post("/signup",async(req,res)=>{
        try{

            const password = req.body.password;
            const cpassword = req.body.confirmPassword;

            if(password === cpassword){
                const addingNewUser=new userDetails({
                   name:req.body.name,
                   email:req.body.email,
                   password:password,
                   confirmPassword:cpassword
                }) 
                const insertData= await addingNewUser.save()
                res.status(201).send(insertData)
            }
            else{
                res.send("password does not match")
            }
        }catch(e){
            res.status(400).send(e)
            
        }
    })



//to get
app.get("/signup",async(req,res)=>{
    try{

        const getData= await userDetails.find({});
        res.status(201).send(getData)
    }catch(e){
        res.status(400).send(e)
        
    }
})


app.listen(port ,()=>{
    console.log(`The server is listining at ${port}`)
})