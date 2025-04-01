<template>
  <div>
    <input type="number" v-model="content">
    <p>{{ content }}</p>
    <button ref="btn" @click="plusCount">더하기</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        content: '',
      }
    },
    mounted() {
      // console.log(this.$refs.btn);
      // this.$refs.btn.click();
    },
    methods: {
      plusCount() {
        if ((typeof this.content) == 'number') {
          let sum = this.content + 100;
          this.content = sum;
        } else {
          alert('Invalid data type : not a number');
        }
      }
    }
  }
</script>
<style scoped></style>
