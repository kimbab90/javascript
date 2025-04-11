<template>
  <div class="container">
    <template v-if="commentCount > 0">
      <p>댓글 목록</p>
      <hr>
      <table class="table table-hover">
        <tbody>
          <tr v-for="commentInfo of commentList" v-bind:key="commentInfo.no">
            <td>{{ commentInfo.content }}</td>
            <td>{{ commentInfo.writer }}</td>
            <td>{{ dateFormat(commentInfo.created_date, 'yyyy-MM-dd') }}</td>
          </tr>
        </tbody>
      </table>
    </template>
    <p v-else>댓글 없음</p>
  </div>
</template>

<script>
  import axios from 'axios';

  export default {
    props: {
      no: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        commentList: [],
      }
    },
    computed: {
      commentCount() {
        return this.commentList.length;
      }
    },
    methods: {
      async getCommentList(no) {
        let result = await axios.get(`/api/comments/${no}`)
          .catch(err => console.log(err));
        this.commentList = result.data;
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
      this.getCommentList(this.no);
    }
  }
</script>