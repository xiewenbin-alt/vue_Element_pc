<template>
    <div class="goodinfo" @mouseenter="onMouseOver" @mouseleave="onMouseout">
      <div class="pro_newgoods">
        <p class="newgoods" v-if="item.new">{{item.new}}</p>
        <p class="SZP" v-if="item.szp">{{item.szp}}</p>
        <p class="reduceprice" v-if="item.jj">{{item.jj}}</p>
      </div>
      <div class="new_main_bodybanner">
        <a href="javascript:">
          <img :src="item.img" />
        </a>
        <div class="img_text">
          <h4>{{item.name}}</h4>
          <p>{{item.info}}</p>
          <div class="price">￥{{item.price}}</div>
        </div>
        <div class="wsad" v-show="seen">
          <div class="price">{{item.price}}</div>
          <div class="jrgwz" @click.stop="cats(item)">
            <a href="javascript:">加入购物车</a>
          </div>
        </div>
      </div>
    </div>
</template>


<script>
export default {
  data() {
    return {
      seen: false
    };
  },
  props: ["item"],
 methods:{
    onMouseOver(){
        this.seen=true;
    },
    onMouseout(){
        this.seen=false;
        
    },
    cats(item){
      console.log(item)
    }
  }
};
</script>

<style lang="scss" scoped>
.goodinfo {
  position: relative;
  .pro_newgoods {
    position: relative;
    width: 50px;
    top: 0px;
    // left: 15px;
    z-index: 1;
    font-size: 12px;
    cursor: pointer;
    top: -20px;
    .newgoods {
      // position: absolute;
      background-color: #00bbd7;
      width: 50px;
      height: 21px;
      border: 5px;
      color: #fff;
      text-align: center;
      line-height: 21px;
      margin-bottom: 5px;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      -o-border-radius: 3px;
      -ms-border-radius: 3px;
      border-radius: 3px;
    }
    .SZP {
      // position: absolute;
      background-color: rgb(240, 177, 110);
      width: 50px;
      height: 21px;
      border: 5px;
      color: #fff;
      text-align: center;
      line-height: 21px;
      margin-bottom: 5px;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      -o-border-radius: 3px;
      -ms-border-radius: 3px;
      border-radius: 3px;
      // top: 5px;
      // left: -15px;
    }
    .reduceprice {
      // position: absolute;
      background-color: #00bbd7;
      width: 50px;
      height: 21px;
      border: 5px;
      color: #fff;
      text-align: center;
      line-height: 21px;
      margin-bottom: 5px;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      -o-border-radius: 3px;
      -ms-border-radius: 3px;
      border-radius: 3px;
      // top: 30px;
      // left: -15px;
    }
  }
  .new_main_bodybanner {
    width: 270px;
    position: absolute;
    top: 0;
    left: 10px;
    a {
      display: block;
      text-decoration: none;
      img {
        width: 215px;
        height: 215px;
        margin-bottom: 10px;
      }
    }
    .img_text {
      // display: none;
      a {
        font-size: 14px;
        color: #fff;
        clear: both;
      }

      h4 {
        font-size: 14px;
        color: #313131;
        font-weight: 400;
        line-height: 21px;
        text-align: left;
        height: 39px;
        overflow: hidden;
      }

      p {
        text-align: left;
        font-size: 14px;
        color: #aeaeae;
        margin-top: 15px;
        /* margin-bottom: 10px; */
        height: 15px;
        line-height: 15px;
        overflow: hidden;
      }

      .price {
        color: #fc3538;
        font-size: 14px;
        line-height: 20px;
        text-align: left;
        font-weight: 600;
        margin-top: 10px;
      }
    }
    .wsad {
      position: absolute;
      width: 270px;
      background: white;
      bottom: 0;
      height: 100px;

      .price {
        color: #fc3538;
        font-size: 14px;
        line-height: 20px;
        text-align: left;
        font-weight: 600;
        margin-top: 15px;
        // margin: 0 auto;
        margin-left: 99px;
      }
      .jrgwz {
        width: 200px;
        // height: 30px;
        background: #00bbd7;
        text-align: center;
        line-height: 30px;
        font-size: 15px;
        margin: 0 auto;
        margin-top: 12px;
        a {
          text-decoration: none;
          color: white;
        }
      }
    }
  }
}
</style>