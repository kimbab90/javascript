<template>
  <div>
    <input type="number" v-model="price">
    <br>
    <input type="number" v-model="count">
    <p>
      과세금액 : {{ amount }}
    </p>
    <p>
      부가세 : {{ tax }}
    </p>
    <p>
      결제금액 : {{ total.toLocaleString() }}
    </p>
    <p :class="{'warn' : isShow}">결제금액이 5만원을 초과했습니다</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        price : 100,
        count : 5,
        isShow : true
      }
    },
    computed : {
      amount() {
        return this.price * this.count;
      },
      tax() {
        return this.amount * 0.1;
      },
      total() {
        return this.amount + this.tax;
      }
    },
    watch: {
      total() {
        if (this.total > 50000) {
          this.isShow = false;
        } else {
          this.isShow = true;
        }
      }
    }
  }
</script>

<style scoped>
  .warn {
    display: none;
  }
</style>