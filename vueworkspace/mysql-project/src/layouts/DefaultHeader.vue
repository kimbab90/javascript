<template>
  <nav class="nav justify-content-center">
    <router-link class="nav-link" to="/">Home</router-link> | 
    <router-link class="nav-link" :to="{name : 'customers'}">Customers</router-link> |
    <router-link class="nav-link" :to="{name : 'customerAdd'}">CustomerAdd</router-link>
  </nav>
</template>