<template>
  <div>
    <input type="text" v-model.lazy="selected"> | 
    <button @click="moveTo('Props')">Props</button> | 
    <button @click="moveTo('Modal')">Modal</button> | 
    <component v-bind:is="selected"/>
  </div>
</template>

<script>
  import Props from './components/Props.vue';
  import Modal from './views/TextModal.vue';

  export default {
    data() {
      return {
        selected: 'Props',
      }
    },
    components: {
      Props, Modal,
    },
    methods: {
      moveTo(componentName) {
        this.selected = componentName;
      }
    },
    created() {
      console.log('App created');
    },
    mounted() {
      console.log('App mounted');
    }
  }
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
