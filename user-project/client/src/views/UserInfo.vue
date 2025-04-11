<!-- views/UserInfo.vue -->
<template>
  <div class="container">
    <table class="table">
      <tr>
        <th class="text-right">NO</th>
        <td class="text-center">{{ userInfo.user_no }}</td>
      </tr>
      <tr>
        <th class="text-right">아이디</th>
        <td class="text-center">{{ userInfo.user_id }}</td>
      </tr>
      <tr>
        <th class="text-right">비밀번호</th>
        <td class="text-center">{{ userInfo.user_pwd }}</td>
      </tr>
      <tr>
        <th class="text-right">이름</th>
        <td class="text-center">{{ userInfo.user_name }}</td>
      </tr>
      <tr>
        <th class="text-right">성별</th>
        <td class="text-center">{{ userInfo.user_gender }}</td>
      </tr>
      <tr>
        <th class="text-right">나이</th>
        <td class="text-center">{{ userInfo.user_age }}</td>
      </tr>
      <tr>
        <th class="text-right">가입일자</th>
        <td class="text-center">{{ userInfo.join_date }}</td>
      </tr>
    </table>
    <div>
      <button class="btn btn-light" @click="goToUserList">목록</button>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        userInfo: {}
      }
    },
    methods: {
      async getUser(no) {
        let result = await axios.get(`/api/users/${no}`)
        .catch(err => console.log(err));
        this.userInfo = result.data;
      },
      goToUserList() {
        this.$router.push({name: 'userList'});
      }
    },
    created() {
      let selected = this.$route.query.no;
      this.getUser(selected);
    }
  }
</script>

<style scoped>
</style>