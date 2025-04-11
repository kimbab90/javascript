<template>
  <BoardForm>
    <template v-slot:no>
      <input class="form-control" type="text" v-model="boardInfo.no" readonly>
    </template>
    <template v-slot:title>
      <input class="form-control" type="text" v-model="boardInfo.title">
    </template>
    <template v-slot:writer>
      <input class="form-control" type="text" v-model="boardInfo.writer">
    </template>
    <template v-slot:content>
      <textarea class="form-control" v-model="boardInfo.content"></textarea>
    </template>
    <template v-slot:created_date>
      <input class="form-control" type="date" v-model="formattedDate" readonly>
    </template>
    <template v-slot:button>
      <button class="btn btn-info" @click="modifyBoard">저장</button>
    </template>
  </BoardForm>
</template>


<script>
  import axios from 'axios';
  import BoardForm from '@/components/BoardForm.vue';

  export default {
    components: {
      BoardForm,
    },
    data() {
      return {
        boardInfo: {
          no: null,
          title: null,
          writer: null,
          content: null,
          created_date: null,
          updated_date: null,
        }
      }
    },
    computed: {
      formattedDate() {
        return this.dateFormat(this.boardInfo.created_date, 'yyyy-MM-dd');
      }
    },
    methods: {
      async modifyBoard() {
        let result = await axios.put(`/api/boards/${this.boardInfo.no}`, this.boardInfo)
          .catch(err => console.log(err));
        let data = result.data;
        let rows = data.affectedRows;
        if (rows > 0) {
          alert('수정 성공');
          this.$router.push({name: 'boardInfo', query: {no: this.boardInfo.no}})
        } else {
          alert('수정 실패');
        }
      },
      async getboard(no) {
        let result = await axios.get(`/api/boards/${no}`)
          .catch(err => console.log(err));
        this.boardInfo = result.data;
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
    }
  }
</script>

<style>
</style>