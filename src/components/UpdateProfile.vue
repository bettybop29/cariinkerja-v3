<template>
  <div class="container mt-5">
      <h1>{{profile.recruiterEmail}}</h1>
      <form class="row g-3 needs-validation" novalidate>
  <div class="col-md-4">
    <label for="validationCustom01" class="form-label">Job name</label>
    <input type="text" class="form-control" id="validationCustom01"  v-model="profile.recruiterEmail" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustom02" class="form-label">Company</label>
    <input type="text" class="form-control" id="validationCustom02" v-model="profile.recruiterCompany" required>
    <div class="valid-feedback">
      Looks good!
    </div>
  </div>
  <div class="col-md-4">
    <label for="validationCustomUsername" class="form-label">Username</label>
    <div class="input-group has-validation">
      <span class="input-group-text" id="inputGroupPrepend">@</span>
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationCustom03" v-model="profile.recruiterAddress" required>
    <div class="invalid-feedback">
      Please provide a valid city.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom04" class="form-label">State</label>
    <select class="form-select" id="validationCustom04" required>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
  <div class="col-md-3">
    <label for="validationCustom05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationCustom05" required>
    <div class="invalid-feedback">
      Please provide a valid zip.
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required>
      <label class="form-check-label" for="invalidCheck">
        Agree to terms and conditions
      </label>
      <div class="invalid-feedback">
        You must agree before submitting.
      </div>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    props:['id'],
    data(){
      return {
        profile:[]
      }
    },
    methods:{
      fetchData() {
        axios.get(`http://54.255.4.75:9091/api/v1/auth/recruiter/`+this.$route.params.id)

        .then((data) => {
          this.profile=data.data
        })
      }
    },
    mounted(){
      this.fetchData()
    }
}
</script>

<style scoped>
  h1 {
    text-align: center;
  }
  .container{
    background-color: #f3f3f3;
    border-radius: 20px;
  }
</style>