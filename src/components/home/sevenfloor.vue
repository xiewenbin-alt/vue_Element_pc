<template>
  <div class="seven_floor">
    <floorName :temps="temps" />
    <div class="sevent_top">
      <div class="sevent_top_img">
        <a href="javascript:">
          <img src="/static/assets/home/sevenfloor/7.1.jpg" alt />
        </a>
      </div>
      <div class="sevent_top_ul">
        <ul class="sevent_top_uls">
          <goodinfo :infos="infos" />
        </ul>
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
        name: "四季",
        Engname: "SEASON UPDATES",
        temp: ["寒冷", "雾霾", "干燥", "潮湿", "炎热"]
      },
      infos: [
        {
          img: "/static/assets/home/sevenfloor/7.2.jpg",
          name:
            "美的（Midea）落地扇FS40-18G(黑色)",
          info: "● 强劲风力，即刻劲爽",
          price: "299.00"
        },
        {
          img: "/static/assets/home/sevenfloor/7.3.jpg",
          name:
            "松下（Panasonic）空气消毒机 雾霾空气净化器 除甲醛空气净化器 F-VJL75C",
          info: "● 4重感应(异味+灰尘+亮度+湿度)",
          price: "3699.00"
        },
        {
          img: "/static/assets/home/sevenfloor/7.4.jpg",
          name:
            "美的（Midea）冷风扇 AC120-15C（白色）",
          info: "● 3档风速，7小时定时",
          price: "899.00"
        },
        {
          img: "/static/assets/home/sevenfloor/7.5.jpg",
          name:
            "飞利浦（Philips）空气净化器 APP智能控制 AC6675/00(香槟金)",
          info: "● 99.9%去除微米颗粒物",
          price: "5899.00"
        },
        {
          img: "/static/assets/home/sevenfloor/7.6.jpg",
          name:
            "美的（Midea）落地扇FS40-18G(黑色)",
          info: "● 强劲风力，即刻劲爽",
          price: "248.00"
        },
        {
          img: "/static/assets/home/sevenfloor/7.7.jpg",
          name:"科沃斯（ECOVACS）机器人吸尘器 T5 Hero DX96（黑色）",
          info: "● 蓝鲸清洁系统2.0",
          price: "3199.00"
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
<style lang="scss" scope>
.seven_floor {
  overflow: hidden;
  .sevent_top {
    overflow: hidden;
    width: 1200px;
    margin: 0 auto;
    .sevent_top_img {
      float: left;
      margin-right: 10px;
      img {
        width: 590px;
        height: 348px;
      }
    }
    .sevent_top_ul {
      ul {
        white-space: 5px;
        list-style: none;
        li {
          float: left;
          width: 280px;
          height: 338px;
          background: white;
          text-align: center;
          padding: 5px;
          padding-bottom: 5px;
          margin-right: 10px;
          .sp_info {
            img {
              width: 215px;
              height: 215px;
              padding-top: 20px;
              // margin-bottom: 10px;
            }
            .img_text {
              display: block;
              h4 {
                font-size: 14px;
                height: 39px;
                line-height: 20px;
                text-align: left;
              }

              p {
                text-align: left;
                height: 15px;
                line-height: 15px;
                font-size: 14px;
                overflow: hidden;
                color: gray;
                margin-top: 5px;
                margin-bottom: 10px;
              }

              .price {
                text-align: left;
                font-size: 14px;
                color: red;
                margin-top: 10px;
                padding-bottom: 8px;
              }
            }
            .wsad {
              display: none;
              position: absolute;
              width: 270px;
              height: 90px;
              background: white;
              // border: 1px solid black;

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
                height: 30px;
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
      }
    }
  }
}
</style>