<template>
  <div class="index_leftnav" v-if="disBlock">
    <a title="0" class="cl">
      <div class="active">推荐</div>
    </a>
    <a title="1" class="cl">
      <div class>新品</div>
    </a>
    <a title="2" class="cl">
      <div class>发现</div>
    </a>
    <a title="3" class="cl">
      <div class>Man</div>
    </a>
    <a title="4" class="cl">
      <div class>家</div>
    </a>
    <a title="5" class="cl">
      <div class>味</div>
    </a>
    <a title="6" class="cl">
      <div class>四季</div>
    </a>
    <a title="7" class="cl" @click="abc()">
      <div class>特价</div>
    </a>
    <a id="gotop" href="javascript:void(0)" title="回到顶部" >
      <div @click="backTop">
        <img src="/static/assets/home/daohang/index_top.jpg" />
      </div>
    </a>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ScrollTop: 0,
      disBlock: false
    };
  },
  mounted() {
      window.addEventListener('scroll',this.ScrollToTop)
  },
  destroyed() {
      window.addEventListener('scroll',this.ScrollToTop)
  },
  methods: {
    //移动时的缓动
      backTop(){
          let This=this;
          let timer=setInterval(()=>{
              This.scrollTop=document.documentElement.scrollTop||document.body.scrollTop
              let speed=Math.floor(-This.scrollTop /5)
              This.scrollTop+=speed
              document.documentElement.scrollTop=document.body.scrollTop=This.scrollTop
              if(This.scrollTop===0){
                  clearInterval(timer)
                  This.scrollTop=0
              }
          },50)
      },
      //距离多少时显示
      ScrollToTop(){
          let This=this;
          var currentScroll=document.documentElement.scrollTop||document.body.scrollTop;
          if(currentScroll>200){
              This.disBlock=true
          }else{
              This.disBlock=false;
          }
      },
      abc(){
          var curTop = document.body.scrollTop || document.documentElement.scrollTop;
          let abc=document.querySelectorAll('.floor_name')
          let abcY=abc.scrollTop
          console.log(abcY)
      }
  },
  mounted(){
    console.log(123)
  }
};
</script>
<style lang="scss" scoped>
.index_leftnav {
  position: fixed;
  // display: none;
  top: 20%;
  z-index: 99;
  margin-left: 108px;
  a {
    display: block;
    width: 40px;
    height: 40px;
    font-size: 12px;
    text-align: center;
    line-height: 40px;
    background: gray;
    color: white;
    cursor: pointer;
    margin-bottom: 2px;
    &:first-child {
      background: #00bbd7;
    }
    &:hover {
      background: #00bbd7;
    }
  }
}
</style>