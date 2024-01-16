<script>

export default {
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
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@use './style.scss';
</style>
