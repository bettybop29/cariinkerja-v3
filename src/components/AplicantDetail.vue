<template>
  <div class="container">
      <router-link class="link" to="postjob"><h1>Jobpost</h1></router-link>
    <div class="card" style="width: 18rem;">
            <img src="http://54.255.4.75:9091/resources/meta.png" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title"><span class="card-text title-desc">Name: </span>{{aplicant.jobseekerName}}</h5>
            <p class="card-text"><span class="card-text title-desc">Email: </span>{{aplicant.jobseekerEmail}}</p>
            <p class="card-text"><span class="card-text title-desc">Education: </span>{{aplicant.jobseekerEducation}}</p>
            <p class="card-text"><span class="card-text title-desc">Phone: </span>{{aplicant.jobseekerPhone}}</p>
            <p class="card-text"><span class="card-text title-desc">Birth: </span>{{aplicant.jobseekerDateOfBirth}}</p>
            <p class="card-text"><span class="card-text title-desc">Profession: </span>{{aplicant.jobseekerProfession}}</p>
            <p class="card-text"><span class="card-text title-desc">Skill: </span>{{aplicant.jobseekerSkill}}</p>
            <p class="card-text"><span class="card-text title-desc">Social Media: </span>{{aplicant.jobseekerMedsos}}</p>
            <a href="#" class="btn btn-primary">Download Resume</a>
        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name:"AplicantDetail",
    
    data(){
        return{
            aplicant:[]
        }
    },
    methods:{
        async aplicantDetail(){
            await axios.get(`http://54.255.4.75:9091/api/v1/application/applicant/`+ this.$route.params.id)
            .then((data)=>{
                this.aplicant=data.data.data
                
            })
        }
    },
    mounted(){
        this.aplicantDetail()
    }
}

</script>

<style scoped>
    .container{
        margin: 20px;
    }
    img{
        width: 50%;
        height: 50%;
    }
    .card{
        border-radius: 20px;
        box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
    .link{
        text-decoration: none;
        color: rgb(31, 31, 31);
    }
    .card-text{
        padding: 1px;
        margin: 0;
    }
</style>