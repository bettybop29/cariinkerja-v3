<template>
  <div class="main">

    <sidebar-component></sidebar-component>

    <div class="container" style="padding: 2rem;">
      <p class="head-title">Company Profile</p>
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <div class="row">
                <div class="col-md-6">
                  <h5 class="card-title">{{profile.recruiterCompany}}</h5>
                </div>
                <div class="col-md-6">
                  <img v-if="profile.recruiterImage != null" class="img-thumbnail position-absolute top-0 end-0 m-3"
                  :src="'http://54.255.4.75:9091/resources/'+ profile.recruiterImage" alt="" style="width: 20%">
                    <img v-else class="img-thumbnail position-absolute top-0 end-0 m-3"
                    src="http://54.255.4.75:9091/resources/r5jr7e3qf8f5uhr.png" alt="" style="width: 20%">
                    
                </div>
                <label class="custom-file-upload">
                <input type="file" v-on:click="uploadImg" class="btn new position-absolute top-0 end-0 m-3 ">
                  <i class="bi bi-pencil-square"></i>Edit/upload
                </label>
              </div>

              <p class="card-text">{{profile.recruiterIndustry}}</p>
              <p class="card-span">Staff: </p>
              <p class="card-text"><i class="bi bi-person-fill me-0"></i> {{profile.recruiterStaff}}</p>
              <p class="card-span">Description: </p>
              <p class="card-text">{{profile.recruiterDesc}}</p>
              <p class="card-span">Address: </p>
              <p class="card-text">{{profile.recruiterAddress}}</p>
              <p class="card-span">Culture: </p>
              <p class="card-text">{{profile.recruiterCulture}}</p>
              <p class="card-span">Benefit: </p>
              <p class="card-text">{{profile.recruiterBenefit}}</p>

              <!-- <router-link class="btn btn-success" :to="{name: 'updateprofile', params:{id:profile.recruiterId}}">Update Profile</router-link> -->
              <router-link class="btn btn-success" :to="'/updateprofile/'+profile.recruiterId">Update Profile
              </router-link>
            </div>
          </div>

        </div>
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Contact</h5>
              <hr>
              <a class="card-text"><i class="bi bi-envelope"></i> {{profile.recruiterEmail}}</a>
              <a class="card-text"><i class="bi bi-facebook"></i> {{profile.recruiterFb}}</a>
              <a class="card-text"><i class="bi bi-instagram"></i> {{profile.recruiterIg}}</a>
              <a class="card-text"><i class="bi bi-linkedin"></i> {{profile.recruiterLinkedin}}</a>
              <a class="card-text"><i class="bi bi-telephone"></i> {{profile.recruiterPhone}}</a>
              <a class="card-text"><i class="bi bi-globe2"></i> {{profile.recruiterWebsite}}</a>

            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  import sidebarcomponent from '../components/SidebarComponent.vue'
  export default {
    props: ['id'],
    components: {
      SidebarComponent: sidebarcomponent
    },
    data() {

      return {
        profile: []

      }
    },
    methods: {
      uploadImg(){
        console.log("saduk")
      },
      fetchData() {
        const recruiterId = JSON.parse(localStorage.getItem("user-info")).recruiterId
        axios.get(`http://54.255.4.75:9091/api/v1/auth/recruiter/${recruiterId}`)
        
          .then((profile) => {
            this.profile = profile.data

          })
      },
      // async updateProfile(){
      //   await axios.
      // }
    },
    mounted() {
      this.fetchData()
    }


  };
</script>
<style scoped>
.container{
  margin-left: 17%;
}
  .main {
    background: #F3F3F3;
    height: 110vh;
  }

  /* .container {
    padding-left: 170px;
    margin-top: 40px;
    height: 100px;
  } */

  .head-title {
    position: relative;
    font-size: 30px;
    padding-left: 10px;
  }

  /* .container img {
    width: 60px;
    height: auto;
    padding: 10px;
  } */

  .card {
    border-radius: 20px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  }

  .card-title {
    font-weight: bold;
    font-size: 25px;
  }

  .card-span {
    padding: 0;
    margin: 0;
    font-weight: bold;
  }

  a {
    display: flex;
    text-decoration: none;
    color: black;
  }

  a:hover {
    cursor: pointer;

  }

  i {
    margin-right: 10px;
  }

  .btn {
    text-align: center;
  }
  .new{
    padding-top: 30px;
    padding-bottom: 38px;
    align-items: center;
    width: 20%;
    background: transparent;
    color: transparent;
    transition: 1s;
    
  }
  input[type="file"] {
    display: none;
}
.custom-file-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
}
  .new:hover{
    color: white;
    background: rgba(0, 0, 0, 0.525);
    transition: 1s;

  }
</style>