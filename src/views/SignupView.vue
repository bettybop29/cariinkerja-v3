<template>
<nav-login></nav-login>
  <div class="signup">
    <div class="container-fluid">
      <div class="animated-background">
      <div class="content1">
        <div class="container">
          <div class="row">
            <div class="col-5">
              
              <form @submit.prevent="signUp">
              <div class="form-signup">
                <div class="mb-3">
                  
                  <h2 style="padding-bottom: 20px; font-weight: bold">
                    Sign up
                  </h2>
                  
                  <label class="form-label">Email</label>
                  <input
                    v-model="recruiterEmail"
                    type="email"
                    class="form-control"
                    placeholder="xxxxx@gmail.com"
                    required
                  />
                    <div v-if="this.err == 'User already exists'">
                      <span class="badge bg-danger">{{err}}</span>
                    </div>
                </div>
                <div class="mb-3">
                  <label class="form-label">Password</label>
                  <input
                    v-model="recruiterPassword"
                    type="password"
                    class="form-control"
                    placeholder="Password123."
                    required
                    id="myInput"
                     data-bs-toggle="tooltip" data-bs-placement="left" title="Password must contain at least one number, one capital letter and one special character"
                  />
                  <span class="text-muted sm">*Password must contain at least one number, one capital letter and one special character</span><br>
                  <div v-if="this.err == 'Password must be at least 8 characters'">
                      <span class="badge bg-danger">{{err}}</span>
                    </div>
                    <div v-if="this.err == 'Password must contain at least one number, one capital letter and one special character'">
                      <span class="badge bg-danger">{{err}}</span>
                    </div>
                  <input class="mt-2" type="checkbox" v-on:click="myFunction"> <small class="text-muted">show Password</small> <br>
                </div>
                <div class="mb-3">
                  <label class="form-label">Company</label>
                  <input
                    v-model="recruiterCompany"
                    type="text"
                    class="form-control"
                    placeholder="PT.yourcompany"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Industry</label>
                  <input
                    v-model="recruiterIndustry"
                    type="text"
                    class="form-control"
                    placeholder="ex:Game, technology"
                    required
                  />
                </div>
                <input
                  type="submit"
                  class="btn btn-success"
                  :disabled="searchDisabled"
                  value="SignUp"
                >
                  <div v-if="this.searchDisabled === true">
                   <beat-loader class="pulse" :loading="loading" :color="color" :size="size"></beat-loader>
                  </div>
                  <div v-if="this.searchDisabled == false"></div>
                <router-link to="/login" class="btn btn-danger">Back to Login</router-link>
              </div>
              </form>
              
            </div>
            
            <img src="../assets/Saly.png" alt="" />
            
            <div class="col">
              <div class="container2-fluid">
                <div class="content2">
                  <div class="title mt-5">
                    <h2>Hi Recruiter!<br /></h2>
                    <p>
                      We'd love to know more about you and your company so we can<br /> solve your hiring needs together.
                    </p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minima cupiditate molestiae asperiores! Saepe nemo suscipit quaerat expedita nihil maxime harum veniam magni dolores obcaecati vel sed, unde laudantium amet aspernatur.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "mosha-vue-toastify/dist/style.css";
import { createToast } from "mosha-vue-toastify";
import NavLogin from '../components/NavLogin.vue'
import BeatLoader from 'vue-spinner/src/BeatLoader.vue'



export default {
  name: "SignupView",
  components: {
    NavLogin : NavLogin,
    BeatLoader
  },
  data() {
    return {
      recruiterEmail: "",
      recruiterPassword: "",
      recruiterCompany: "",
      recruiterIndustry: "",
      searchDisabled:false,
      err:"",
      ress:""
    };
  },
  methods: {
    myFunction(){
      var x = document.getElementById("myInput");
          if (x.type === "password") {
            x.type = "text";
          } else {
            x.type = "password";
          }
    },
   
    async signUp() {
    
      let response = '';
      try {
        
        this.searchDisabled = true;
        // const passwordCheck = this.recruiterPassword.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*)(+=._-]{8,}$/)
        // if (passwordCheck != null){
       
        response = await axios.post(
          `http://54.255.4.75:9091/api/v1/auth/recruiter/register?recruiterEmail=${this.recruiterEmail}&recruiterPassword=${this.recruiterPassword}&recruiterCompany=${this.recruiterCompany}&recruiterIndustry=${this.recruiterIndustry}`);
           
          
        // }else {
        //    createToast("Password must contain at least one number, one capital letter and one special character", {type: "danger"} )
        //  }
            
      } catch (err) {
        this.err = err.response.data.message
        this.searchDisabled = false;
        // console.log(this.searchDisabled)
        // console.log(err.response.data.errorCode)
        // createToast(`${err.response.data.message}`, { type: "danger" });

      }
      if(response.status == 200){
        this.searchDisabled = true;
        console.log(this.searchDisabled)
        this.ress = response.status
        console.log(this.ress)
        createToast(`Signup Sukses`, { type: "success" });
        localStorage.setItem("sign-info", JSON.stringify(response.data));
        this.$router.push('/activation')
      }
    },
  },
};
</script>

<style scoped>
.pulse{
  text-align: center;
  margin: 2px;
  transition: 1s;
}
.container-fluid {
  margin-top: 3rem;
   background: linear-gradient(
    to right, rgba(238,238,249,1), rgba(73,186,224,1), rgba(0,212,255,1));
    background-size: 400% 400%;
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
.form-signup {
  background: white;
  padding: 20px;
  border-radius: 20px;
  text-align: left;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  margin-top: 50px;
}

.title {
  padding-left: 230px;
  text-align: left;
  padding-top: 100px;
  color: white;
}
.title h2 {
  font-size: 50px;
  font-weight: bold;
}
.title p {
  font-size: 15px;
}
.btn {
  width: 100%;
  margin: 5px;
}
img {
  width: 350px;
  height: auto;
  position: fixed;
  margin-left: 450px;
  -ms-transform: rotate(20deg); /* IE 9 */
  transform: rotate(-18deg);
}
</style>