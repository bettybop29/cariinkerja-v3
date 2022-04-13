<template>
  <div class="sidebar-right">
    <div class="side-content">
      <ul>
          <li class="li-header">foto</li>
          <li class="li-header">{{aplDetail.jobseekerName}}</li>
          <li class="li-header">profesi</li>
          <li class="li-title">Basic Information</li>
          <li>birthdate<p class="text-side">test</p></li>
          <li>City<p class="text-side">test</p></li>
          <li>Phone<p class="text-side">test</p></li>
          <li>Email<p class="text-side">test</p></li>
          <li><button class="btn-resume">Resume <i class="bi bi-three-dots"></i></button></li>
          <li><button class="btn-portofolio">Portofolio <i class="bi bi-three-dots"></i></button></li>
          <li>
            <div class="action">
              <button class="acc"><i class="bi bi-check2"></i>accept</button>
              <button class="rej"><i class="bi bi-x-lg"></i>reject</button>
            </div>
          </li>

      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
    name:"SidebarRight",
    data(){
      return{
        aplDetail:""
      }
    },

    methods:{
      async detailAplicant(){
        await axios.get(`http://54.255.4.75:9091/api/v1/application/applicant/40`)
        .then((data)=>{
          this.aplDetail=data.data
        })
      }
    },
    mounted(){
      this.detailAplicant()
    }
};
</script>

<style scope>
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
        /* padding-right: 250px; */

    }
    .side-content li{
      list-style: none;
      margin: 20px;
      margin-left: 0px;
      margin-right: 30px;
      padding-right: 0px;
      text-align: left;
      
      display: flex;
      flex-direction: column;
      
      
    }
    .li-title{
      padding-top: 30px;
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
      margin-top: 30px;
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
    /* p{
      position: absolute;
      float: right;
      display: flex;
      flex-direction: row;
      padding-left: 190px;
    } */
    .text-side{
      position: absolute;
      float: right;
      display: flex;
      flex-direction: row;
      padding-left: 190px;
    }
    .li-header{
      text-align: center;
      padding: 0;
      margin: 0;
      align-items: center;
    }
    
</style>