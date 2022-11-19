<template>
    <div>
        <div class="container1">
            <div class="leftside">
                 <img class="homeMainImg" src="../assets/mainPic.jpg"  alt="">
            </div>
           <div class="rightside">
             <h1 class="branding">EaTHealthY</h1>
             <br>
            <h3 class="moto">Now eat the best home made food away from home</h3>

            <div class="input-group flex-nowrap">
  <input type="text" class="form-control" placeholder="Search for Dishes" aria-label="Username" aria-describedby="addon-wrapping">
  <button class="btn btn-danger">search</button>
            </div>
           </div>
           
        </div>
        <div class="container2">
            <div>
                <hr>
                <h2 class="container2-heading">Pet Puja</h2>
            </div>
            <div class="food-items">
                <div class="Food-desc">
                    <div class="Food-img">
                        <router-link to="details/1"><img src="https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_RICEBOWL_1.png" alt=""></router-link>
                    </div>
                    <div class="Food-caption">
                        <h4>Rice Bowl</h4>
                    </div>
                </div>
                <div class="Food-desc">
                    <div class="Food-img">
                        <router-link to="details/2"><img src="https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_THALI_1.png" alt=""></router-link>
                    </div>
                    <div class="Food-caption">
                        <h4>Indian Thali</h4>
                    </div>
                </div>
                <div class="Food-desc">
                    <div class="Food-img">
                        <router-link to="details/3"><img src="https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_KHICHDI_2.png" alt=""></router-link>
                    </div>
                    <div class="Food-caption">
                        <h4>Khichdi</h4>
                    </div>
                </div>
                <div class="Food-desc">
                    <div class="Food-img">
                        <router-link to="details/4"><img src="https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_DESSERTS_2.png" alt=""></router-link>
                    </div>
                    <div class="Food-caption">
                        <h4>Dessert</h4>
                    </div>
                </div>
                <div class="Food-desc">
                    <div class="Food-img">
                        <router-link to="details/1"><img src="https://ik.imagekit.io/curefoods/image/eatfit-category/CFI_RICEBOWL_1.png" alt=""></router-link>
                    </div>
                    <div class="Food-caption">
                        <h4>Rice Bowl</h4>
                    </div>
                </div>
            </div>
           
        </div>
    <div class="container2">
        <div class="row Food-desc">
        <div class="col-md-4 card " v-for="(data,index) in products" :key="index">
        <img @click="goTodetail(data.productId)" :src="data.image" class="img-fluid">
         <h3 @click="goTodetail(data.productId) " class="Food-caption">{{data.productTitle}}</h3>
         <div>
            <span class="pricetag">Price</span>
            <button class="btn add btn-danger">Add</button>
         </div>
        
      </div>
    </div>
    </div>
     
        
    </div>
</template>
<script>
 import {products} from '../websiteData'
export default {
    name:'homePage',
    data(){
        return{
            title:'home',
       products,
        }
    },
    methods:{
        goTodetail(prodId){
            this.$router.push({name:'detailsPage',params:{Pid:prodId}})
        }
    }
}
</script>

<style scoped>

.container1{
    display: flex;
   
}
.homeMainImg{
    height: 500px;
    width: 50vw;
    padding: 0 20px;
}
.branding{
    text-align: center;
    padding-top:100px ;
    color: #E14D2A;
    font-weight: 900;
}

.moto{
    text-align: center;
    color: #E14D2A;
    font-weight: 700;
}

.input-group{
    margin-top: 40px;
    padding: 10px 10px;
}

.container2{
    padding-top: 20px;
    margin-top: 10px;
    width: 90vw;
    margin: auto;
    cursor: default;
}

.container2-heading{
    color: #E14D2A;
}

.food-items{
    display: flex;
    margin: 20px;
    overflow-x: scroll;
   
}

.Food-desc{
    padding: 30px;
    cursor: default;
}

.Food-caption{
    text-align: center;
}

.card{
    width: 300px;
    height: 400px;
    border: 2px solid black;
    margin: 20px 44px;
    cursor: pointer;
}
.pricetag{
    padding-top: 20px;
    font-weight: 800;
}

.add{
    margin-left: 200px;
}


</style>