<template>
  <div class="eight_floor">
    <floorName :temps="temps" />
    <div class="uls">
      <ul>
        <goodinfo :infos="infos" />
      </ul>
    </div>
    <div class="butt">
      <span class="up"></span>
      <span class="down"></span>
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
        name: "特价",
        Engname: "Sales OFF"
        //  temp: []
      },
      infos: [
        {
          img: "/static/assets/home/onefloor/1.1.jpg",
          name:
            "【新品】华为（HUAWEI）MateBook X Pro 13.9英寸笔记本电脑（i5-8265U 8G 512GBMX250）MACHR-W19",
          info: "● 3K分辨率，100% sRGB触摸屏",
          price: "8999.00"
        },
        {
          img: "/static/assets/home/onefloor/1.1.jpg",
          name:
            "【新品】华为（HUAWEI）MateBook X Pro 13.9英寸笔记本电脑（i5-8265U 8G 512GBMX250）MACHR-W19",
          info: "● 3K分辨率，100% sRGB触摸屏",
          price: "8999.00"
        },
        {
          img: "/static/assets/home/onefloor/1.1.jpg",
          name:
            "【新品】华为（HUAWEI）MateBook X Pro 13.9英寸笔记本电脑（i5-8265U 8G 512GBMX250）MACHR-W19",
          info: "● 3K分辨率，100% sRGB触摸屏",
          price: "8999.00"
        },
        {
          img: "/static/assets/home/onefloor/1.2.jpg",
          name:
            "松下（Panasonic）618升 一级能效法式四门冰箱 NR-W621TG-XN（雅致金）",
          info: "● 领券每满5000-500，截止时间2019年8月22日",
          price: "170990.00"
        },
        {
          img: "/static/assets/home/onefloor/1.3.jpg",
          name: "九阳（Joyoung）无人豆浆机DJ10R-K1（咖色）",
          info: "● 智能预约功能",
          price: "19990.00"
        },
        {
          img: "/static/assets/home/onefloor/1.4.jpg",
          name:
            "产地马来西亚 进口戴森（Dyson）吹风机HD03（紫红色）【下单赠原装皮盒】",
          info: "● 负离子技术",
          price: "2990.00"
        },
        {
          img: "/static/assets/home/onefloor/1.4.jpg",
          name:
            "产地马来西亚 进口戴森（Dyson）吹风机HD03（紫红色）【下单赠原装皮盒】",
          info: "● 负离子技术",
          price: "2990.00"
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
<style lang="scss">
.eight_floor {
  width: 1225px;
  margin: 0 auto !important;
  position: relative;
  .uls {
    width: 1200px;
    margin: 10px auto;
    overflow: hidden;
    ul {
      width: 1000%;
      li {
        width: 232px;
        margin-right: 10px;
        .goodinfo {
          width: 100%;
          .new_main_bodybanner {
            width: 100%;
            left: 0;
          }
          .wsad {
            width: 100%;
          }
        }
      }
    }
  }
  .butt {
      position: absolute;
      top: 20px;
      right: 0;
      display: flex;
    .up {
      display: block;
      width: 33px;
      height: 25px;
      background: url(/static/assets/home/eightfloor/index_p.jpg) center
        no-repeat;
        &:hover{
            border: 0.1px solid aqua
        }
    }
    .down {
      display: block;
      width: 33px;
      height: 25px;
      background: url(/static/assets/home/eightfloor/index_n.jpg) center
        no-repeat;
         &:hover{
            border: 0.1px solid aqua
        }
    }
  }
}
</style>