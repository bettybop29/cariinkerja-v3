<template>
<!-- <nav-component></nav-component> -->
<sidebar-component></sidebar-component>

  <sidebar-right :view="views"></sidebar-right>

<div class="main">

  <div class="container">
    <div class="logo-main">

    </div>
        <div class="card">
            <div class="card-title">
              
              <h2>Hi, {{recruiters.recruiterCompany}} !!</h2>
              <div class="card-text">
                <h5>Welcome back you have<br>
                  <span class="decor">{{edit.data}}</span>
                  new resume
                </h5>
                
                
              </div>
              <button class="btn">See all</button>
            </div>
        </div>
        <div class="card-monitor">
          <div class="card-approve">
            <div class="card-title">
                <h4>Summary of approve</h4>
                <h1>{{accept.data}}<span> / {{total.data}}</span></h1>
             </div>  
              </div>
                <div class="col card-reject">
                <h4>Summary of reject</h4>
                <h1>{{reject.data}}<span> / {{total.data}}</span></h1>
              
          </div>
        </div>
         
    </div> 


<table class="table">
  
  <thead>
    <h3>Resume</h3>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Name</th>
      <th scope="col">Contact</th>
      <th scope="col">Status</th>
      <th scope="col">Job Name</th>
      <th scope="col">Position</th>
      <th scope="col">action</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(resume, index) in list" :key="resume.id">
      <td scope="row">{{index + 1}}</td>
      <td>{{resume.jobseekerName}}</td>
      <td>{{resume.jobseekerEmail}}</td>
      <td>
        <p v-if="resume.applicationStatus != 'sent'">{{resume.applicationStatus}}</p>
        <p v-else>review</p></td>
      <td>{{resume.jobName}}</td>
      <td>
        <p v-if="resume.jobPosition != 'Internship'" class="position">{{resume.jobPosition}}</p>
        <p v-else class="position2">{{resume.jobPosition}}</p>
      </td>
      <td><button class="btn-primary" @click="getView(resume.jobseekerId)">view</button></td>
      
    </tr>
  </tbody>  
</table>

</div>

</template>

<script>
// import navbar from '../components/NavComponent.vue';
import axios from "axios";
import 'boxicons';
import sidebarcomponent from '../components/SidebarComponent.vue'
import SidebarRight from '../components/SidebarRight.vue'





export default {
  
  
  name: "DashboardView",
  components: {
    // NavComponent : navbar,
    // JobComponent : JobComponent,
    SidebarRight : SidebarRight,
    SidebarComponent : sidebarcomponent
  },
  data(){
    
    return {
      path: 'http://54.255.4.75:9091',
      recruiters:[],
      accept:"",
      reject: "",
      list:[],
      total:"",
      edit:"",
      views:""
    };
  },
  methods : {
  async totalnewAplicant(){
    const recruiterId = JSON.parse(localStorage.getItem("user-info")).recruiterId
    await axios.get(`http://54.255.4.75:9091/api/v1/application/new-resume/${recruiterId}`)
    .then((data)=>{
      this.edit=data.data
    })
  },
   async w3_open(){
      await axios.get(``)
    },
  async totalAplicant(){
    const recruiterId = JSON.parse(localStorage.getItem("user-info")).recruiterId
    await axios.get(`http://54.255.4.75:9091/api/v1/application/applications/${recruiterId}`)
    .then((data)=>{
      this.total=data.data
    })
  },
  async newResume(){
    const recruiterId = JSON.parse(localStorage.getItem("user-info")).recruiterId
    await axios.get(`http://54.255.4.75:9091/api/v1/application/dashboard/${recruiterId}`)
    .then((resp)=>{
      this.list = resp.data.data
      
    })
  },
   async recruiter(){
   const recruiterId = JSON.parse(localStorage.getItem("user-info")).recruiterId
    await axios.get(`http://54.255.4.75:9091/api/v1/auth/recruiter/${recruiterId}`)
    .then((data)=>{
      this.recruiters=data.data
      
    })
   },
   async countAcc(){
   const recruiterId = JSON.parse(localStorage.getItem("user-info")).recruiterId
     await axios.get(`http://54.255.4.75:9091/api/v1/application/count-accepted/${recruiterId}`)
     .then((data)=>{
      this.accept=data.data
      })
    },
    async countRejc(){
   const recruiterId = JSON.parse(localStorage.getItem("user-info")).recruiterId
     await axios.get(`http://54.255.4.75:9091/api/v1/application/count-rejected/${recruiterId}`)
     .then((data)=>{
      this.reject=data.data
      })
    },
    async getView(id){
      await axios.get(`http://54.255.4.75:9091/api/v1/application/applicant/${id}`)
      .then((data)=>{
        this.views=data.data.data
        console.log(id)
      })
    }
  },
  mounted(){
    this.recruiter(),
    this.countAcc(),
    this.countRejc(),
    this.newResume(),
    this.totalAplicant(),
    this.totalnewAplicant(),
    this.getView()
  },
}; 
</script>  

<style scoped>
.table{
  border-radius: 20px;
  padding: 10%;
}
.table h3{
  margin: 15px;
  width: 30px;
  
}
.table td{
  
  overflow: auto;
}
.btn-primary{
  border-radius: 10px;
  border-style: none;
  padding: 5px;
  width: 100%;
}
.btn-primary:hover{
  background: blue;
  box-shadow: 6px 10px 15px -3px rgba(0,0,0,0.1);
}
.logo-main{
  background: url("../assets/approve.png");
}
.main {
  background-color: #F3F3F3;
}
.container {
  margin-left: 19%;
  
  text-align: left;
  /* margin-top: 30px; */
  padding-top: 30px;
  width: auto;
  display: flex;
}
.card {
  padding: 10px;
  text-align: right;
  border-radius: 29px;
  width: 430px;
  height: 273px;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}
.card-text {
  padding: 10px;
  margin: 0;
  text-align: left;
}
img{
  position: fixed;
  margin-top: 0;
  margin-top: 10px;
  margin-left: 0px;
  width: 291px;
  height: 291px;
  
  
}
h5{
  padding-top: 5px;
  text-align: left;
  margin-left: 160px;
}
.decor{
  font-size: 17px;
  color: orange;
}
.card-approve {
 background-image: url("../assets/approve.png");
  border-radius: 20px;
  height: 133px;
  width: 373px;
  display: flex;
  padding: 10px;
  
}
.card-reject{
  padding: 20px;
  background-image: url("../assets/reject.png");
  border-radius: 20px;
  height: 133px;
  width: 373px;
  margin-top: 9px;
  /* box-shadow: 6px 10px 15px -3px rgba(0,0,0,0.1); */
}
.card-title{
  padding: 10px;
}
span{
  font-size: 26px;
}
.card-monitor {
  margin-left: 10px;
  color: white;
  
}
.btn{
  border-radius: 30px;
  background: orange;
  color: white;
  margin-top: 70px;

}
.btn:hover{
  background: rgb(235, 153, 1);
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
}
.table{
  margin-left: 310px;
  margin-top: 20px;
  width: 52.5%;
  background: white;
}
.position{
  background: #E2E3F6;
  padding: 3px;
  width: 65px;
  border-radius: 10px;
  color: #7D8CD1;
  font-size: 13px;
  text-align: center;
}
.position2{
  background: #e3fe9f;
  padding: 3px;
  width: 65px;
  border-radius: 10px;
  color: #b4bf1b;
  font-size: 13px;
  text-align: center;
}

</style>