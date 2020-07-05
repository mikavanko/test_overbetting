<template>
  <div id="app">
    <Header />
    <Banner />
    <About />
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import About from '@/components/About.vue'

export default {
  name: 'App',
  components: {
    Header,
    Banner,
    About
  }
}
</script>

<style lang="scss">
@import 'styles/styles';
</style>
