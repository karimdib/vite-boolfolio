<script>
import Header from './pages/Header.vue';
export default {
  components: {
    Header,
  },
  data() {
    return {
      title: 'Vue + Laravel'
    }
  }
}
</script>

<template>
  <div class="container">
    <h1>{{ title }}</h1>
    <Header />
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@use './style.scss';
</style>
