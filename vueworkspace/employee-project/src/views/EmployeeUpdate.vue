<template>
    <div class="container">
    <div class="row">
      <div class="row">
        <label>이름</label>
        <input type="text" v-model="employeeInfo.first_name">
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
      <button class="btn btn-primary" @click="updateEmployee">수정</button>
    </div>
  </div>

</template>

<script>
    import axios from 'axios';

export default {
    data() {
        return {
            employeeInfo: {
                id: null,
                first_name: null,
                last_name: null,
                email: null,
                gender: null,
                ip_address: null
            }
        }
    },
    methods: {
        async getEmployeeInfo(id) {
            let res = await axios.get(`/api/emp/${id}`)
            .catch(err => console.log(err));
            let info = res.data;
            this.employeeInfo = info;
        },
        async updateEmployee() {
            let res = await axios.put(`/api/emp/${this.employeeInfo.id}`, this.employeeInfo)
                .catch(err => console.log(err));
                let data = res.data;
                let affectedRows = data.affectedRows;
                if (affectedRows > 0) {
                    alert('수정 성공');
                    this.$router.push('/list');
                } else {
                    alert('수정 실패');
                }
        }
    },
    created() {
        const selected = this.$route.params.id;
        this.getEmployeeInfo(selected);
    }
}
</script>

<style scoped>
</style>