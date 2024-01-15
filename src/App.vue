<script>
import Project from './components/Projects.vue';
import axios from 'axios';
import { store } from '/store.js';
export default {
  components: {
    Project,
  },
  data() {
    return {
    }
  }
}
</script>

<template>
  <div class="container">
    <h1>Vue+ Laravel</h1>
    <Project />
  </div>
</template>

<style lang="scss">
@use './style.scss';
</style>
