<template>
  <div class="sidebar-right">
    <div class="side-content">
      <ul>
          <li class="li-foto">
            <img v-if="view.jobseekerImage == null" src="http://54.255.4.75:9091/resources/pfekimaggdc7k9r.png" alt="">
            <img v-else :src="'http://54.255.4.75:9091/resources/'+ view.jobseekerImage" alt="">
          </li>
          <li class="li-header fw-bold">
            <p v-if="view.jobseekerImage == null">---</p>
            <p v-else>{{view.jobseekerName}}</p>
            <p v-if="view.jobseekerImage == null" class="fw-normal">---</p>
            <p v-else class="fw-normal">{{view.jobseekerProfession}}</p>
          </li>
          
          <li class="li-title">Basic Information</li>
          <li>birthdate:
            <p v-if="view.jobseekerDateOfBirth == null" class="text-side text-muted" >---</p>
            <p v-else class="text-side">{{view.jobseekerDateOfBirth}}</p>
          </li>
          <li>City:
            <p v-if="view.jobseekerAddress == null" class="text-side text-muted">---</p>
             <p class="text-side">{{view.jobseekerAddress}}</p>
            </li>
          <li>Phone:
              <p v-if="view.jobseekerPhone == null" class="text-side text-muted">---</p>
              <p class="text-side">{{view.jobseekerPhone}}</p>
          </li>
          <li>Email:
            <p v-if="view.jobseekerEmail == null" class="text-side text-muted">---</p>
            <p  class="text-side">{{view.jobseekerEmail}}</p>
          </li>
          <li><button class="btn-resume" v-on:click="getResume(view.jobseekerResume)">Resume <i class="bi bi-cloud-arrow-down-fill"></i></button></li>
          <li><button class="btn-portofolio">Portofolio <i class="bi bi-box-arrow-up-right"></i></button></li>
          <li> 
            <div class="action">
              <!-- <button class="acc" v-on:click="accepted(view.applicationId)"><i class="bi bi-check2"></i>accept</button> -->
               <button type="button" class="acc" data-bs-toggle="modal" data-bs-target="#popUp1">
                <i class="bi bi-check2"></i>accept
              </button>

              <!-- Modal -->
              <div class="modal fade" id="popUp1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content" style="border-radius:20px; margin:auto; width:300px; margin-top:200px; padding-bottom:20px;">
                    <div class="modal-body">
                      <h4>Are you sure want to accept {{view.jobseekerName}}?</h4>
                    </div>
                    <div class="select-button">
                      <button type="button" class="btn btn-danger pop" data-bs-dismiss="modal"><i class="bi bi-x-lg"></i></button>
                      <button type="button" class="btn btn-primary pop" v-on:click="accepted(view.applicationId)"><i class="bi bi-check2"></i></button>
                    </div>
                  </div>
                </div>
              </div>





              <!-- <button class="rej" v-on:click="rejected(view.applicationId)"><i class="bi bi-x-lg"></i>reject</button> -->
               <button type="button" class="rej" data-bs-toggle="modal" data-bs-target="#popUp2">
                <i class="bi bi-x-lg"></i>reject
              </button>

              <!-- Modal -->
              <div class="modal fade" id="popUp2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content" style="border-radius:20px; margin:auto; width:300px; margin-top:200px; padding-bottom:20px;">
                    <div class="modal-body">
                      <h4>Are you sure want to reject {{view.jobseekerName}}?</h4>
                    </div>
                    <div class="select-button">
                      <button type="button" class="btn btn-danger pop" data-bs-dismiss="modal"><i class="bi bi-x-lg"></i></button>
                      <button type="button" class="btn btn-primary pop" v-on:click="rejected(view.applicationId)"><i class="bi bi-check2"></i></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>

      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "mosha-vue-toastify/dist/style.css";
import { createToast } from "mosha-vue-toastify";
export default {
    name:"SidebarRight",
    props:['view','id'],
    methods:{
      
      async accepted(id) {
        await axios.post(`http://54.255.4.75:9091/api/v1/application/status/accepted/?applicationId=${id}`)
        createToast(`Accepted`, { type: "success" });
        location.reload(true)
      },
      async rejected(id) {
        await axios.post(`http://54.255.4.75:9091/api/v1/application/status/rejected/?applicationId=${id}`)
         createToast(`Reject`, { type: "danger" });
        location.reload(true)
      },
     async getResume(jobseekerResume){
         await axios({
          url: `http://54.255.4.75:9091/resources/${jobseekerResume}`,
          methods: 'GET',
          responseType: 'blob',
        }).then((res) => {
          var FILE = window.URL.createObjectURL(new Blob([res.data]));
          var docUrl = document.createElement('x');
          docUrl.href = FILE;
          docUrl.setAttribute('download', 'resume.pdf');
          document.body.appendChild(docUrl);
          docUrl.click();

        })
      }
  }
}
</script>

<style scoped>
    .sidebar-right{
        float: right;
        display: flex;
        margin-top: 20px;
        
    }
    .side-content{
        padding: 20px;
        background: white;
        border-radius: 20px 0 0 20px;
        text-decoration: none;
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        height: 97vh;
        width: 100%;
        transition: ease-in-out 1s;
        /* padding-right: 250px; */

    }
    .side-content li{
      list-style: none;
      margin: 13px;
      margin-left: 0px;
      margin-right: 30px;
      padding-right: 0px;
      text-align: left;
      
      display: flex;
      flex-direction: column;
      
      
    }
    .li-title{
      padding: 0;
      font-weight: bold;
    }
    .action button{
      margin: 5px;
      border: none;
      padding: 20px;
      border-radius: 20px;
      color: white;
      transition: box-shadow 0.5s;
    }
    .action button:hover{
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
     .action button i{
       display: flex;
       justify-content: center;
       font-size: 30px;
       font-weight: bolder;
     }
    .acc{
      width: 44%;
      background: #6779CD;
    }
    .acc:hover{
      background: #6476c8;
    }
    .rej{
      width: 44%;
      background: #E79AA2;
    }
    .rej{
      background: #d79097;
    }
    .btn-resume{
      border: none;
      padding: 15px;
      border-radius: 20px;
      background: #F6F6FF;
      display: flex;
      transition: box-shadow 0.5s;
    }
    .btn-resume:hover{
      box-shadow: rgba(152, 154, 251, 0.35) 0px 5px 15px;
    }
    .btn-resume i{
      margin-left: 120px;
    }
    .btn-portofolio{
      border: none;
      padding: 15px;
      border-radius: 20px;
      background: #F6F6FF;
      display: flex;
      transition: box-shadow 0.5s;
    }
    .btn-portofolio:hover{
      box-shadow: rgba(152, 154, 251, 0.35) 0px 5px 15px;
    }
    .btn-portofolio i{
      margin-left: 112px;
    }
    .text-side{
      position: absolute;
      padding-left: 100px;
      text-align: right;
      justify-content: right;
      
      
    }
    .li-header{
      text-align: center;
      padding: 0;
      margin-top: 10px;
      align-items: center;
    }
    .li-foto img{
      width: 100px;
      height: 100px;
      margin-left: 60px;
      margin-top: 0;
      border-radius: 50%;
      border: 3px solid #f3f3f3;
    }
    .pop{
     
     
      
      text-align: center;
      margin: 0;
    }
    .select-button{
      display: flex;
      text-align: center;
      justify-content: center;
    }
    .modal-body{
      text-align: center;
    }
    .modal-content{
      border-radius:20px;  
      margin:auto; 
      width:300px; 
      margin-top:200px; 
      padding-bottom:20px;
    }
</style>