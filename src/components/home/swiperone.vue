<template>
  <swiper class="swiper" :options="swiperOption"  ref="mySwiper">
    <swiper-slide v-for="item in info" :key="item.id">
      <img :src="item.img" alt="">
    </swiper-slide>
    <div class="swiper-pagination swiper-pagination-white" slot="pagination"></div>
    <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
    <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
  </swiper>
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import 'swiper/dist/css/swiper.css'
  export default {
    name: 'swiper-example-fade-effect',
    title: 'Fade effect',
   
    data() {
      return {
        info:[
          { img: "static/assets/home/lunbo/lp1.jpg" },
          { img: "static/assets/home/lunbo/lp2.jpg" },
          { img: "static/assets/home/lunbo/lp3.jpg" },
          { img: "static/assets/home/lunbo/lp4.jpg" },
          { img: "static/assets/home/lunbo/lp5.jpg" },
          { img: "static/assets/home/lunbo/lp6.jpg" },
          { img: "static/assets/home/lunbo/lp7.jpg" },
        ],
        
        swiperOption: {
          autoplay:true,
          loop:true,
          spaceBetween: 30,
          effect: 'fade',
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            // bulletActiveClass: 'my-bullet-active',
            //  bulletClass : 'my-bullet',
        //      renderBullet: function (index, className) {
        //   return '<span class="' + className + '">' + (index + 1) + '</span>';
        // },
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
        },
          // mounted() {
          //   console.log('this is current swiper instance object', this.swiper);
          // }
      }
    },
     components: {
             swiper, 
            swiperSlide
        }, 
        // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
        console.log(mySwiper)
      }
    },
    mounted() {
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      // console.log('this is current swiper instance object', this.swiper);
      // this.swiper.slideTo(3, 1000, false)
      // console.log('mounted');
      //鼠标覆盖停止自动切换
      this.swiper.el.onmouseover = function () {
        this.swiper.autoplay.stop();
        console.log(this.swiper.navigation.$nextEl)
        this.swiper.navigation.$nextEl.removeClass('hide');
        this.swiper.navigation.$prevEl.removeClass('hide');
        // console.log('stop');
      }
      //鼠标离开开始自动切换
      this.swiper.el.onmouseout = function () {
        this.swiper.autoplay.start();
        this.swiper.navigation.$nextEl.addClass('hide');
        this.swiper.navigation.$prevEl.addClass('hide');
        // console.log('start');
      }

    }
  }
</script>

<style lang="scss" scoped>
  // @import './base.scss';
  .swiper {
    height: 380px;
    .swiper-slide {
      background-position: center;
      background-size: cover;     
    }
    .swiper-button-prev{
        background-image: url(/static/assets/home/lunbo/left.png) !important;

      }
      .swiper-button-next{
        right: 50px !important;
        background-image: url(/static/assets/home/lunbo/right.png) !important;

      }
      .hide{
  // display: none!important;
  opacity:0;
}
.swiper-button-next,.swiper-button-prev{
  transition:opacity 0.5s  !important;

}
// .my-bullet-active{
//   background: #00bbd7;
//   opacity: 1;
// }


         
  }
</style>