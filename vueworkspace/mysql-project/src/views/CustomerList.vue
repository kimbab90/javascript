<template>
  <div class="container">
  <table class="table table-hover">
    <caption>Total : {{ count }}</caption>
    <thead>
      <tr>
        <th>No</th>
        <th>아이디</th>
        <th>이름</th>
        <th>연락처</th>
      </tr>
    </thead>
    <tbody>
      <template v-if="count > 0">
        <tr v-for="(info, index) in customerList" v-bind:key="info.id" @click="goToInfo(info.id)">
          <td>{{ index + 1 }}</td>
          <td>{{ info.id }}</td>
          <td>{{ info.name }}</td>
          <td>{{ info.phone }}</td>
        </tr>
      </template>
      <tr v-else>
        <td colspan="4">현재 데이터가 존재하지 않습니다</td>
      </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
import axios from 'axios';

  export default {
    data() {
      return {
        customerList: [],
      }
    },
    computed: {
      count() {
        return this.customerList.length;
      }
    }
    ,methods: {
      async getCustomers() {
        let res = await axios.get('/api/customers')
        .catch(err => console.log(err));
        this.customerList = res.data;
      },
      goToInfo(id) {
        this.$router.push({ name: 'customerInfo', query: {id: id}});
        //query

        //params
        // { name: 'customerInfo', params: {id: id}}
      }
    }
    ,created() {
      this.getCustomers();
    }
  }

</script>

<style scoped>

</style>