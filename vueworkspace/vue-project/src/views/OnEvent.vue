<template>
<div>
  <input type="text" v-model="msg" v-on:keyup.alt.enter="clear()" placeholder="내용없음">
  <p>{{ msg }}</p>
  <hr>
  <form v-on:click.self="click($event)">
    Form
    <div v-on:click.once="click($event)">
      Div
      <p @click.stop="click($event)">
        P
        <a @click.prevent="click($event)" href="http://www.naver.com">네이버</a>
      </p>
    </div>
  </form>
  <hr>
  <button @click="increaseCounter">Add 1</button>
  <br>
  <button @click="setCount(num, $event)">Add {{ num }}</button>
  <p>The Counter : {{ counter }}</p>
</div>
</template>

<script>
  export default {
    data() {
      return {
        msg: '내용있음',
        num: 7,
        counter: 0
      }
    },
    computed: {

    },
    methods: {
      clear() {
        this.msg = '';
      },
      click(event) {
        console.log(event.currentTarget);
      },
      increaseCounter(event) {
        this.counter++;
      },
      setCount(num, event) {
        this.counter += num;
      }
    },
    watch: {

    }
  }
</script>

<style scoped>
  form, form * {
    margin: 10px;
    border: 1px solid salmon; 
  }
</style>