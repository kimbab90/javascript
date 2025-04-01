
<template>
  <ModalView>
    <template v-slot:header>
      <h1>안녕</h1>
    </template>
    <template v-slot:default>
      <p>반가워</p>
    </template>
    <template v-slot:footer>
      <button type="button">내일 봐</button>
    </template>
  </ModalView>
</template>

<script>
import ModalView from './ModalView.vue';

export default {
  components: {
    ModalView,
  }
}
</script>