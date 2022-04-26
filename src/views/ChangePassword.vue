<template>
  <div class="container">
  <div class="position-absolute top-50 start-50 translate-middle shadow p-3 mb-5 bg-body rounded-3" style="width:500px;">
  <form @submit.prevent="resetPass">
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="decoded.email" required>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">New Password</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="password" required>
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" >Confirm Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" v-model="password_Confirm" required>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</div>

</template>

<script>
import axios from 'axios'
import jwt_decode from "jwt-decode";
var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NTA5NDM0MjUsImVtYWlsIjoiZnJpdHphZ3JpY2lhLmFzQGdtYWlsLmNvbSJ9.doW9oDmQ9AvU5T8IrOQNwG4hBnyqGTvfMEdbrfhB48k";
var decoded = jwt_decode(token);
 
console.log(decoded);
export default {
    name:"ChangePassword",
    data(){
        return{
            password:"",
            password_Confirm:"",
            // email:jwt_decode(this.$route.params.email)
            decoded:""
            
        }
    }
    ,
    methods:{

 


       async resetPass(){
          
          // const fd = new FormData(
          //   this.password,
          //   this.password_Confirm
          // );
          
          // console.log(fd)
          //  const response = await axios.patch(`http://54.255.4.75/:9091/api/v1/auth/change-password`,fd);
           const response = await axios.patch(`http://54.255.4.75/:9091/api/v1/auth/change-password`,{
               password: this.password,
               passwordConfirm: this.password_Confirm,
               email: this.decoded
           });
           console.log(response)
           this.$router.push("/login")
           
        }
    },
    mounted(){
      var token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NTA5NDM0MjUsImVtYWlsIjoiZnJpdHphZ3JpY2lhLmFzQGdtYWlsLmNvbSJ9.doW9oDmQ9AvU5T8IrOQNwG4hBnyqGTvfMEdbrfhB48k";
      var decoded = jwt_decode(token);
      this.decoded = decoded
    }
  
} 
</script>

<style>
    
</style>