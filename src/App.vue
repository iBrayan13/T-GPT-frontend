<template>
  <NavBar />
  <router-view/>
</template>

<script>
import NavBar from './components/NavBar.vue';

export default {
  name: "App",
  components: {
    NavBar
  }
}
</script>

<style lang="sass">
body
  @include reset-pm()
  font-family: $font-family
</style>