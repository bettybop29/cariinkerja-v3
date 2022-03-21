<template>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-white">
    <div class="container-fluid">
      <div class="logo">
        <router-link class="text-decoration-none" to="/"
          >Cariinkerja</router-link
        >
      </div>
      <!-- <a class="navbar-brand" href="#" style="font-weight: 700; color: blue;">CariinKerja</a> -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          
          
        </ul>
        <form class="d-flex">
          
          <!-- <router-link class="btn btn-primary" to="/login">Login</router-link> -->
          <!-- <a class="btn btn-primary" href="login.html" role="button">Login</a> -->
        </form>
      </div>
    </div>
  </nav>
  
</template>

<script>
export default {
    name: "NavLogin"
}
</script>

<style scoped>


</style>