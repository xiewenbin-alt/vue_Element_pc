<template>
  <div id="swiper">
    <ul :style="active" class="uls">
      <li class="first">
        <img :src="imglist[imglist.length-1].img" alt />
      </li>
      <li v-for="(item,index) in imglist" :key="index">
        <img :src="item.img" alt />
      </li>
      <li class="last">
        <img :src="imglist[0].img" alt/>
      </li>
    </ul>
    <div class="butt">
      <span class="upward" @click="move(1920, 1)"><</span>
      <span class="next" @click="move(1920, -1)">></span>
    </div>
    <ul class="jds">
    <li class="jd" v-for="(dot,i) in imglist" :key="i"
    :class="{dotted: i === (currentIndex-1)}"
    ></li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imglist: [
        { img: "static/assets/home/lunbo/lp1.jpg" },
        { img: "static/assets/home/lunbo/lp2.jpg" },
        { img: "static/assets/home/lunbo/lp3.jpg" },
        { img: "static/assets/home/lunbo/lp4.jpg" },
        { img: "static/assets/home/lunbo/lp5.jpg" },
        { img: "static/assets/home/lunbo/lp6.jpg" },
        { img: "static/assets/home/lunbo/lp7.jpg" },
        { img: "static/assets/home/lunbo/lp8.jpg" }
      ],
      currentIndex: 1,
      distance: -1920
    };
  },
  computed: {
    active() {
      return {
       
        transform:`translate3d(${this.distance}px, 0, 0)`

      };
    }
  },
   methods:{
            move(offset, direction) {
                direction === -1 ? this.currentIndex++ : this.currentIndex--
            if (this.currentIndex > 8) this.currentIndex = 1
          if (this.currentIndex < 1) this.currentIndex = 8
             const destination = this.distance + offset * direction
        this.animate(destination, direction)
          console.log(this.currentIndex)

            },  
        animate(des, direc) {
        if ((direc === -1 && des < this.distance) || (direc === 1 && des > this.distance)) {
            this.distance += 30 * direc        
            window.setTimeout(() => {
                this.animate(des, direc)
            }, 20)
        } else {
            this.distance = des
            if (des < -15360) this.distance = -1920
            if (des > -1920) this.distance = -15360 
      }
    }

            
      }

};
</script>

<style lang="scss" scoped>
#swiper {
  width: 100%;
  height: 380px;
  overflow: hidden;
  position: relative;
  .uls {
    width: 1000%;
    // height: 100%;
    li {
      width: 1920px;
      float: left;
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
  .butt {
    position: absolute;
    cursor: pointer;
    top: 50%;
    margin-top: -25px;
    margin-left: 135px;
    width: 1200px;
    display: flex;
    justify-content: space-between;
    .next {
      display: block;
      font-size: 25px;
      text-align: center;
      line-height: 50px;
    width: 20px;
    height: 50px;
      background: gray;
    }
    .upward {
      display: block;
      font-size: 25px;
      text-align: center;
     line-height: 50px;
    width: 20px;
    height: 50px;
      background: gray;
    }
  }
  .jds{
    list-style: none;
    float: left;
    position: absolute;
    bottom: 10px;
    width: 1400px;
    display: flex;
    justify-content: center;
    .jd{
      width: 50px;
      height: 5px;
      background: gray;
      margin-left: 40px;
    }
    .dotted{
      background: red;
    }
  }
}
</style>


