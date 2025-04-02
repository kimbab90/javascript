<template>
  <div class="container">
    <div class="row">
      <div class="row">
        <label>아이디</label>
        <input type="text" v-model="info.id">
      </div>
      <div class="row">
        <label>이름</label>
        <input type="text" v-model="info.name">
      </div>
      <div class="row">
        <label>이메일</label>
        <input type="email" v-model="info.email">
      </div>
      <div class="row">
        <label>연락처</label>
        <input type="tel" v-model="info.phone">
      </div>
      <div class="row">
        <label>주소</label>
        <input type="text" v-model="info.address">
      </div>
    </div>
    <div class="row">
      <button class="btn btn-info" @click="updateCustomer()">수정</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {

  data() {
    return {
      info: {},
    }
  },
  computed: {},
  watch: {},
  methods: {
    async getCustomer(id) {
      let res = await axios.get(`/api/customers/${id}`)
        .catch(err => console.log(err));
      this.info = res.data;
    },
    async updateCustomer() {
      let updateData = {
        name: this.info.name,
        email: this.info.email,
        phone: this.info.phone,
        address: this.info.address,
      }

      let res = await axios.put(`/api/customers/${this.info.id}`, updateData)
        .catch((err) => console.log(err));
      let sqlRes = res.data;
      let rows = sqlRes.affectedRows;
      if (rows > 0) {
        alert('수정 성공');
        this.$router.push({ name: 'customerInfo', query: {id: this.info.id}});
      } else {
        alert('수정 실패');
      }
    }
  },
  created() {
    const selectedId = this.$route.params.id;
    this.getCustomer(selectedId);
  }
}
</script>

<style scoped>
</style>