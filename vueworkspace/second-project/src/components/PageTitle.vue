<template>
  <div>
    <h1>{{ title }}</h1>
  </div>
</template>
<script>
  export default {
    data() {
      return {

      }
    },
    props: ['title'],
    created() {
      console.log('PageTitle created');
    },
    mounted() {
      console.log('PageTitle mounted');
    }
  } 
</script>
<style scoped>
</style>