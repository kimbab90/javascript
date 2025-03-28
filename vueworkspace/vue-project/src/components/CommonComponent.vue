<template>
  <p>{{ year }} 년 {{ month }} 월 {{ day }} 일</p>
  <p>다음해 {{ afterYear }}</p>
</template>
<script>
export default {
  data() {
    let today = new Date();
    return {
      year: today.getFullYear(),
      month: today.getMonth() + 1,
      day: today.getDate(),
    }
  },
  computed: {
    afterYear() {
      return this.year + 1;
    },
  },
  methods: {

  },
  watch: {
    month() {
      if ((this.month.toString()).length == 1 && this.month < 10) {
        this.month = '0' + this.month;
      }
    }
  }
}
</script>
<style scoped>

</style>