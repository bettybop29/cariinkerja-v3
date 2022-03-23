<template>
<div class="row">
  <!-- <router-link :to="{ path:'/jobdetail/', params: { userId: '123' }}" class="card-link"> -->
<!-- <router-link :to="{ path:'/jobdetail/:{{item.jobId}}" class="card-link"> -->
  <div class="card" style="width: 18rem;">
    
       <img src="http://54.255.4.75:9091/resources/meta.png"   class="card-img-top" alt="...">
       
        <div class="dropdown">
          <a class="bi bi-three-dots-vertical" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"></a>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li><a class="dropdown-item" href="#">Unactive</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
        
        <div class="card-body">
          
         <h5 class="card-title">{{item.jobName}}</h5>
         <span>Status: {{item.jobStatus}}</span>
          <p class="card-text"><i class="bi-clock"></i> {{ item.jobPosition }}</p>
          <p class="card-text"><i class="bi-cash"></i> IDR {{ item.jobSalary }}</p>
          <p class="card-text"><i class="bi-briefcase-fill"></i> {{ item.jobPosition }}</p>
          
          <p class="card-text"><i class="bi-geo-alt"></i> {{ item.jobAddress }}</p>

          <!-- <router-link class="btn btn-primary" to="/jobdetail">Detail</router-link> -->
          <router-link class="btn btn-primary" :to="{name: 'jobdetail', params:{id:item.jobId}}">Detail</router-link>
          <button class="btn btn-danger" v-on:click="deleteJob(item.jobId)">delete</button>
          
          
      
    </div>
    
  </div>
  <!-- </router-link> -->
</div>

</template>
<script>
import axios from 'axios'
import "mosha-vue-toastify/dist/style.css";
import { createToast } from "mosha-vue-toastify";
export default {
    name:"JobComponent",
    props:['item'],

    methods:{
      
      async deleteJob(id){
      try {
       let result = await axios.put(`http://54.255.4.75:9091/api/v1/job/delete/`+id);
        console.warn(result)
        
           createToast("Job Deleted!", { type: "danger" });
           location.reload(true)
      
      }catch{
        console.warn
        
      }    
          
        
      }

    }
    
}
</script>

<style scoped>
  .card {
    background: rgb(243, 244, 255);
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    border-radius: 20;
    text-align: left;
    margin: 10px;
  }
  .card img{
    width: 50%;
    height: 50%;
  }
  .card-title {
    font-weight: bold;
  }
  .card {
    border-radius: 20px;
  }
  .card-text {
    padding: 0;
    
  }
  .dropdown{
    float: right;
    position: absolute;
    margin: 10px;
    margin-left:85%;
  }
  .card-link {
    text-decoration: none;
    color: black;
  }
  .btn{
    margin: 5px;
  }
  

  
</style>