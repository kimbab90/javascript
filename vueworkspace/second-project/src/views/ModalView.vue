<template>
  <div class="modal-container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style scoped>
.modal-container {
  text-align: center;
  max-width: 40em;
  padding: 2em;
  border: 1px solid red;
}
</style>