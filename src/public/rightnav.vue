<template>
  <div class="right_nav">
    <div class="nav_conten">
      <div class="char_img">
        <img src="/static/assets/home/daohang/index_cart_fix.png" alt />
        <div class="box_Nnb">
          <div class="left_box"></div>
          <div class="center_box">{{Nub}}</div>
          <div class="right_box"></div>
        </div>
      </div>
      <div class="Collect">
        <img src="/static/assets/home/daohang/index_favourite_right.png" alt />
      </div>
      <div class="Service">
        <img src="/static/assets/home/daohang/index_fix_right_kefu.png" alt />
      </div>
      <div class="bott_conten">
        <div class="ewm_img" v-show="xsdt">
          <img src="/static/assets/home/daohang/erweima.jpg" alt />
        </div>
        <div class="ewm" @mouseenter="onMouseOver" @mouseleave="onMouseout">
          <img src="/static/assets/home/daohang/index_fix_erweima.png" alt />
        </div>
        <div class="zd">
          <img src="/static/assets/home/daohang/top.png" alt />
        </div>
        <div class="pl">
          <img src="/static/assets/home/daohang/yonghufankui.png" alt />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Nub: 0,
      xsdt:false
    };
  },
  methods:{
    onMouseOver(){
      this.xsdt=true
    },
    onMouseout(){
      this.xsdt=false
    }

  }
};
</script>
<style lang='scss' scoped>
.right_nav {
  position: fixed;
  z-index: 20;
  top: 0px;
  right: 0px;
  height: 100%;
  background-color: #000;
  color: #fff;
  z-index: 999;
  .nav_conten {
    position: relative;
    padding-top: 127px;
    width: 40px;
    float: left;
    .char_img {
      width: 100%;
      font-size: 14px;
      text-align: center;
      padding: 10px 0px;
      background: url(/static/assets/home/daohang/index_fix_bottom.png)
        no-repeat scroll bottom center;
      .box_Nnb {
        width: 32px;
        height: 16px;
        background: white;
        border-radius: 10px;
        overflow: hidden;
        display: flex;
        margin: 0 auto;
        .left_box,
        .right_box {
          width: 8px;
          height: 16px;
          background: red;
        }
        .center_box {
          width: 16px;
          height: 16px;
          background: red;
          text-align: center;
        }
      }
    }
    .Collect,
    .Service {
      text-align: center;
      padding: 10px 0px;
      background: url(/static/assets/home/daohang/index_fix_bottom.png)
        no-repeat scroll bottom center;
    }
    .bott_conten {
      margin-top: 153.5px;
      position: relative;
      .ewm,
      .zd,
      .pl {
        padding: 10px 0;
        // width: 40px;
        margin: 0 auto;
        text-align: center;
        &:hover {
          background: cyan;
        }
      }
      .ewm_img {
        background: url(/static/assets/home/daohang/erweima_bak.png) scroll 5px
          center no-repeat;
        // display: none;
        width: 165px;
        height: 165px;
        text-align: center;
        position: absolute;
        right: 40px;
        top: -123px;
        img {
          width: 140px;
          height: 140px;
          vertical-align: middle;
          margin: 13px 0px 0px 7px;
        }
      }
    }
  }
}
</style>