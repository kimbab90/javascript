<template>
  <nav>
    <router-link to="/">Home</router-link> | 
    <router-link to="/about">About</router-link> | 
    <router-link to="/data">Data</router-link> | 
    <router-link v-bind:to="{name: 'list'}">List</router-link> | 
    <router-link v-bind:to="{name: 'if'}">If</router-link> | 
    <router-link v-bind:to="{name: 'event'}">Event</router-link> | 
    <router-link v-bind:to="{name: 'computedWatch'}">ComputedWatch</router-link>
  </nav>
  <router-view/>
  <hr>
  <!-- <DataBinding/> -->
  <!-- <ListBinding/> -->
</template>

<script>
  // import DataBinding from './views/DataBinding.vue';
  // import ListBinding from './views/ListBinding.vue';

  // export default {
  //   components: {
  //     DataBinding,
  //     ListBinding
  //   }
  // }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>