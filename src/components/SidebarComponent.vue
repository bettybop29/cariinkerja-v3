<template>
<div class="wrapper">
        <!-- Sidebar  -->
        <nav id="sidebar">
            
            <div class="sidebar-header">
               
                <span><img src="http://54.255.4.75:9091/resources/lnp4av9z3ceiw06.png" alt="" style="width:150px; height:30px;"></span>
            </div>

            <ul class="list-unstyled components">
                
                <li>
                    <router-link class="" to="/dashboard"><i class="bi bi-house-fill"></i>Dashboard</router-link>
                </li>
                <li>
                   <router-link class="" to="/postjob"><i class="bi bi-sticky-fill"></i>Post Job</router-link>
                </li>
                <li>
                   <router-link class="" to="/about"><i class="bi bi-person-fill"></i>Company Profile</router-link>
                </li>
                <!-- <li>
                   <router-link class="" to="/credit"><i class="bi bi-newspaper"></i>Credit</router-link>
                </li> -->
            </ul>
            <button class="icon-link">
            <li class="image">
                
                <img src="../assets/mobile.svg" alt="">
               <h4>Get Mobile<br> App</h4>
            </li>
            </button>
            <ul class="list-unstyled CTAs">
               
               
                <li>
                   <button v-on:click="logout" class="btn btn-danger mt-5"><i class="bi bi-arrow-left-circle-fill"></i>Logout</button>
                        
                </li>
            </ul>
        </nav>

        <!-- Page Content  -->
        
</div>
</template>

<script>
import { createToast } from "mosha-vue-toastify";

export default {
    name: "SidebarComponent",   
    methods:{
        logout(){
        try {
        localStorage.removeItem("user-info")
        localStorage.removeItem("job-info")
        localStorage.removeItem("sign-info")
       
        this.$router.push("/login");
        createToast("logout success!", { type: "success" });
        }
        catch (error) {
          console.log(error);
        }
    
        }
    }
}

</script>

<style scoped>

a,
a:hover,
a:focus {
    color: inherit;
    text-decoration: none;
    transition: all 0.3s;
}

.navbar {
    padding: 15px 10px;
    background: rgb(26, 24, 24);
    border: none;
    border-radius: 20px;
    margin-bottom: 40px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
}

.navbar-btn {
    box-shadow: none;
    outline: none !important;
    border: none;
}

.line {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ddd;
    margin: 40px 0;
}
.image{
    background: #f3f3f3;
    text-align: center;
    list-style: none;
    outline: none;
    padding-top: 20px;
}

.icon-link{
    background: #f3f3f3;
    justify-content: center;
    border: none;
    margin: 20px;
    padding: 10px;
    width: 80%;
    height: 26%;
    border-radius: 30px;
    margin-top: 40px;
    transition: box-shadow 1s;
}
.icon-link:hover{
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    
    
}

/* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */
i {
    padding-right: 10px;
}
.wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
}

#sidebar {
    min-width: 250px;
    max-width: 250px;
    background: #ffffff;
    color: #424242;
    transition: all 0.3s;
    left: 0;
    position: fixed;
     box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
     height: 100vh;
}

#sidebar.active {
    margin-left: -250px;
}

#sidebar .sidebar-header {
    padding: 10px;
    
}
#sidebar .sidebar-header img {
  width: 50px;
  height: 50px;
}
#sidebar .sidebar-header span{
  font-weight: 800;
  padding: 10px;
}

#sidebar ul.components {
    padding: 20px 0;
    
}

#sidebar ul p {
    color: rgb(61, 26, 219);
    padding: 10px;
}

#sidebar ul li a {
    padding: 10px;
    font-weight: 200;
    display: block;
    text-decoration: none;
}

#sidebar ul li a:hover {
    color: #424242;
    background: #F6F6FF;
    border-radius: 10px;
}

#sidebar ul li.active>a,
a[aria-expanded="true"] {
    color: rgb(57, 16, 204);
    background: #6380ff;
    border-radius: 10px;
}

a[data-toggle="collapse"] {
    position: relative;
}

.dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
}

ul ul a {
    font-weight: 200;
    padding-left: 30px !important;
    background: #1e41db;
}

ul.CTAs {
    padding: 10px;
    
}

.btn{
    width: 100%;
}

ul.CTAs a {
    text-align: center;
    font-size: 0.9em !important;
    display: block;
    border-radius: 5px;
    margin-bottom: 5px;
}

a.download {
    background: #fff;
    color: #7386D5;
}

a.article,
a.article:hover {
    background: #6d7fcc;
    color: #fff;
}

/* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */

#content {
    width: 100%;
    padding: 20px;
    min-height: 100vh;
    transition: all 0.3s;
    position: relative;
    margin-left: 20%;
}

/* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

@media (max-width: 768px) {
    #sidebar {
        margin-left: -250px;
    }
    #sidebar.active {
        margin-left: 0;
    }
    #sidebarCollapse span {
        display: none;
    }
}
</style>