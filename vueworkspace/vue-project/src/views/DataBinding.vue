<template>
  <div>
    <h1>{{ title }}</h1>

    <h2 v-text="title" id="home"></h2>

    <p v-html="tagList"></p>
    <p v-bind:name="tagName" v-text="tagList"></p> 
    <hr>
    <input type="text" v-model="valueModel">
    <p>{{ valueModel + 1000 }}, {{ typeof valueModel }}</p>
    <input type="number" v-model.lazy="numberModel">
    <p>{{ numberModel + 1000 }}, {{ typeof numberModel }}</p>
    <textarea v-model="textModel"></textarea>
    <p>{{ textModel + 1000 }}, {{ typeof textModel }}</p>
    <select v-model="selectModel">
      <option value="Spring">봄</option>
      <option value="Summer">여름</option>
      <option value="Fall">가을</option>
      <option value="Winter">겨울</option>
    </select>
    <p>{{ selectModel + 1000 }}, {{ typeof selectModel }}</p>
    <hr>
    <input type="checkbox" v-model="chData" true-value="찬" false-value="반">
    <p>{{ chData }}</p>
    <div>
    <input type="checkbox" v-model="city" value="Seoul">서울
    <input type="checkbox" v-model="city" value="Busan">부산
    <input type="checkbox" v-model="city" value="Daegu">대구
    <p>{{ city }}</p>
    <input type="radio" v-model="hobby" value="Reading">독서
    <input type="radio" v-model="hobby" value="Cooking">요리
    <input type="radio" v-model="hobby" value="Fitness">헬스
    <p>{{ hobby }}</p>
    </div>
    <img v-bind:style="styleData" v-bind:src="imgUrl">
    <div class="container" v-bind:class="myClass">
      Class Binding
    </div>
    <div class="container" v-bind:class="{'active': isActive, 'text-red': hasError}">
      Class Binding
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Hello, Vue.js!',
        tagList: '<strong>Today is...</strong>',
        tagName: 'bindTest',
        valueModel: 'Korea',
        numberModel: '1000',
        textModel: 'Hello',
        selectModel: 'Summer',
        chData: '',
        city: [],
        hobby: '',
        styleData: {
          width : '200px',
          backgroundColor: 'skyblue',
        },
        backSetting: 'background-color: skyblue; witdh:200px;',
        imgUrl: 'https://kr.vuejs.org/images/logo.png',
        isActive: false,
        // hasError: !this.isActive,
        myClass: 'active'
      }
    },
    computed: {
      hasError : function() {
        return !this.isActive;
      }
    }
  }
</script>

<style scoped>
  .text-red {
    color: red;
  }
  .container {
    width: 100%;
    height: 200px;
  }
  .active {
    background-color: aquamarine;
    font-weight: bold;
  }
</style>