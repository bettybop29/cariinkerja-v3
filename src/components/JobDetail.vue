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
        <h4 class="card-title1">{{job.jobName}}</h4>
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
            </div>
</template>

<script>
import axios from 'axios'
export default {
  props: ['id'],
  data() {
    return {
      
      job:[]
    }
  },
  methods: {
    fetchData() {
      
      // const url = this.apiUrl + this.id
      axios.get(`http://54.255.4.75:9091/api/v1/job/`+this.$route.params.id)
      
      
      .then((data) => {
       this.job=data.data
        // console.log(this.jobDesc)
      })      
    }
  },
  mounted() {
    this.fetchData() 
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