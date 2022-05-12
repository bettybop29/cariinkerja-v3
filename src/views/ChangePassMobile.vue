<template>
  
    <nav class="row navbar navbar-expand-lg navbar-light bg-white">
            <div class="d-flex justify-content-center">
            <!-- <div class="navbar-nav ms-auto me-auto ms-sm-auto ms-lg-0 ms-md-auto"> -->
            <ul class="navbar-nav ms-auto me-auto d-none d-lg-block">
                <!-- <div class="collapse navbar-collapse" id="navbarNavDropdown"> --> 
                        <li class="nav-item">
                            <a class="navbar-brand me-auto" href="#" style="text-align: right;">
                            <img class="logo" src="frontend/images/logo.png" width="30" alt="logo" />
                        </a>
                            <span class="text-muted">
                                | &nbsp; Find The Best Fit
                            </span>                           
                        </li>                     
                    </ul>
                <!-- </div> -->
            <!-- </div> -->
            </div>
        </nav>
        <div class="container-fluid">
  <div class="justify-content-sm-center">
   
  <div class="position-absolute top-50 start-50 translate-middle shadow p-3 mb-5 bg-body rounded-3" style="width:300px;">
    <img src="http://54.255.4.75:9091/resources/lnp4av9z3ceiw06.png" alt="" style="width:50%; margin-left:56px;">
  <form @submit.prevent="resetPass">
    <div class="mb-3">
    <label for="exampleInputEmai2" class="form-label" hidden >Email</label>
    <input type="text" class="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" v-model="decoded.email" required hidden>
    
  </div>
  <div class="mb-3">
   
    <label for="exampleInputEmail1" class="form-label">New Password</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" v-model="password" required placeholder="Password must contain at least one number, one capital letter and one special character">
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" >Confirm Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" v-model="password_Confirm" required placeholder="Password must contain at least one number, one capital letter and one special character"  >
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
</div>
</div>
</div>
</template>

<script>
import axios from 'axios'
import jwt_decode from "jwt-decode";
import "mosha-vue-toastify/dist/style.css";
import { createToast } from "mosha-vue-toastify";
export default {
    name:"ChangePassMobile",
    data(){
        return{
            password:"",
            password_Confirm:"",
            decoded:""
            
        }
    }
    ,
    methods:{

 


         async resetPass(){
           
           let response = '';
            try {
              response = await axios.post(`http://54.255.4.75:9091/api/v1/jobseeker/change-password?email=${this.decoded.email}&password=${this.password}&confirmPassword=${this.password_Confirm}`)
            //   response = await axios.post(`http://54.255.4.75:9091/api/v1/auth/change-password?email=${this.decoded.email}&newPassword=${this.password}&confirmPassword=${this.password_Confirm}`)

            } catch (err) {
              createToast(`${err.response.data.message}`, { type: "danger " , position: 'top-center'});
              console.log(err.response.data.message)
            }
            if(response.status === 200){
              createToast("Password Changed", { type: "Success" });
              window.open("http://www.cariinkerja.com/api/v1/jobseeker","_self")
            }
        }
    },
    mounted(){
      var token = this.$route.params.token;
      var decoded = jwt_decode(token);
      this.decoded = decoded
    }
  
} 
</script>

<style scoped>
    
    .container-fluid {
  
   background: linear-gradient(
    to right, rgba(238,238,249,1), rgba(73,186,224,1), rgba(0,212,255,1));
    background-size: 400% 400%;
    min-height: 100vh;
  animation: animate-background 10s infinite ease-in-out;
  /* background-color: #060684; */
  padding-bottom: 50px;
}

@keyframes animate-background{
  0% {
    background-position: 0 50%;
  }
  50%{
    background-position: 100% 50%;
  }
  100%{
    background-position: 0 50%;
  }
}
    .btn{
      width: 100%;
    }
    h1{
      text-align: center;
      position: absolute;
      margin-left: 480px;
      margin-top: 7%;
    }
</style>