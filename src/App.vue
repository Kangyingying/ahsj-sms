<template>
  <Navigation></Navigation>
  <router-view/>
</template>

<script>
import {Options, Vue} from 'vue-class-component';
import Navigation from '@/components/Navigation/Navigation.vue'

  @Options({
    components:{
      Navigation
    }
  })
  export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  overflow: scroll;
}
</style>
