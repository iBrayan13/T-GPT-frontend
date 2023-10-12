<template>
  <!--<NavBar />-->
  <router-view/>
  <FooterCom />
</template>

<script>
//import NavBar from './components/NavBar.vue';
import FooterCom from './components/FooterCom.vue';

export default {
  name: "App",
  components: {
    FooterCom,
    //NavBar
  }
}
</script>

<style lang="sass">
body
  @include reset-pm()
  font-family: $font-family
  background: linear-gradient(180deg, $background-terciary-color -50%, $background-primary-color 150%) no-repeat
</style>