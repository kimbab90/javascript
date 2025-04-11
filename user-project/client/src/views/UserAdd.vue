<!-- views/UserAdd.vue -->
<template>
  <div class="container">
    <table class="table">      
      <tr>
        <th class="text-right">아이디</th>
        <td class="text-center">
          <input type="text" v-model="userInfo.user_id" >
        </td>
      </tr>
      <tr>
        <th class="text-right">비밀번호</th>
        <td class="text-center">
          <input type="password" v-model="userInfo.user_pwd" >
        </td>
      </tr>
      <tr>
        <th class="text-right">이름</th>
        <td class="text-center">
          <input type="text" v-model="userInfo.user_name">
        </td>
      </tr>
      <tr>
        <th class="text-right">성별</th>
        <td class="text-center">
          <input type="radio" v-model="userInfo.user_gender" value="M" > 남자 
          <input type="radio" v-model="userInfo.user_gender" value="F" > 여자 
        </td>
      </tr>
      <tr>
        <th class="text-right">나이</th>
        <td class="text-center">
          <input type="number" v-model="userInfo.user_age" >
        </td>
      </tr>
      <tr>
        <th class="text-right">가입일자</th>
        <td class="text-center">
          <input type="date" v-model="userInfo.join_date">
        </td>
      </tr>
    </table>
    <div>
      <button class="btn btn-info" @click="addUserInfo">등록</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        userInfo: {
          user_id: null,
          user_pwd: null,
          user_name: null,
          user_gender: null,
          user_age: null,
          join_date: null,
        }
      }
    },
    methods: {
      async addUserInfo() {
        let result = await axios.post('/api/users', this.userInfo)
        .catch(err => console.log(err));
        let data = result.data;
        let rows = data.affectedRows;
        if (rows > 0) {
          alert('추가 성공');
        } else {
          alert('추가 실패');
        }
      }
    }
  }
</script>

<style>
</style>