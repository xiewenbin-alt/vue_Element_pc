<template>
  <div class="five_floor">
    <floorName :temps="temps" />
    <fivefloor :imgs="imgs"/>
  </div>
</template>
<script>
import floorName from "../../public/floor";
import fivefloor from "../../public/sff_floor";

export default {
      data() {
    return {
      temps: {
        name: "家",
        Engname: "QUALITY LIFE",
        temp: ["客厅", "卧室", "卫生间","厨房","书房", "Mode+"]
      },
      imgs:{
        img01:'/static/assets/home/fivefloor/5.1.jpg',
        img02:'/static/assets/home/fivefloor/5.5.jpg',
        img03:'/static/assets/home/fivefloor/5.6.jpg',
        img04:'/static/assets/home/fivefloor/5.2.jpg',
        img05:'/static/assets/home/fivefloor/5.3.jpg',
        img06:'/static/assets/home/fivefloor/5.4.jpg',
        img07:'/static/assets/home/fivefloor/5.7.jpg',
        img08:'/static/assets/home/fivefloor/5.8.jpg',
        img09:'/static/assets/home/fivefloor/5.9.jpg',
      }
    };
  },
  components: {
    floorName,
    fivefloor
  },

};
</script>

<style lang="scss" scoped>
</style>