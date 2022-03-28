<template>
<nav-basic :userInfo=userInfo></nav-basic>

<!-- banner -->
  <div class="section-2 my-6">
  <div class="main" style="background-image: linear-gradient(#ffffff 30%,#434379); padding-top: 40px;">       
  <div class="container-fluid pt-5 mt-5">
    <div class="row p-5">
      <div class="col-md-6">
        <h1 class="display-2 pt-5">Find the best fit<br>for your team</h1>
      </div>                
      <div class="col-md-6">
        <img class="img-fluid" src="../assets/banner.png" alt="">
      </div>
      </div>              
  </div>            
</div>
</div>

  <div class="main" style="background-image: linear-gradient(#434379,#131212);">
      <div class="d-flex justify-content-center" style="padding: 80px; color: white; text-align: center;">
        <h2>How we can help your Business</h2>
      </div>
  </div>



  
  <!-- card -->

  <div class="main-card">
    <div class="container px-4">
      <div class="row gx-3">
        <div class="col">
          <div class="p-3">
          <div class="card">
            <div class="card-body">
              <img class="card-image" src="../assets/icon/CREDIT.svg" alt="">
              <h4 class="card-title">Credits</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. 
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda aliquid numquam dignissimos.</p>
            </div>
          </div>
        </div>
        
        </div>
        <div class="col">
          <div class="p-3">
          <div class="card">
            <div class="card-body">
              <img class="card-image" src="../assets/icon/POSTJOB.svg" alt="">
              <h4 class="card-title">Post Job</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. 
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda aliquid numquam dignissimos.</p>
            </div>
          </div>
        </div>
        </div>
        <div class="col">
          <div class="p-3">
          <div class="card">
            <div class="card-body">
              <img class="card-image" src="../assets/icon/INTERVIEW.svg" alt="">
              <h4 class="card-title">Interview Schedule</h4>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content. 
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda aliquid numquam dignissimos.</p>
            </div>
          </div>
        </div>
        
        </div>
      </div>
    </div>
  </div>

 <div class="main" style="background-color: #101419; padding:90px">
    <div class="d-flex justify-content-center" style="padding: 20px; color: white; text-align: center;"><h2>Our Satisfied Partner</h2></div> 
    <marquee style="color:blue; font-weight:bold;">nichog gg pro aldous</marquee>
    
  </div>

<!-- sponsor -->

 <div class="section-5 my-0 pb-5" style="background-color:#101419;">
    <div class="container px-5">
      <div class="row gx-4 m-0">
        <div class="col">
          <div class="p">
            <img src="../assets/sponsor/BNI.png" alt="">
          </div>
        </div>
        <div class="col">
          <div class="p">
            <img src="../assets/sponsor/KAO.png" alt="">
          </div>
        </div>
        <div class="col">
          <div class="p">
            <img src="../assets/sponsor/TIX.png" alt="">
          </div>
        </div>
        <div class="col">
          <div class="p">
            <img src="../assets/sponsor/DENTSU.png" alt="">
          </div>
        </div>
        <div class="col">
          <div class="p">
            <img src="../assets/sponsor/SHARP.png" alt="">
          </div>
        </div>
        <div class="col">
          <div class="p">
            <img src="../assets/sponsor/ANA.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>

<footer class="pt-5">
        <div class="container">
        
        <div class="row">
            <div class="col">
                <h2>CariinKerja</h2>
                <span>Jl. Sudirman<br>
                Jakarta Pusat</span>
            </div>
            <div class="col">
            <ul class="navbar-nav mr-auto p-2"><h2>Company</h2>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">About Us</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Career</a>
              </li>
          </ul>
            </div>
            <div class="col">
            <ul class="navbar-nav mr-auto p-2"><h2>Features</h2>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Reviews</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Community</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Social Media</a>
              </li>
          </ul>
            </div>
            <div class="col">
            <ul class="navbar-nav mr-auto p-2"><h2>Help</h2>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">support@mail.com</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">+6286736450982</a>
              </li>
          </ul>
            </div>
        </div>
    </div>
</footer>

<div class="copyright">
<hr style="border: none;
  height: 3px;">
    <p class="text-muted">Copyright@2022</p>
  </div>

</template>

<script>
// @ is an alias to /src
import navbasic from '../components/NavBasic.vue'

export default {
  name: 'HomeView',
  components: {
    NavBasic : navbasic
  },
  data(){
    return {
      userInfo: null
    }
  },
  mounted(){
    console.log("saduk")
    const user = JSON.parse(localStorage.getItem("user-info"))
      this.userInfo = user
      console.log("saduk")
      console.log(user)
  }
  
}
</script>

<style scoped>
 .card {
   width: 21rem;
   height: 300px;
   border-radius: 50px;
   background-color:  rgb(12, 12, 12);
   color: white;
   margin-left: 20px;
 }
 .card-image {
   width: 50px;
   margin-right: 240px;
   margin-bottom: 10px;
 }
 .card-title {
   text-align: left;
 }
 .card-text {
   text-align: left;
 }
 .main-card {
   background: #101419 ;
 }
 .navbar-nav {
   text-align: left;
   margin-left: 90px;
 }
 footer {
   background: #101419;
   text-align: left;
   color: white;
 }
 

.nav-link {
  color: white;
}
.nav-link:hover {
  color: blue;
}
.copyright {
  background: #101419;
  margin-bottom: 0;
  padding-top: 10px;
  padding-bottom: 0;
}
.copyright p {
  margin-bottom: 0;
  padding-bottom: 10px;
  color: white;
} 

h1{
  font-weight: bold;
}
 
</style>