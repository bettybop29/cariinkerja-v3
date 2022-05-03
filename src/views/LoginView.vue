<template>
<nav-component></nav-component>
  <div class="login mt-5 p-5">
    <div class="container">
      <div class="row">
        <div class="col-md">
          <h1>
            Best <br />for<br />
            Company
          </h1>
        </div>
        <div class="col-md">
          <img src="../assets/Saly.png" alt="" />
        </div>
        <div class="col-md">
          <div class="formlogin">
            <div class="form-floating mb-3">
              <form action="" @submit.prevent="login">
                <label for="validationDefault01" class="form-label"
                  >Email</label
                >
                <input
                  type="email"
                  v-model="email"
                  class="form-control"
                  id="floatingInput"
                  aria-describedby="emailHelp"
                  placeholder="email"
                  required
                />
                <label for="floatingInput" class="form-label"
                  >Password</label
                >
                <input
                  type="password"
                  v-model="password"
                  class="form-control"
                  id="myInput"
                  placeholder="password"
                  required
                  
                />
                <input class="mt-2" type="checkbox" v-on:click="myFunction"> <small class="text-muted">show Password</small> <br>
                <p><router-link class="forgot" to="/resetpassword">Forgot Password?</router-link></p>
                 <input type="submit" class="btn btn-primary" :disabled="searchDisabled" value="Login">
                 
              </form>
              <div v-if="this.searchDisabled == true">
                   <beat-loader class="pulse" :loading="loading" :color="color" :size="size"></beat-loader>
                  </div>
            </div>
            <div>
             
             
            </div>
            <br />
            Jika anda belum memiliki akun
            <router-link class="signup" to="/signup">Signup</router-link>
            
          </div>
        </div>
      </div>
    </div>
  </div>

  <footer class="mt-3">
    <div class="container">
      <div class="row">
        <div class="col-5">
          <h2>CariinKerja</h2>
          <span
            >Jl. Sudirman<br />
            Jakarta Pusat</span
          >
        </div>
        <div class="col-md">
          <ul class="navbar-nav mr-auto p-2">
            <h2>Company</h2>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                >About Us</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Blog</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Career</a>
            </li>
          </ul>
        </div>
        <div class="col-md">
          <ul class="navbar-nav mr-auto p-2">
            <h2>Features</h2>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                >Reviews</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Community</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Social Media</a>
            </li>
          </ul>
        </div>
        <div class="col-md">
          <ul class="navbar-nav mr-auto p-2">
            <h2>Help</h2>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                >support@mail.com</a
              >
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">+6286736450982</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
  <div class="copyright">
    <hr style="border: none; height: 3px" />
    <p>Copyright@2022</p>
  </div>
</template>

<script>
import axios from "axios";
import "mosha-vue-toastify/dist/style.css";
import { createToast } from "mosha-vue-toastify";
import NavComponent from '../components/NavLogin.vue'
import BeatLoader from 'vue-spinner/src/BeatLoader.vue'

export default {
  name: "LoginView",
  components: {
    NavComponent : NavComponent,
    BeatLoader
  },
  data() {
    return {
      email: "",
      password: "",
      searchDisabled:false
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
    
    async login() {
      let response = '';
      try {
        
        response = await axios.post(`http://54.255.4.75:9091/api/v1/auth/recruiter/login?recruiterEmail=${this.email}&recruiterPassword=${this.password}`);
        
      } catch(err) {
        if(err){
            this.searchDisabled = false;
        }
         
        console.log(err.response.data.message)
        createToast(`${err.response.data.message}`, { type: "danger" });
      }
      if( response.status === 200 ) {
        this.searchDisabled = true;
        console.log(this.searchDisabled)
        
         localStorage.setItem("user-info", JSON.stringify(response.data.data.registerDTO));
         createToast(`Welcome back!! ${response.data.data.registerDTO.recruiterCompany}`, { type: "success" });
         this.$router.push("/dashboard");
      }
    },
  },
  
};
</script>

<style scoped>
.login {
  background-color: #060684;
  color: white;
  min-height: 90vh;
}
.formlogin {
  text-align: left;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  color: #060684;
}
label {
  padding: 2px;
  margin: 2px;
}
img {
  float: left;
  margin: 0;
  width: 70%;
}
h1 {
  margin-top: 40px;
  font-weight: bold;
  font-size: 60px;
}
.signup {
  margin-left: 2px;
  margin-top: 20px;
}
.col-5 {
  text-align: left;
  padding-top: 10px;
}

/* footer */
.col {
  text-align: left;
  text-decoration: none;
}
.nav-link {
  color: black;
  padding: 3px;
}
.nav-link:hover {
  color: blue;
}
.copyright {
  margin-bottom: 0;
  margin-top: 20px;
  padding-top: 10px;
}
p {
  margin-bottom: 0;
  padding-top: 10px;
}
footer {
  padding-top: 10px;
  margin-bottom: 0;
  padding-bottom: 0;
  text-align: left;
}
.btn {
  margin-bottom: 5px;
}
.btn-primary{
  margin-top: 20px;
}
.forgot{
  text-decoration: none;
}
</style>