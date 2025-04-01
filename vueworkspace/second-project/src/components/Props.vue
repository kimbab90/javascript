<template>
  <div>
    <PageTitle title="First"/>
    <hr>
    <PageContent v-bind:title="header" v-bind:count="(5 + 10)" v-bind:writer="['Edward']" :regdate="20250331" :content="{first: 'Node.js', second: 'Vue.js'}"/>
    <hr>
    <PageContent v-bind="info" @update-info="handler"/>
    <hr>
    <Ref ref="child"/>
    <label>부모데이터 : 
      <input type="number" v-model="num">
    </label>
    <button @click="childHandler">자식제어</button>
  </div>
</template>
<script>
  import PageTitle from './PageTitle.vue';
  import PageContent from './PageContent.vue';
  import Ref from './Ref.vue';
  
  export default {
    data() {
      return {
        header: '게시글 조회',
        info: {
          title: 'Today is',
          count: 5,
          writer: 'Edward',
          regdate: '2025-04-01',
          content: 'No content'
        },
        num: 0
      }
    },
    components: {
      PageTitle, PageContent, Ref
    },
    methods: {
      handler(readInfo) {
        this.info.count = readInfo;
      },
      childHandler() {
        this.$refs.child.plusCount();

        // let ref = this.$refs.child;
        // ref.$refs.btn.click();
      }
    },
    created() {
      console.log('Props created');
    },
    mounted() {
      console.log('Props mounted');
    },
    watch: {
      num() {
        this.$refs.child.content = this.num;
      }
    }
  }
</script>
<style scoped>
</style>