<template>
    <div>
        <div class="loginForm">
            <form>
            <h1 class="loginTitle">Login</h1>
            <input type="text" placeholder="Email" required>
            <input type="password" placeholder="Password" required >
            <button class="button">Login</button>
            <span class="newUserTitle">New to ApnaKitchen? <router-link to="/signup">Create account</router-link></span>
        </form>
        </div>
        
    </div>
</template>

<script>
export default {
    name:'loginPage',
    data(){
        return{

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