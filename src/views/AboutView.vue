<template>
<div class="main">
<sidebar-component></sidebar-component>
<div class="container">
  <div class="row">
    <div class="col">
      <div class="card">
        <img src="../assets/logo.svg" alt="">
        <div class="card-body">
          <h5 class="card-title">{{profile.recruiterCompany}}</h5>
          <p class="card-text">{{profile.recruiterIndustry}}</p>
          <p class="card-text">{{profile.recruiterDesc}}</p>
          <p class="card-text">{{profile.recruiterEmail}}</p>
          <p class="card-text">{{profile.recruiterAddress}}</p>
          <p class="card-text">{{profile.recruiterPhone}}</p>
          <p class="card-text">{{profile.recruiterId}}</p>
          <!-- <router-link class="btn btn-success" :to="{name: 'updateprofile', params:{id:profile.recruiterId}}">Update Profile</router-link> -->
          <router-link class="btn btn-success" :to="'/updateprofile/'+profile.recruiterId">Update Profile</router-link>
        </div>
      </div>
      
    </div>
    <div class="col">
      agri
    </div>
  </div>
</div>
</div>
</template>
<script>
import axios from 'axios'
import sidebarcomponent from '../components/SidebarComponent.vue'
export default {
  props:['id'],
  components: {
    SidebarComponent : sidebarcomponent
  },
  data(){
    
    return{
      profile:[]

    }
  },
  methods:{
  fetchData(){
    const recruiterId = JSON.parse(localStorage.getItem("user-info")).data.recruiterId
      axios.get(`http://54.255.4.75:9091/api/v1/auth/recruiter/${recruiterId}`)
      
      .then((profile)=> {
        this.profile=profile.data
        
      })
    },
    // async updateProfile(){
    //   await axios.
    // }
  },
  mounted(){
    this.fetchData()
  }


};
</script>
<style scoped>
.main{
 background: #F3F3F3;
}
.container {
  padding-left: 170px;
  margin-top: 200px;
  height: 100px;
  
}
.container img {
  width: 60px;
  height: auto;
  padding: 10px;
}
.card {
  border-radius: 20px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}
</style>