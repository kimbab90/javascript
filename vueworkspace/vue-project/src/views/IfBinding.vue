<template>
  <div>
    <input type="number" v-model.lazy="grade">
    <p v-if="grade >= 90">A</p>
    <p v-else-if="grade >= 80">B</p>
    <p v-else-if="grade >= 70">C</p>
    <p v-else>D</p>
    <hr>
    <input type="checkbox" v-model="chData">동의여부
    <br>
    <button v-show="chData">다음 단계로 진행</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        grade: 0,
        chData: false,
      }
    }
  }
</script>
<style scoped>
</style>