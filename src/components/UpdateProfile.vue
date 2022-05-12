<template>
<sidebarcomponent/>
<div class="bg-color">
  <button class="btn btn-primary new" onclick="history.back()"><i class="bi bi-chevron-left"></i>Go Back</button>

  <div class="container section-first">
    
    <form class="row" @submit.prevent="updateProfile" type="multipart">
      <h1 class="mb-5">Update Profile</h1>
      <div class="col-md-10 mb-4">
        <label for="validationDefault03" class="form-label">Email:</label>
        <input type="text" class="form-control" id="validationDefault03" v-model="profile.recruiterEmail" disabled>
      </div>
      <div class="col-md-10 mb-4">
        <label for="validationDefault03" class="form-label">Culture</label>
        <input type="text" class="form-control" id="validationDefault03" v-model="profile.recruiterCulture" required>
      </div>
      <div class="col-md-10 mb-4">
        <label for="validationDefault03" class="form-label">Industry</label>
        <input type="text" class="form-control" id="validationDefault03" v-model="profile.recruiterIndustry" required>
      </div>
     <div class="col-md-10 mb-4">
        <label for="validationDefault03" class="form-label">Benefit</label>
        <input type="text" class="form-control" id="validationDefault03" v-model="profile.recruiterBenefit"  required>
      </div>
     
     <div class="col-md-10 mb-4">
        <label for="validationDefault03" class="form-label">Company</label>
        <input type="text" class="form-control" id="validationDefault03" v-model="profile.recruiterCompany" required>
      </div>
    
     <div class="col-md-10 mb-4">
        <label for="validationDefault03" class="form-label">Staff</label>
        <input type="text" class="form-control" id="validationDefault03" v-model="profile.recruiterStaff" required>
      </div>    
      <div class="col-md-10 mb-4">
        <label for="validationDefault03" class="form-label">Description</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="profile.recruiterDesc"></textarea>
      </div>
     <div class="col-md-10 mb-4">
        <label for="validationDefault03" class="form-label">Address</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="profile.recruiterAddress"></textarea>
      </div>
     
 
    </form>
  </div>
<div class="content-2">
  <div class="container bottom">
    <h1 class="mb-5">Contact</h1>
     <form class="row" @submit.prevent="updateProfile">
 <div class="col-md-10 mb-4">
  
        <label for="validationDefault03" class="form-label">Phone</label>
        <!-- <input v-model="profile.recruiterPhone" type="text" @input="acceptNumber"> -->
        <input type="tel" class="form-control" @input="acceptNumber" id="validationDefault03" v-model="profile.recruiterPhone"  
        placeholder="Ex: 0855-1111-2222" min="8" max="12" required>
        <small>Format: 0888-1111-2222</small>
      </div>
     <div class="col-md-10 mb-4">
        <label for="validationDefault03" class="form-label">Facebook</label>
        <input type="text" class="form-control" id="validationDefault03" v-model="profile.recruiterFb" required>
      </div>
     <div class="col-md-10 mb-4">
        <label for="validationDefault03" class="form-label">Instagram</label>
        <input type="text" class="form-control" id="validationDefault03" v-model="profile.recruiterIg" required>
      </div>
       <div class="col-md-10 mb-4">
        <label for="validationDefault03" class="form-label">Linkedin</label>
        <input type="text" class="form-control" id="validationDefault03" v-model="profile.recruiterLinkedin" required>
      </div>
       <div class="col-md-10 mb-4">
        <label for="validationDefault03" class="form-label">Website</label>
        <input class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="profile.recruiterWebsite">
      </div>
       <button class="btn btn-success" type="submit">Update</button>
     </form>
  </div>
</div>
</div>
</template>

<script>
import axios from 'axios'
import "mosha-vue-toastify"
import { createToast } from "mosha-vue-toastify"
import sidebarcomponent from '@/components/SidebarComponent.vue'

export default {
    props:['id'],
    
    components:{
      sidebarcomponent,
      // VuePhoneNumberInput
    },
    data(){
      return {
        profile:[],
        previewImage:null,
        value:''
      }
    },
    methods:{
      acceptNumber() {
        var x = this.profile.recruiterPhone.replace(/\D/g, '').match(/(\d{0,4})(\d{0,4})(\d{0,4})/);
        this.profile.recruiterPhone = !x[2] ? x[1] : '' + x[1] + '-' + x[2] + (x[3] ? '-' + x[3] : '');
        },

      onFileSelected(event){
        this.selectedFile = event.target.files[0]
      },
      onUpload(){
        const fd = new FormData();
        fd.append('image',this.selectedFile, this.selectedFile.name)
        axios.post(`http://54.255.4.75:9091/api/v1/file/recruiter/photo/`,fd + this.$route.params.id)
        .then(res =>{
          console.log(res)
        })
      },
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
        const recruiterId = JSON.parse(localStorage.getItem("user-info")).recruiterId
        await axios.put(`http://54.255.4.75:9091/api/v1/auth/recruiter/${recruiterId}?recruiterEmail=${this.profile.recruiterEmail}&recruiterCompany=${this.profile.recruiterCompany}&recruiterIndustry=${this.profile.recruiterIndustry}&recruiterPhone=${this.profile.recruiterPhone}&recruiterStaff=${this.profile.recruiterStaff}&recruiterDesc=${this.profile.recruiterDesc}&recruiterAddress=${this.profile.recruiterAddress}&recruiterBenefit=${this.profile.recruiterBenefit}&recruiterFb=${this.profile.recruiterFb}&recruiterIg=${this.profile.recruiterIg}&recruiterLinkedin=${this.profile.recruiterLinkedin}&recruiterCulture=${this.profile.recruiterCulture}&recruiterWebsite=${this.profile.recruiterWebsite}`);
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
.bg-color{
  background-color: #f3f3f3;
  min-height: 140vh;
  
}
  h1 {
    text-align: left;
    padding: 0;
    margin-bottom: 20px;
    margin-top: 10px;
  }
  
  .container{
    background: white;
    padding: 20px;
    border-radius: 20px;
    /* position: absolute; */
    margin: 1.5%;
    width: 60%;
    padding-right: 0;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    margin-left: 20%;
    
  }
  .btn{
    width: 81%;
    margin-left: 10px;
    margin-top: 30px;
    margin-bottom: 10px;
  }
  .new{
    background: transparent;
    width: max-content;
    margin-left: 20%;
    color: black;
    margin-top: 20px;
    border: none;
    padding-left: 10px;
    transition: ease-in-out 1s;
  }
  .new:hover{
    background: transparent;
    color: red;
    padding-left: 0;
    transition: ease-in-out 1s;
    
  }
  .bottom{
    margin-top: 2%;
    margin-bottom: 10px;
    padding-bottom: 30px;
  }
  
  form{
    margin-left: 80px;
  }
  .content-2{
    padding-bottom: 40px;
  }

   
</style>