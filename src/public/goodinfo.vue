<template>
  <div>
    <li v-for="item in infoss" :key="item.id" @click="info_page(item)">
       <hehe :item = "item"/>
    </li>
  </div>
</template>
<script>
import hehe from "./hehe"
export default {
  data() {
    return {
      infoss: [],
      abc: {},
      seen:false,
    };
  },
  props: {
    infos: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  components: {
    hehe
  },
  mounted() {
    console.log(this.infos);
    this.infoss = this.infos;
  },
  methods:{
    info_page(item){
        console.log(item)
    }
  }
  
};
</script>
<style lang="scss" scoped>
  li {
  width: 290px;
  height: 350px;
  background-color: #fff;
  padding-top: 20px;
  float: left;
  margin-right: 13px;
  text-align: center;
  margin-bottom: 15px;
  }
</style>
