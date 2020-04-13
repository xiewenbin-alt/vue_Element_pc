<template>
  <div class="home">
    <!-- <heads/> -->
    <div class="backgroun">
    <swiper/>
    <onefloor/>
    <twofloor/>
    <streefloor/>
    <fourfloor/>
    <fivefloor/>
    <sexfloor/>
    <sevenfloor/>
    <eightfloor/>
    <leftnav/>
    <rightnav/>
    </div>
   <!-- <foot/> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import heads from '../public/heads'
// import foot from '../public/footer'
import swiper from '../components/home/swiperone'
import onefloor from '../components/home/onefloor'
import twofloor from '../components/home/twofloor'
import streefloor from '../components/home/streefloor'
import fourfloor from '../components/home/fourfloor'
import fivefloor from '../components/home/fivefloor'
import sexfloor from '../components/home/sixfloor'
import sevenfloor from '../components/home/sevenfloor'
import eightfloor from '../components/home/eightfloor'
import leftnav from "../public/leftnav";
import rightnav from "../public/rightnav";



export default {
  name: 'home',
  components: {
    // heads,
    swiper,
    // foot,
    onefloor,
    twofloor,
    streefloor,
    fourfloor,
    fivefloor,
    sexfloor,
    sevenfloor,
    eightfloor,
    leftnav,
    rightnav
  }
}
</script>
<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
 .backgroun{
       background-color: #f3f3f3;
 }
}
</style>

