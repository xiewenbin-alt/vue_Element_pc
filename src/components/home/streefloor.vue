<template>
  <div class="stree_floor">
    <floorName :temps="temps" />
    <streefloor :imgs="imgs"/>
  </div>
</template>
<script>
import floorName from "../../public/floor";
import streefloor from "../../public/sff_floor";

export default {
      data() {
    return {
      temps: {
        name: "发现",
        Engname: "DISCOVERY",
        temp: ["办公用品", "取暖器", "慢味生活", "Mode+"]
      },
      imgs:{
        img01:'/static/assets/home/streefloor/3.1.jpg',
        img02:'/static/assets/home/streefloor/3.5.jpg',
        img03:'/static/assets/home/streefloor/3.6.jpg',
        img04:'/static/assets/home/streefloor/3.2.jpg',
        img05:'/static/assets/home/streefloor/3.3.jpg',
        img06:'/static/assets/home/streefloor/3.4.jpg',
        img07:'/static/assets/home/streefloor/3.7.jpg',
        img08:'/static/assets/home/streefloor/3.8.jpg',
        img09:'/static/assets/home/streefloor/3.9.jpg',
      }
    };
  },
  components: {
    floorName,
    streefloor
  },

};
</script>

<style lang="scss" scoped>
</style>