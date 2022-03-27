<template>
<div class="row">
  <!-- <router-link :to="{ path:'/jobdetail/', params: { userId: '123' }}" class="card-link"> -->
<!-- <router-link :to="{ path:'/jobdetail/:{{item.jobId}}" class="card-link"> -->
  <div class="card" style="width: 18rem;">
    
       <img src="http://54.255.4.75:9091/resources/meta.png"   class="card-img-top" alt="...">
       
        <div class="dropdown">
          <a class="bi bi-three-dots-vertical" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false"></a>

          <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
            <button class="dropdown-item" v-on:click="unactive">Unactive</button>
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
          
          <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalToggleLabel">Edit Jobs</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
     <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Job Name:</label>
            <input type="text" class="form-control" id="recipient-name" v-model="edit.jobName">
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">job Position: </label>
            <input type="text" class="form-control" id="recipient-name" v-model="edit.jobPosition">
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">job Address: </label>
            <input type="text" class="form-control" id="recipient-name" v-model="edit.jobAddress">
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">job Requirement: </label>
            <input type="text" class="form-control" id="recipient-name" v-model="edit.jobRequirement">
          </div>
          
          <div class="mb-3">
            <label for="message-text" class="col-form-label">job Description:</label>
            <textarea class="form-control" id="message-text" v-model="edit.jobDesc"/>
          </div>
          <div class="modal-footer">
        
        <button class="btn btn-primary" v-on:click="updateJobData">Update</button>
      </div>
        </form>
     </div>
     
    </div>
  </div>
</div>

<a class="btn btn-success" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Edit</a>
          
      
    </div>
    
  </div>
  <!-- </router-link> -->
</div>

</template>
<script>
import axios from 'axios'
import "mosha-vue-toastify/dist/style.css";
import { createToast } from "mosha-vue-toastify";
import { warn } from '@vue/runtime-core';
export default {
    name:"JobComponent",
    props:['item','id'],
    
    data(){
      return {
        edit:[]
      }
    },
    methods:{
     async updateJobData(){
        try{
          await axios.patch(`http://54.255.4.75:9091/api/v1/job/83?jobName=${this.edit.jobName}&jobStatus=active&jobSalary=${this.edit.jobSalary}&jobPosition=${this.edit.jobPosition}&jobAddress=Cikarang&jobDesc=advertising delivered through digital channels such as search engines, websites, social media, email, and mobile apps.&jobRequirement=bachelor of education`)
          createToast("Job Updated", { type: "success" });
          location.reload(true)
        } catch {
          console.log(warn)
        }
      },
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
    },
   
      mounted(){
        axios.get(`http://54.255.4.75:9091/api/v1/job/83`)
        .then((data)=>{
          this.edit=data.data
        })
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