const mongoose=require('mongoose')

mongoose.connect('mongodb://localhost:27017/signUpDetails',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{console.log('Connection has been established');})
.catch((e)=>{console.log('Connection Lost');}) 