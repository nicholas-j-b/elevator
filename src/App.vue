<template>
  <div id="app">
    <Page></Page>
  </div>
</template>

<script>
import Page from './view/components/layout/Page.vue'

export default {
  name: 'app',
  components: {
    Page
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  height: 100%;
}
</style>
