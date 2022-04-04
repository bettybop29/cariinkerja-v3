<template>
<nav-login></nav-login>
  <div class="signup">
    <div class="container-fluid">
      <div class="content1">
        <div class="container">
          <div class="row">
            <div class="col-5">
              <form @submit.prevent="signUp">
              <div class="form-signup">
                <div class="mb-3">
                  
                  <h2 style="padding-bottom: 20px; font-weight: bold">
                    Sign Up
                  </h2>
                  
                  <label class="form-label">Email</label>
                  <input
                    v-model="recruiterEmail"
                    type="email"
                    class="form-control"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Password</label>
                  <input
                    v-model="recruiterPassword"
                    type="password"
                    class="form-control"
                    placeholder="Password must contain at least one number, one capital letter and one special character"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Company</label>
                  <input
                    v-model="recruiterCompany"
                    type="text"
                    class="form-control"
                    required
                  />
                </div>
                <div class="mb-3">
                  <label class="form-label">Industry</label>
                  <input
                    v-model="recruiterIndustry"
                    type="text"
                    class="form-control"
                    required
                  />
                </div>
                <button
                  type="submit"
                  
                  class="btn btn-success"
                >
                  Signup
                </button>
                
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
</template>

<script>
import axios from "axios";
import "mosha-vue-toastify/dist/style.css";
import { createToast } from "mosha-vue-toastify";
import NavLogin from '../components/NavLogin.vue'

export default {
  name: "SignupView",
  components: {
    NavLogin : NavLogin
  },
  data() {
    return {
      recruiterEmail: "",
      recruiterPassword: "",
      recruiterCompany: "",
      recruiterIndustry: "",
    };
  },
  methods: {
   
    async signUp() {
      try {
        const passwordCheck = this.recruiterPassword.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*)(+=._-]{8,}$/)     
        if(passwordCheck != null){
            const result = await axios.post(
          `http://54.255.4.75:9091/api/v1/auth/recruiter/register?recruiterEmail=${this.recruiterEmail}&recruiterPassword=${this.recruiterPassword}&recruiterCompany=${this.recruiterCompany}&recruiterIndustry=${this.recruiterIndustry}`
          );
          createToast("password sukses", {type: "success"} )
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push("/login");
         } else {
           createToast("Password must contain at least one number, one capital letter and one special character", {type: "danger"} )
         }
      } catch (error) {
        console.log(error);
        this.$router.push("/signup");
        createToast("please, fill blank form", { type: "danger" });
      }
    },
  },
};
</script>

<style scoped>
.container-fluid {
  margin-top: 3rem;
  background-color: #060684;
  padding-bottom: 50px;
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