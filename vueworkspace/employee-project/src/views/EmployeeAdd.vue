<template>
    <div class="container">
    <div class="row">
      <div class="row">
        <label>이름</label>
        <input type="text" v-model="employeeInfo.first_name">
        <div class="form text-success" :class="{ 'warning' : !isName }">
          사용가능한 이름입니다
        </div>
        <div class="form text-danger" :class="{ 'warning' : isName }">
          이름을 입력하세요
        </div>
      </div>
      <div class="row">
        <label>성</label>
        <input type="text" v-model="employeeInfo.last_name">
      </div>
      <div class="row">
        <label>이메일</label>
        <input type="email" v-model="employeeInfo.email">
      </div>
      <div class="row">
        <label>성별</label>
        <input type="tel" v-model="employeeInfo.gender">
      </div>
      <div class="row">
        <label>IP</label>
        <input type="text" v-model="employeeInfo.ip_address">
      </div>
    </div>
    <div class="row">
      <button class="btn btn-primary" @click="addEmployee" :disabled="!isName">등록</button>
    </div>
  </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                employeeInfo: {
                    first_name: null,
                    last_name: null,
                    email: null,
                    gender: null,
                    ip_address: null
                }
            }
        },
        methods: {
            async addEmployee() {
                let res = await axios.post('/api/emp', this.employeeInfo)
                .catch(err => console.log(err));
                let data = res.data;
                let affectedRows = data.affectedRows;
                if (affectedRows > 0) {
                    alert('등록 성공');
                    this.$router.push('/list');
                } else {
                    alert('등록 실패');
                }
            }
        },
        computed: {
            isName() {
                return this.employeeInfo.first_name != null && this.employeeInfo.first_name != '';
            }
        }
    }
</script>

<style scoped>
.warning {
 display: none;   
}
</style>