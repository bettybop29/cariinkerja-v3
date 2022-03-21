<template>

  <div><h1><marquee>ian sowddoho</marquee></h1></div>
   <div class="container col">
     <form class="mb-3">
  <div class="col-md-4 ">
    <label for="validationDefault01" class="form-label">Job name</label>
    <input type="text" class="form-control" id="validationDefault01" value="{{job.name}}" required>
    <h1>{{jobName}}</h1>
    <h1>{{jobSalary}}</h1>
    <h1>{{jobPosition}}</h1>
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label mt-3">Last name</label>
    <input type="text" class="form-control" id="validationDefault02" required>
  </div>
 
  <div class="col-md-4">
    <label for="validationDefault03" class="form-label mt-3">City</label>
    <input type="text" class="form-control" id="validationDefault03" required>
  </div>
  <div class="col-md-4">
    <label for="validationDefault04" class="form-label mt-3">State</label>
    <select class="form-select" id="validationDefault04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
  </div>
  <div class="col-md-4">
    <label for="validationDefault05" class="form-label mt-3">Zip</label>
    <input type="text" class="form-control" id="validationDefault05" required>
  </div>
 
  <div class="col-12 mt-3">
    <button class="btn btn-primary" type="submit">Edit</button>
  </div>
</form>
     </div>   
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      // apiUrl: 'http://54.255.4.75:9091/api/v1/job/delete/59',
      jobName: null,
      jobSalary: null,
      jobPosition: null
    }
  },

  methods: {
    fetchData() {
      
      // const url = this.apiUrl + this.id
      const url = 'http://54.255.4.75:9091/api/v1/job/23'
      fetch(url).then((res) => {
        if(res.status == 200) {
          return res.json()
        }
      })
      .then((data) => {
        this.jobName = data.jobName
        this.jobSalary = data.jobSalary,
        this.jobPosition = data.jobPosition
        console.log(this.jobName)
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
</style>