<template>

  <div><h1><marquee>ian sowddoho</marquee></h1></div>
   <div class="container col">
     <form class="mb-3">
  <div class="col-md-4 ">
    <label for="validationDefault01" class="form-label">Job name</label>
    <input type="text" class="form-control" id="validationDefault01" required>
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