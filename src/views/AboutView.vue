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
                  :src="'http://54.255.4.75:9091/resources/'+ profile.recruiterImage" alt="" style="width: 125px; height:120px;">
                    <img v-else class="img-thumbnail position-absolute top-0 end-0 m-3"
                    src="http://54.255.4.75:9091/resources/r5jr7e3qf8f5uhr.png" alt="" style="width: 20% height:40%;">
                    
                </div>
                
                  <!-- Button trigger modal -->
                    <button type="button" class="btn new position-absolute top-0 end-0 m-3" data-bs-toggle="modal" data-bs-target="#exampleModal">
                      <i class="bi bi-pencil-square"></i>Edit/upload
                    </button>

                    <!-- Modal -->
                    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Edit Image Profile</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          <div class="modal-body">
                                    <form action="" @submit.prevent="onUpload" enctype="multipart/formdata">
                                        <label class="custom-file-upload">
                                         <input type="file" ref="file" @change="onFileSelected"/>
                                        </label>
                                        <button type="submit" class="btn btn-primary ">
                                       <i class="bi bi-pencil-square"></i>Save Changes</button>
                                    </form>
                          </div>
                          <div class="modal-footer">
                            <p class="text-muted">recomended size 120px x 120px</p>
                          </div>
                        </div>
                      </div>
                    </div>
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
        profile: [],
        selectedFile:null
      }
    },
    methods: {
     onFileSelected(Event){
       this.selectedFile = Event.target.files[0]
     },
      onUpload(){
       const fd = new FormData();
       fd.append('file',this.selectedFile,this.selectedFile.name)
       const recruiterId = JSON.parse(localStorage.getItem("user-info")).recruiterId
       fd.append('recruiterId', recruiterId)
        axios.post(`http://54.255.4.75:9091/api/v1/file/recruiter/photo`, fd)
        .then(res=>{
          console.log(res)
          location.reload(true)
        })
        
      //  const fd = new FormData();
      //  fd.append('image', this.selectedFile,  this.selectedFile.name)
      //  await axios.post(`http://54.255.4.75:9091/api/v1/file/recruiter/photo`,fd)
      //  .then(res =>{
      //    console.log(res)
      //  })
     },
     created() {
  // Simple POST request with a JSON body using axios
  const article = { title: "Vue POST Request Example" };
  axios.post("https://reqres.in/api/articles", article)
    .then(response => this.articleId = response.data.id);
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

  .btn{
    
    color: #fff;
  }
 .new{
   width: auto;
   padding-top: 7%;
   padding-bottom: 8%;
   color: transparent;
 }
 .new:hover{
   padding: auto;
   color: white;
   background: rgba(0, 0, 0, 0.285);
 }
 /* .custom-file-upload{
   
 } */
</style>