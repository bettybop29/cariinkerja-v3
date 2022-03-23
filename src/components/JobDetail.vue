<template>   
   <!-- <h1>{{jobName}}</h1>
            <h1>{{jobSalary}}</h1>
            <h1>{{jobPosition}}</h1> -->  
   <div class="container mt-5">           
        <div class="card mb-3" style="max-width: 640px;">
          <div class="row g-0">
            <div class="col-md-4">
              <img src="http://54.255.4.75:9091/resources/meta.png" class="img-fluid rounded-start" alt="...">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <!-- <h4 class="card-title1">{{job.jobName}}</h4> -->
                <h6 class="card-title">{{job.jobPosition}} | Rp. {{job.jobSalary}}</h6>
                <label class="mt-3">Description job : </label>
                <p class="card-text">{{job.jobDesc}}</p>
                <label class="">Job Requirement :</label>
                <p class="card-text">{{job.jobRequirement}}</p>
                <p class="card-text">{{job.jobAddress}}</p> 
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small> 
                <router-link class="btn btn-danger" to="/postjob"><i class="bi bi-arrow-left-circle-fill"></i>Post job</router-link></p>
              </div>
            </div>
          </div>
        </div>
        <h1>dahlah</h1>
        <!-- <table border="1">
          <tr v-for="item in list" :key="item.id">
            <td>{{item.jobseekerName}}</td>
            <td>{{item.jobseekerEmail}}</td>
            <td>{{item.jobseekerResume}}</td>
          </tr>
        </table> -->
        <table class="table">
  <thead>
    <tr>
      <th scope="col">No.</th>
      <th scope="col">Name</th>
      <th scope="col">E-mail</th>
      <th scope="col">Resume</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="item in list" :key="item.id">
      <th scope="row">1</th>
      <td>{{item.jobseekerName}}</td>
      <td>{{item.jobseekerEmail}}</td>
      <td><button class="btn btn-primary" v-on:click="getResume">Download</button></td>
    </tr>
   
  </tbody>
</table>
        
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['id'],
  data() {
    return {
      
      job:[],
      list:[]
    }
  },
  methods: {
    async fetchData() {
      
      // const url = this.apiUrl + this.id
      await axios.get(`http://54.255.4.75:9091/api/v1/job/`+this.$route.params.id)
      
      
      .then((data) => {
       this.job=data.data
        // console.log(this.jobDesc)
      })      
    },
  },
  mounted() {
    this.fetchData()
    
    axios.get(`http://54.255.4.75:9091/api/v1/application/applicants/`+this.$route.params.id)
    .then((resp)=>{
      this.list=resp.data
    })
  
  }
}
</script>

<style scoped>

   .container{
     background: #f3f3f3;
     background-attachment: fixed;
     box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
     padding: 20px;
     border-radius: 20px;
   }
   .card {
     padding: 10px;
     border-radius: 20px;
   }
   .btn{
     margin-left: 10px;
   }
   i {
     margin-right: 10px;
   }
</style>