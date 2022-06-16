<template>
  <div class="app__container">
    <LNB />
    <div class="app__page">
      <RouterView />
    </div>
  </div>
</template>

<script>
import LNB from '~/components/LNB.vue'

export default {
  components: {
    LNB
  }
}
</script>

<style scoped lang="scss">
// #app {
  // font-family: Avenir, Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
// }
.app {
  &__container {
    display: flex;
    height: 100vh;
    box-sizing: border-box;
  }
  &__page {
    flex-grow: 1;
    box-sizing: border-box; 
  }
}
</style>
