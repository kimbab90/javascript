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
      <button class="btn btn-info" @click="addBoard">저장</button>
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
          created_date: new Date(),
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
      async addBoard() {
        let result = await axios.post('/api/boards', this.boardInfo)
        .catch(err => console.log(err));
        let data = result.data;
        let id = data.insertId;
        if (id > 0) {
          alert('추가 성공');
          this.boardInfo.no = id;
        } else {
          alert('추가 실패');
        }
      },
      dateFormat(dateString, format) {
        let date = new Date(dateString);
        let year = date.getFullYear();
        let month = ('0' + (date.getMonth() + 1)).slice(-2);
        let day = ('0' + (date.getDate())).slice(-2);
        let result = format.replace('yyyy', year).replace('MM', month).replace('dd', day);
        return result;
      },
    }
  }
</script>

<style>
</style>