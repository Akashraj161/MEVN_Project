<template>
    <div>
        <div class="loginForm">
            <form @submit="signUp()" method="POST" >
            <h1 class="loginTitle">SignUp</h1>
            <input type="text" v-model="name" placeholder="UserName" name="username" >
            <input type="text" v-model="email" placeholder="Email" name="email" >
            <input type="password" v-model="password" placeholder="Password" name="password"  >
            <input type="password" v-model="confirmPassword" placeholder="Confirm Password" name="confirmPassword"  >
            <!-- <button class="button" v-on:click="signUp">Sign Up</button> -->
            <input type="submit" value="SignUp" class="button">
          
        </form>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name:'signUp',
    data(){
        return{
            name:'',
            email:'',
            password: '',
            confirmPassword : ''
        }
    },
    methods:{
        async signUp()
        {

            //console.warn("signup", this.name, this.email,this.password)
           let result =await axios.post("/signup",{
            name: this.name,
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword
           });

           console.log(result);
           if(result.status == 201){
            alert("User sign successful")
           }
           else{
            alert("login failed")
           }
        }
    }
}
</script>

<style scoped>
.loginForm{
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    padding-top: 10px;
    border: 1px solid black;
    width: 450px;
    height: 400px;
   
}
.loginTitle{
    display: block;
    padding:20px 25px

}
.loginForm input {
    display: block;
    width: 400px;
    height: 40px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 25px;
    
}

.button{
    display: block;
    width: 400px;
    height: 35px;
    margin-left: auto;
    margin-right: auto;
    background-color: rgb(181, 181, 240);
    color: #fff;

}

.newUserTitle{
    display: block;
    font-size: 20px;
    margin: 20px 25px;
    
}

.newUserTitle a{
    text-decoration: none;
}
</style>