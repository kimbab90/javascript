<template>
  <Header></Header>
  <router-view/>
</template>

<script>
  import Header from './layouts/Header.vue';

  export default {
    components: {
      Header,
    }
  }
</script>
<style>
</style>
