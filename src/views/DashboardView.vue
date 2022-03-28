<template>
<!-- <nav-component></nav-component> -->
<sidebar-component></sidebar-component>

<div class="main">

  <div class="container">
    
        <div class="card">
            <div class="card-title">
              
              <h2>Hi, {{list.jobCompany}} !!</h2>
              <div class="card-text">
                <p>Welcome back</p>
                <p>You have 17 new resumes</p>
                <button class="btn">See all</button>
              </div>
            </div>
        </div>
        <div class="card-monitor">
          <div class="card-approve">
            <div class="card-title">
                <h4>Summary of Approve</h4>
             </div>  
              </div>
                <div class="col card-reject">
              <h4>Summary of Reject</h4>
          </div>
        </div>

<img src="../assets/Saly.png" alt="">
  </div>
  
</div>

  
 
</template>

<script>
// import navbar from '../components/NavComponent.vue';
import axios from "axios";
import { createToast } from "mosha-vue-toastify";
// import JobComponent from "../components/JobComponent.vue";
import 'boxicons';
import sidebarcomponent from '../components/SidebarComponent.vue'





export default {
  
  name: "DashboardView",
  components: {
    // NavComponent : navbar,
    // JobComponent : JobComponent,
    SidebarComponent : sidebarcomponent
  },
  
  data() {
    return {
      jobName:"",
      jobSalary:"",
      jobPosition:"",
      jobRequirement:"",
      jobDesc:"",
      jobAddress:"",
      list:[],
      
      
    };
  },
  methods : {
    // func tambah job
    async addjob() {
      try {
        const recruiterId = JSON.parse(localStorage.getItem("user-info")).data.recruiterId
        await axios.post(
          `http://54.255.4.75:9091/api/v1/job/create?jobName=${this.jobName}&recruiterId=${recruiterId}&jobSalary=${this.jobSalary}&jobPosition=${this.jobPosition}&jobAddress=${this.jobAddress}&jobDesc=${this.jobDesc} products to vendor&jobRequirement=${this.jobRequirement}`
        );
        // localStorage.setItem("user-info", JSON.stringify(result.data));
        
        createToast("Job Successfully Created", { type: "success" });
        location.reload(true)
        
      } catch (error) {
        createToast("please, fill blank form", { type: "danger" });
        console.log(error);
      }
    }   
  },
  
  // func tampilin data
  //monted render
  mounted(){
    //render localstorage
    const nameCompany = JSON.parse(localStorage.getItem("user-info"))
      this.nameCompany = nameCompany.data
      console.log(nameCompany)

    const recruiterId = JSON.parse(localStorage.getItem("user-info")).data.recruiterId
    axios.get(`http://54.255.4.75:9091/api/v1/jobs/${recruiterId}`)
    .then((resp)=>{
      this.list=resp.data

      console.warn(recruiterId)
      
      
    })
    
  },
  
  
  
  
  
}; 
</script>  

<style scoped>
.main {
  background-color: #F3F3F3;
}
.container {
  margin-left: 19%;
  
  text-align: left;
  margin-top: 30px;
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
  padding: 0;
  margin: 0;
}
img{
  position: fixed;
  margin-top: 0;
  margin-top: 10px;
  margin-left: 0px;
  width: 291px;
  height: 291px;
  
  
}
.card-approve {
 background-image: url("../assets/approve.png");
  border-radius: 20px;
  height: 133px;
  width: 373px;
  display: flex;
  
}
.card-reject{
  padding: 10px;
  background-image: url("../assets/reject.png");
  border-radius: 20px;
  height: 133px;
  width: 373px;
  margin-top: 9px;
}
.card-title{
  padding: 10px;
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



</style>