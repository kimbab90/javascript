<!-- views/boardList.vue -->
<template>
  <div class="container">
    <table class="table table-hover">
      <thead>
        <tr>
          <th>No.</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일자</th>
          <th>댓글 수</th>
        </tr>        
      </thead>
      <tbody>
         <template v-if="count > 0">
          <tr v-for="boardInfo of boardList" v-bind:key="boardInfo.no" @click="goToBoardInfo(boardInfo.no)">
            <td>{{ boardInfo.no }}</td>
            <td>{{ boardInfo.title }}</td>
            <td>{{ boardInfo.writer }}</td>
            <td>{{ dateFormat(boardInfo.created_date, 'yyyy-MM-dd') }}</td>
            <td>{{ boardInfo.comment_count}}</td>
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
        boardList: []
      }
    },
    computed: {
      count() {
        return this.boardList.length;
      },
    },
    methods: {
      async getBoardList() {
        let result = await axios.get('/api/boards')
        .catch(err => console.log(err));
        this.boardList = result.data;
      },
      goToBoardInfo(no) {
        this.$router.push({name: 'boardInfo', query: {no : no}});
      },
      dateFormat(dateString, format) {
        let date = new Date(dateString);
        let year = date.getFullYear();
        let month = ('0' + (date.getMonth() + 1)).slice(-2);
        let day = ('0' + (date.getDate())).slice(-2);
        let result = format.replace('yyyy', year).replace('MM', month).replace('dd', day);
        return result;
      }
    },
    created() {
      this.getBoardList();
    }
  }
</script>