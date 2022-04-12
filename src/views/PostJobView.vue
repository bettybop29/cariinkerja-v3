<template>
  <sidebar-component></sidebar-component>
  <div class="main">
    <button type="button" class="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal"
      data-bs-whatever="@getbootstrap">
      <i class="bi bi-plus-circle"></i>
      Add New Job
    </button>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel1">Add Job</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">Job Name:</label>
                <input type="text" class="form-control" id="recipient-name" v-model="jobName" />
              </div>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">Job Salary:</label>
                <input type="number" class="form-control" id="recipient-name" v-model="jobSalary" />
              </div>
              <div class="mb-3">
                <label for="inputState">Job Position</label>
                <select class="form-control" id="inputState" v-model="jobPosition">
                  <option selected>Choose..</option>
                  <option>Internship</option>
                  <option>Full time</option>
                  <option>Part Time</option>
                  <option>Contractual</option>
                  <option>Freelance</option>
                </select>
              </div>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label">Job Requirement:</label>
                <input type="text" class="form-control" id="recipient-name" v-model="jobRequirement" />
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">Job Desc:</label>
                <textarea class="form-control" id="message-text" v-model="jobDesc"></textarea>
              </div>
              <div class="mb-3">
                <label for="message-text" class="col-form-label">Job Address:</label>
                <textarea class="form-control" id="message-text" v-model="jobAddress"></textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">
              X
            </button>
            <button v-on:click="addjob" type="button" class="btn btn-primary" data-bs-dismiss="modal">Add</button>
          </div>

        </div>

      </div>

    </div>

    <div class="row">
      <div class="col mt-3" v-for="item in list" v-bind:key="item.id">
        <job-component :item="item"></job-component>
      </div>
    </div>
  </div>
</template>
<script>
  import JobComponent from '../components/JobComponent.vue'
  import sidebarcomponent from '../components/SidebarComponent.vue'
  import axios from "axios";
  import {
    createToast
  } from "mosha-vue-toastify";
  import 'boxicons';

  export default {
    name: "PostJob",
    components: {
      SidebarComponent: sidebarcomponent,
      JobComponent: JobComponent
    },
    data() {
      return {
        jobName: "",
        jobSalary: "",
        jobPosition: "",
        jobRequirement: "",
        jobDesc: "",
        jobAddress: "",
        list: [],


      };
    },
    methods: {
      formatPrice(value) {
        let val = (value / 1).toFixed(2).replace('.', ',')
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      },
      // func tambah job
      async addjob() {
        try {
          const recruiterId = JSON.parse(localStorage.getItem("user-info")).data.recruiterId
          await axios.post(
            `http://54.255.4.75:9091/api/v1/job/create?jobName=${this.jobName}&recruiterId=${recruiterId}&jobSalary=${this.jobSalary}&jobPosition=${this.jobPosition}&jobAddress=${this.jobAddress}&jobDesc=${this.jobDesc}&jobRequirement=${this.jobRequirement}`
            );
          createToast("Job Successfully Created", {
            type: "success"
          });
          location.reload(true)

        } catch (error) {
          createToast("please, fill blank form", {
            type: "danger"
          });
          console.log(error);
        }
      },
      logout() {
        try {
          localStorage.removeItem("user-info")
          this.$router.push("/login");
          createToast("logout success!", {
            type: "success"
          });
        } catch (error) {
          console.log(error);
        }

      }
    },

    // func tampilin data
    //monted render
    mounted() {
      // const recruiterId = JSON.parse(localStorage.getItem("user-info")).data.recruiterId
      axios.get(`http://54.255.4.75:9091/api/v1/jobs/89`)
        .then((resp) => {
          this.list = resp.data
          localStorage.setItem("job-info", JSON.stringify(resp.data));
        })

    }

  };
</script>
<style scoped>
  .main {
    margin-left: 16%;
    padding: 20px;
    background-color: #F3F3F3;
  }

  .btn:hover {
    box-shadow: 0 2px 10px rgb(0 0 0 / 0.5);
  }
</style>