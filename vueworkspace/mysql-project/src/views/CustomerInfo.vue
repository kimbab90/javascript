<template>
  <div class="container text-center">
    <div class="row">
      <div class="row">
        <div class="col-4">아이디</div>
        <div class="col-8">{{ customer.id }}</div>
      </div>
      <div class="row">
        <div class="col-4">이름</div>
        <div class="col-8">{{ customer.name }}</div>
      </div>
      <div class="row">
        <div class="col-4">이메일</div>
        <div class="col-8">{{ customer.email }}</div>
      </div>
      <div class="row">
        <div class="col-4">연락처</div>
        <div class="col-8">{{ customer.phone }}</div>
      </div>
      <div class="row">
        <div class="col-4">주소</div>
        <div class="col-8">{{ customer.address }}</div>
      </div>
    </div>
    <div class="row">
      <button class="col btn btn-info" @click="goToUpdate()">수정</button>
      <button class="col btn btn-light" @click="goToList()">목록</button>
      <button class="col btn btn-danger" @click="removeInfo()">삭제</button>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';

  export default {

    data() {
      return {
        customer: {}
      }
    },
    computed: {

    },
    watch: {

    },
    methods: {
      async getCustomer(id) {
        let res = await axios.get(`/api/customers/${id}`)
        .catch(err => console.log(err));
        this.customer = res.data;
      },
      goToUpdate() {
        this.$router.push({ name: 'customerUpdate', params : {id : this.customer.id}});
      },
      goToList() {
        // this.$router.push({ name: 'customers'});
        this.$router.push('/customers');
      },
      async removeInfo() {
        let res = await axios.delete(`/api/customers/${this.customer.id}`)
        .catch(err => console.log(err));
        let sqlRes = res.data
        let rows = sqlRes.affectedRows;
        if (rows > 0) {
          alert('삭제 성공');
          this.goToList();
        } else {
          alert('삭제 실패');
        }
      }
    },
    created() {
      const selectedId = this.$route.query.id;
      this.getCustomer(selectedId);
    }
  }
</script>
<style scoped>
</style>