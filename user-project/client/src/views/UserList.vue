<!-- views/UserList.vue -->
<template>
  <div class="container">
    <table class="table table-hover">
      <caption>Total : {{ count }}</caption>
      <thead>
        <tr>
          <th>NO</th>
          <th>아이디</th>
          <th>이름</th>
          <th>성별</th>
          <th>가입날짜</th>
        </tr>        
      </thead>
      <tbody>
        <!-- 데이터 출력-->
         <template v-if="count > 0">
          <tr v-for="(user, index) of userList" v-bind:key="user.user_no" @click="goToUserInfo(user.user_no)">
            <td>{{ user.user_no }}</td>
            <td>{{ user.user_id }}</td>
            <td>{{ user.user_name }}</td>
            <td>{{ user.user_gender }}</td>
            <td>{{ dateFormat2(user.join_date, 'yyyy-MM-dd') }}</td>
          </tr>
         </template>
         <tr v-else><td>표시할 내용 없음</td></tr>
      </tbody>
    </table>
  </div>
</template>
<script>
  import axios from 'axios';

  export default {
    data() {
      return {
        userList: []
      }
    },
    computed: {
      count() {
        return this.userList.length;
      },
    },
    methods: {
      async getUserList() {
        let result = await axios.get('/api/users')
        .catch(err => console.log(err));
        this.userList = result.data;
      },
      dateFormat(dateString) {
        let date = new Date(dateString);
        return date.toLocaleDateString();
      },
      dateFormat2(dateString2, format) {
        let date = new Date(dateString2);
        let year = date.getFullYear();
        let month = ('0' + (date.getMonth() + 1)).slice(-2);
        let day = ('0' + (date.getDate())).slice(-2);
        let result = format.replace('yyyy', year).replace('MM', month).replace('dd', day);
        return result;
      },
      goToUserInfo(no) {
        this.$router.push({name: 'userInfo', query: {no : no}});
      }
    },
    created() {
      this.getUserList();
    }
  }
</script>