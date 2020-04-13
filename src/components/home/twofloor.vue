<template>
  <div class="two_floor">
    <floorName :temps="temps" />
    <div class="two_storey">
      <div class="top_good">
        <ul>
          <goodinfo :infos="infos" />
        </ul>
      </div>
      <div class="bott_img">
          <img src="/static/assets/home/twofloor/05.jpg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import floorName from "../../public/floor";
import goodinfo from "../../public/goodinfo";
export default {
  data() {
    return {
      temps: {
        name: "新品",
        Engname: "NEW",
        temp: ["家庭智能音响", "飞利浦多士炉", "新品专区", "Mode+"]
      },
      infos: [
        {
          new:'新品',
          img: "/static/assets/home/twofloor/2.1.jpg",
          name:"产地韩国 进口惠人（HUROM）原汁机HU24FR3L（法拉利红）",
          info: "● 双转速双动力，细腻研磨",
          price: "2798.00"
        },
        {
          new:'新品',
          szp:'送赠品',
          img: "/static/assets/home/twofloor/2.2.jpg",
          name:"荣耀（Honor）20i 4G+128GB全网通3200万AI自拍 超广角三摄娱乐手机 HRY-AL00Ta",
          info: "● 可领取100元优惠券（黑色），有效期2019/8/15",
          price: "1399.00"
        },
        {
          new:'新品',
          jj:'减价',
          szp:'送赠品',
          img: "/static/assets/home/twofloor/2.3.jpg",
          name:"【预订】产地马来西亚 进口索尼（SONY）真无线蓝牙降噪耳机 WF-1000XM3（黑色）",
          info: "● 触控面板，多样功能一指掌控",
          price: "1699.00"
        },
        {
          szp:'送赠品',
          jj:"减价",
          img: "/static/assets/home/twofloor/2.4.jpg",
          name:"格莱美（Gramovox）竖立式蓝牙黑胶播放机 FLOATING RECORD PLAYER（胡桃木色）",
          info: "● 碳纤维唱臂，不易变形，保护唱片",
          price: "3999.00"
        }
      ]
    };
  },
  components: {
    floorName,
    goodinfo
  }
};
</script>

<style lang="scss" scoped>
.two_floor {
  width: 1225px;
  margin: 0 auto;
  margin-bottom: 20px;
  .two_storey {
    overflow: hidden;
    width: 1200px;
    margin: 10px auto 0px auto;
    ul {
      width: 1225px;
      list-style: none;
      overflow: hidden;
    }
  }
}
</style>