<template>
  <div class="four_floor">
    <floorName :temps="temps" />
    <fourfloor :imgs="imgs"/>
  </div>
</template>
<script>
import floorName from "../../public/floor";
import fourfloor from "../../public/sff_floor";

export default {
      data() {
    return {
      temps: {
        name: "Man",
        Engname: "BE A MR FASHION",
        temp: ["时尚先生", "健身达人", "文艺青年","游戏爱好者", "Mode+"]
      },
      imgs:{
        img01:'/static/assets/home/fourfloor/4.1.jpg',
        img02:'/static/assets/home/fourfloor/4.5.jpg',
        img03:'/static/assets/home/fourfloor/4.6.jpg',
        img04:'/static/assets/home/fourfloor/4.2.jpg',
        img05:'/static/assets/home/fourfloor/4.3.jpg',
        img06:'/static/assets/home/fourfloor/4.4.jpg',
        img07:'/static/assets/home/fourfloor/4.7.jpg',
        img08:'/static/assets/home/fourfloor/4.8.jpg',
        img09:'/static/assets/home/fourfloor/4.9.jpg',
      }
    };
  },
  components: {
    floorName,
    fourfloor
  },

};
</script>

<style lang="scss" scoped>
</style>