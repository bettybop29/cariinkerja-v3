<template>
  <div class="container">
  <div class="position-absolute top-50 start-50 translate-middle shadow p-3 mb-5 bg-body rounded-3" style="width:500px;">
  <form @submit.prevent="resetPass">
    <div class="mb-3">
    <label for="exampleInputEmai2" class="form-label" >Email</label>
    <input type="text" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" v-model="decoded.email" required >
    
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
import "mosha-vue-toastify/dist/style.css";
// import { createToast } from "mosha-vue-toastify";
export default {
    name:"ChangePassword",
    data(){
        return{
            password:"",
            password_Confirm:"",
            decoded:""
            
        }
    }
    ,
    methods:{

 


         resetPass(){
           let response = '';
            try {
              response = axios.post(`http://54.255.4.75:9091/api/v1/auth/change-password?email=${this.decoded.email}&newPassword=${this.password}&confirmPassword=${this.password_Confirm}`)
              
            } catch (err) {
              console.log(response)
            }
            if(response.status === 200){
              console.log(response)
            }


          
          // const fd = new FormData();
          // fd.append('newPassword',this.password)
          // fd.append('confirmPassword',this.password_Confirm)
          // fd.append('email', this.decoded.email)
    
          //  const response = await axios.patch(`http://54.255.4.75/:9091/api/v1/auth/change-password`,fd);
          //  console.log(response)
          //  createToast("Password Changed", { type: "Success" });


          //  const response = await axios.patch(`http://54.255.4.75/:9091/api/v1/auth/change-password`,{
          //      password: this.password,
          //      passwordConfirm: this.password_Confirm,
          //      email: this.decoded.email
          //  });
          //  console.log(response)
          //   createToast("Password Changed", { type: "Success" });
           
        }
    },
    mounted(){
      var token = this.$route.params.token;
      var decoded = jwt_decode(token);
      this.decoded = decoded
    }
  
} 
</script>

<style>
    
</style>