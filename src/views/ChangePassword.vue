<template>
  <h1> change Password</h1>
  <form @submit.prevent="resetPass">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="password">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" >Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" v-model="password_Confirm">
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" >
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</template>

<script>
import axios from 'axios'
export default {
    name:"ChangePassword",
    data(){
        return{
            password:"",
            password_Confirm:""
        }
    }
    ,
    methods:{
        async resetPass(){
            console.log(this.password)
            console.log(this.password_Confirm)
           const response = await axios.post(`http://54.255.4.75/:9091/api/v1/auth/change-password`,{
               password: this.password,
               passwordConfirm: this.password_Confirm,
               token: this.$route.params.token
           });
           console.log(response)
           
        }
    }
}
</script>

<style scoped>
    h1{
        text-align: center;
        margin: 30px;
    }
</style>