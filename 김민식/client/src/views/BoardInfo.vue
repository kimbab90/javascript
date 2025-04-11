views/boardInfo.vue
<template>
  <div class="container">
    <table class="table">
      <tbody>
      <tr>
        <th class="text-right">번호</th>
        <td class="text-center">{{ boardInfo.no }}</td>
      </tr>
      <tr>
        <th class="text-right">작성일</th>
        <td class="text-center">{{ dateFormat(boardInfo.created_date, 'yyyy-MM-dd') }}</td>
      </tr>
      <tr>
        <th class="text-right">제목</th>
        <td class="text-center">{{ boardInfo.title }}</td>
      </tr>
      <tr>
        <th class="text-right">이름</th>
        <td class="text-center">{{ boardInfo.writer }}</td>
      </tr>
      <tr>
        <th class="text-right">내용</th>
        <td class="text-center">{{ boardInfo.content }}</td>
      </tr>
      </tbody>
    </table>
    <div>
      <button class="btn btn-primary" @click="goToboardUpdate">수정</button>
    </div>
    <hr>
  </div>
  <CommentComponent v-bind:no="this.$route.query.no"/>
</template>

<script>
  import axios from 'axios';
  import CommentComponent from '@/components/CommentComponent.vue';

  export default {
    components: {
      CommentComponent,
    },
    data() {
      return {
        boardInfo: {},
        // commentList: [],
      }
    },
    // computed: {
    //   commentCount() {
    //     return this.commentList.length;
    //   }
    // },
    methods: {
      async getboard(no) {
        let result = await axios.get(`/api/boards/${no}`)
        .catch(err => console.log(err));
        this.boardInfo = result.data;
      },
      // async getCommentList(no) {
      //   let result = await axios.get(`/api/comments/${no}`)
      //   .catch(err => console.log(err));
      //   this.commentList = result.data;
      // },
      goToboardUpdate() {
        this.$router.push({name: 'boardUpdate', query : {no: this.boardInfo.no}});
      },
      dateFormat(dateString, format) {
        let date = new Date(dateString);
        let year = date.getFullYear();
        let month = ('0' + (date.getMonth() + 1)).slice(-2);
        let day = ('0' + (date.getDate())).slice(-2);
        let result = format.replace('yyyy', year).replace('MM', month).replace('dd', day);
        return result;
      },
    },
    created() {
      let selected = this.$route.query.no;
      this.getboard(selected);
      // this.getCommentList(selected);
    }
  }
</script>

<style scoped>
</style>