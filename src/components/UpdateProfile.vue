<template>
  <div class="container mt-5">
    <div class="title-bar">
      <h1>Update Profile</h1>
      </div>
      <form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">Email</label>
    <input type="text" class="form-control" id="validationCustom01"  v-model="profile.recruiterEmail" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Company</label>
    <input type="text" class="form-control" id="validationCustom02" v-model="profile.recruiterCompany" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Phone</label>
    <input type="number" class="form-control" id="validationCustom02" v-model="profile.recruiterPhone" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationCustom03" v-model="profile.recruiterAddress" required>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom04" class="form-label">Staff</label>
    <!-- <select class="form-select" id="validationCustom04" required  v-model="profile.recruiterStaff">
      <option selected disabled value="">Choose...</option>
      <option>less than 5</option>
      <option> 5 - 10</option>
      <option>10 - 100</option>
      <option>100 - 1000</option>
      <option>more than 1000</option>
    </select> -->
    <input type="number" class="form-control" id="validationCustom03" v-model="profile.recruiterStaff" required>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom05" class="form-label">Description :</label>
    <textarea type="textarea" class="form-control" id="validationCustom05" v-model="profile.recruiterDesc" required></textarea>
  </div>
   <div class="col-md-3">
    <label for="validationCustom05" class="form-label">status :</label>
    <textarea type="textarea" class="form-control" id="validationCustom05" v-model="profile.recruiterStatus" required></textarea>
  </div>
   <div class="col-md-3">
    <label for="validationCustom05" class="form-label">Culture</label>
    <input type="text" class="form-control" id="validationCustom05" v-model="profile.recruiterCulture">
  </div>
  <div class="col-md-3">
    <label for="validationCustom05" class="form-label">Benefit</label>
    <input type="text" class="form-control" id="validationCustom05" v-model="profile.recruiterBenefit">
  </div>
  <h3>Social Media</h3>
   <div class="col-md-3">
    <label for="validationCustom05" class="form-label">Facebook</label>
    <input type="text" class="form-control" id="validationCustom05" v-model="profile.recruiterFb">
  </div>
   <div class="col-md-3">
    <label for="validationCustom05" class="form-label">Instagram</label>
    <input type="text" class="form-control" id="validationCustom05" v-model="profile.recruiterIg">
  </div>
   <div class="col-md-3">
    <label for="validationCustom05" class="form-label">Linkedin</label>
    <input type="text" class="form-control" id="validationCustom05" v-model="profile.recruiterLinkedin">
  </div>
 
  <div class="col-12">
    <button class="btn btn-primary" v-on:click="updateProfile">Update</button>
  </div>
</form>
<router-link class="btn btn-danger" to="/about"><i class="bi bi-arrow-left-circle"></i> Back</router-link>
  </div>
  
</template>

<script>
import axios from 'axios'
import "mosha-vue-toastify"
import { createToast } from "mosha-vue-toastify"
export default {
    props:['id'],
    data(){
      return {
        profile:[]
      }
    },
    methods:{
      //func get data
      fetchData() {
        axios.get(`http://54.255.4.75:9091/api/v1/auth/recruiter/`+this.$route.params.id)

        .then((data) => {
          this.profile=data.data
       })
      },
      // func edit profile
      async updateProfile(){   
      try {
        await axios.patch(`http://54.255.4.75:9091/api/v1/auth/recruiter/89?recruiterEmail=${this.profile.recruiterEmail}&recruiterCompany=${this.profile.recruiterCompany}&recruiterIndustry=${this.profile.recruiterIndustry}&recruiterPhone=${this.profile.recruiterPhone}&recruiterStaff=${this.profile.recruiterStaff}&recruiterDesc=${this.profile.recruiterDesc}&recruiterAddress=${this.profile.recruiterAddress}&recruiterStatus=${this.profile.recruiterStatus}&recruiterFb=${this.profile.recruiterFb}&recruiterIg=${this.profile.recruiterIg}&recruiterLinkedin=${this.profile.recruiterLinkedin}&recruiterCulture=${this.profile.recruiterCulture}&recruiterBenefit=${this.profile.recruiterBenefit}`)
        this.$router.push('/about')
        createToast("Profile updated", {type: 'success'});
        
      } catch {
        console.log(Error)
      }
      }
    },
    //render func
    mounted(){
      this.fetchData()
    }
}
</script>

<style scoped>
  h1 {
    text-align: center;
  }
  .container{
    background-color: #f3f3f3;
    border-radius: 20px;
    padding: 20px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }
  .title-bar {
    background-color: rgb(79, 22, 238);
    border-radius: 20px;
    padding: 10px;
    margin-bottom: 20px;
    color: white;
  }
  .btn-danger {
    margin-top: 5px;
  }
</style>