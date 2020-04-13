<template>
  <div class="First_floor">
    <floorName :temps="temps" />
      <div class="one_storey_sp">
        <ul class="one_storey_sp_uls">
              <goodinfo :infos="infos"/>
        </ul>
      </div>
  </div>
</template>
<script>
import floorName from "../../public/floor";
import goodinfo from "../../public/goodinfo";
export default {
  components: {
    floorName,
    goodinfo
  },
  data() {
    return {
    temps: {
        name: "推荐",
        Engname: "RECOMMEND",
        temp: ["高品质手机", "航拍器", "美的专区", "洗碗机", "全球购", "Mode+"]
      },
      infos:[
          {
              szp:'送赠品',
              jj:'减价',
              img:"/static/assets/home/onefloor/1.1.jpg",
              name:"【新品】华为（HUAWEI）MateBook X Pro 13.9英寸笔记本电脑（i5-8265U 8G 512GBMX250）MACHR-W19",
              info:"● 3K分辨率，100% sRGB触摸屏",
              price:"8999.00",
              
          },
        {
              new:"新品",
              jj:'减价',
              img:'/static/assets/home/onefloor/1.2.jpg',
              name:'松下（Panasonic）618升 一级能效法式四门冰箱 NR-W621TG-XN（雅致金）',
              info:'● 领券每满5000-500，截止时间2019年8月22日',
              price:'170990.00'            
        },
        {
             new:"新品",
              img:'/static/assets/home/onefloor/1.3.jpg',
              name:'九阳（Joyoung）无人豆浆机DJ10R-K1（咖色）',
              info:'● 智能预约功能',
              price:'19990.00'            
        },
        {
             new:"新品",
             szp:'送赠品',
              img:'/static/assets/home/onefloor/1.4.jpg',
              name:'产地马来西亚 进口戴森（Dyson）吹风机HD03（紫红色）【下单赠原装皮盒】',
              info:'● 负离子技术',
              price:'2990.00'            
        },
        {
             new:"新品",
             szp:'送赠品',
              img:'/static/assets/home/onefloor/1.5.jpg',
              name:'华硕（ASUS）飞行堡垒7 15.6英寸笔记本电脑（ I7-9750H 8GB 512SSD）黑色',
              info:'● 酷睿i7九代处理器',
              price:'6990.00'            
        },
        {
             new:"新品",
            
              img:'/static/assets/home/onefloor/1.6.jpg',
              name:'微软（Microsoft）Surface Pro6 12.3英寸二合一平板电脑（i5-8250U 8G 128GB）亮铂金 LGP-00016',
              info:'● PixelSense显示屏，分辨率2736x1824',
              price:'6199.00'            
        },
        {
              new:"新品",
              szp:'送赠品',
             
              img:'/static/assets/home/onefloor/1.7.jpg',
              name:'Apple iPhone XR 128GB',
              info:'● 可领取60元优惠券 ，有效期2019/8/15',
              price:'￥5299.00'            
        },
        {
              
              szp:'送赠品',
              jj:'减价',
              img:'/static/assets/home/onefloor/1.8.jpg',
              name:'【新品预订】华为（HUAWEI） Mate20 X (5G) 8GB+256GB 7nm工艺5G 旗舰芯片 全面屏 超大广角徕卡三摄双模全网通手机【一个ID限购一台，下单请备注好型号和颜色】',
              info:'● 订金：200元',
              price:'￥200.00'            
        },
      ]
    };
  }
};
</script>
<style lang="scss" scoped>
.First_floor {
  width: 1225px;
  margin: 0 auto;
    .one_storey_sp {
      overflow: hidden;
      width: 1200px;
      margin: 10px auto 0px auto; 
      .one_storey_sp_uls {
        width: 1225px;
        list-style: none;
        overflow: hidden;
      }
    }
  
}
</style>
