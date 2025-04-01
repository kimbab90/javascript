<template>
  <div>
    <input type="number" v-model.lazy="grade">
    <p v-if="grade >= 90">A</p>
    <p v-else-if="grade >= 80">B</p>
    <p v-else-if="grade >= 70">C</p>
    <p v-else>D</p>
    <hr>
    <input type="checkbox" v-model="chData1">동의여부1
    <input type="checkbox" v-model="chData2">동의여부2
    <br>
    <button v-show="chData3">다음 단계로 진행</button>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        grade: 0,
        chData1: false,
        chData2: false,
      }
    },
    computed : {
      chData3() {
        return this.chData1 && this.chData2
      }
    }
  }
</script>
<style scoped>
</style>