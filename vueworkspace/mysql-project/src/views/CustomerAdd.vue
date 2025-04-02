<template>
    <div class="container">
    <div class="row">
      <div class="row">
        <label>이름</label>
        <input type="text" v-model="info.name">
        <div class="form text-success" :class="{ 'warning' : !isName }">
          사용가능한 이름입니다
        </div>
        <div class="form text-danger" :class="{ 'warning' : isName }">
          이름을 입력하세요
        </div>
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
      <button class="btn btn-info" @click="addCustomer" :disabled="!isName">등록</button>
      <button class="btn btn-danger" @click="resetCustomer">초기화</button>
    </div>
  </div>
</template>
<script>
  import axios from 'axios';

  export default {

    data() {
      return {
        info: {
          name: null,
          email: null,
          phone: null,
          address: null,
        },
      }
    },
    computed: {
      isName() {
        return this.info.name != null && this.info.name != '';
      }
    },
    watch: {

    },
    methods: {
      async addCustomer() {
        let res = await axios.post('/api/customers', this.info)
        .catch((err) => console.log(err));
        let sqlRes = res.data;
        let id = sqlRes.insertId;
        if (id > 0) {
          alert('등록 성공');
          this.$router.push({ name: 'customerInfo', query: {id: id}});
        } else {
          alert('등록 실패');
        }
      },
      resetCustomer() {
        this.info = {
          name: null,
          email: null,
          phone: null,
          address: null,
        }
      }
    },
    created() {

    }
  }
</script>
<style scoped>
.warning {
  display: none;
}
</style>