<template>
    <div class="reset">
        <!-- navbar -->
    <div class="container-fluid">
        
        <nav class="row navbar navbar-expand-lg navbar-light bg-white">
            <div class="d-flex justify-content-center">
            <!-- <div class="navbar-nav ms-auto me-auto ms-sm-auto ms-lg-0 ms-md-auto"> -->
            <ul class="navbar-nav ms-auto me-auto d-none d-lg-block">
                <!-- <div class="collapse navbar-collapse" id="navbarNavDropdown"> -->
                    
                        
                    
                    
                    
                        <li class="nav-item">
                            <a class="navbar-brand me-auto" href="#" style="text-align: right;">
                            <img class="logo" src="frontend/images/logo.png" width="30" alt="logo" />
                        </a>
                            <span class="text-muted">
                                | &nbsp; Find The Best Fit
                            </span>

                            
                        </li>
                        
                    </ul>
                <!-- </div> -->
            <!-- </div> -->
            </div>
        </nav>
        
    </div>

    
    <main>
        <section class="section-verify d-flex align-items-center">
            <div class="col text-center">
                <img class="forgot" src="http://54.255.4.75:9091/resources/r8jfpc0fx95da5w.png" alt="" style="width:500px;">
                <h1>Your link is expired,
                Please repeat the Sign up step</h1>
                <router-link to="/siignup">Resend Email</router-link>
            </div>
        </section>
    </main>
    </div>
</template>

<script>
export default {
    name: "ExpiredView",
}
</script>

<style scoped>
*{
    background-color: #fff;
}
</style>