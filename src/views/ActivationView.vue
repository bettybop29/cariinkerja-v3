<template>
<div class="container">
  <!-- <h1>Thankyou For Register</h1>
  <h3>check your email for activation</h3>
    
        <router-link class="btn btn-primary" to="/login">Login</router-link>
    
  </div> -->
  <div class="card" style="width: 30rem;">
  <img src="http://54.255.4.75:9091/resources/0be0zx99d5y9ewd.jpeg" class="card-img-top" alt="..." >
  <div class="card-body">
    <h5 class="card-title">Check Your Email For Activation</h5>
    <p class="card-text">Email has been sent to {{this.email}}</p>
    
  </div>
</div>
  </div>
</template>

<script>
export default {
    name:"ActivationView",
    data(){
        return{
            email:""
        }
    },
    mounted(){
        this.email = JSON.parse(localStorage.getItem("user-info")).data.recruiterEmail   
    }
}
</script>

<style scoped>
    .card{
        
        position: fixed;
        margin: 90px;
        margin-left: 360px;
        border-radius: 20px;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
        text-align: center;
    }
</style>