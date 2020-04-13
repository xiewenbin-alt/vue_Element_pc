<template>
  <div id="app">
    <heads/>
    <router-view/>
  <foot/>
  </div>
</template>
<script>
import heads from './public/heads'
import foot from './public/footer'

export default {
  name:'app',
  components:{
    heads,
    foot
  }

}
</script>
<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  padding: 0;
  ul{
    list-style: none;
  }
}
</style>
