<template>
 <div class="main col">
  <img src="../assets/maintenance.png" alt="">
  <h1>Sorry we're down for maintenance</h1>
  <h3>We'll be back up shortly. Check
    <router-link to="/">www.cariinkerja.com</router-link>
    or follow <router-link to="/">@cariinkerja</router-link> for updates.
  </h3>
  </div>
    
</template>

<script>
export default {
 name: "MaintenanceView"
}
</script>

<style scoped>
  img {
    margin-top: 80px;
    width: 400px;
  }
  
</style>