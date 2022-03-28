<template>
<sidebar-component></sidebar-component>
  <h1>Credit page</h1>
</template>

<script>
import SidebarComponentVue from '@/components/SidebarComponent.vue'
export default {
    components:{
        SidebarComponent : SidebarComponentVue
    }
}
</script>

<style scoped>
  h1{
    text-align: center;
  }
</style>