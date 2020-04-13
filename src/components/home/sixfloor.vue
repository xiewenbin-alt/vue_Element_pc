<template>
  <div class="sex_floor">
    <floorName :temps="temps" />
    <div class="six_storey_top">
      <div class="top_left">
        <div class="left_top">
          <img src="/static/assets/home/sexfloor/6.1.jpg" alt />
        </div>
        <div class="left_bott">
          <img src="/static/assets/home/sexfloor/6.3.jpg" alt />
        </div>
      </div>
      <div class="top_right">
        <div class="right_top">
          <img src="/static/assets/home/sexfloor/6.2.jpg" alt />
        </div>
        <div class="right_bott">
          <img src="/static/assets/home/sexfloor/6.4.jpg" alt />
        </div>
      </div>
      <div class="six_storey_bott">
        <img src="/static/assets/home/sexfloor/6.5.jpg" alt />
      </div>
    </div>
  </div>
</template>
<script>
import floorName from "../../public/floor";
export default {
  data() {
    return {
      temps: {
        name: "味",
        Engname: "DELICIOUS FOOD",
        temp: ["早餐", "健康瘦身", "下午茶", "Mode+"]
      }
    };
  },
  components: {
    floorName
  }
};
</script>

<style lang="scss" scoped>
.sex_floor {
  width: 1200px;
    margin:  0 auto;
  .six_storey_top {
    margin-bottom: 10px;
    .top_left {
      float: left;

      .left_top {
        margin-bottom: 10px;
      }
    }

    .top_right {
      float: right;

      .right_top {
        margin-bottom: 10px;
      }
    }
    .six_storey_bott {
      img {
        margin-top: 10px;
      }
    }
  }
}
</style>