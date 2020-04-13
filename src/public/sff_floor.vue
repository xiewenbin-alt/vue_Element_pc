<template>
  <div class="stree_storey_TPL">
    <div class="stree_storey_sp_top">
      <div class="top_left">
        <div class="left_top">
          <img :src="img_info.img01" alt />
        </div>
        <div class="left_bott">
          <div class="bott_left">
            <img :src="img_info.img02" alt />
          </div>
          <div class="bott_right">
            <img :src="img_info.img03" alt />
          </div>
        </div>
      </div>
      <div class="top_right">
        <div class="right_top">
          <div class="top_left">
            <img :src="img_info.img04" alt />
          </div>
          <div class="top_right">
            <img :src="img_info.img05" alt />
          </div>
        </div>
        <div class="top_midd">
          <img :src="img_info.img06" alt />
        </div>
        <div class="top_bott">
          <div class="bott_left">
            <img :src="img_info.img07" alt />
          </div>
          <div class="bott_right">
            <img :src="img_info.img08" alt />
          </div>
        </div>
      </div>
    </div>
    <div class="stree_storey_sp_bott">
      <img :src="img_info.img09" alt />
    </div>
  </div>
</template>
<script>
export default {
    data(){
        return{
            img_info:{
            }
        }
    },
    props:{
        imgs:{
            type:Object,
            default:function(){
                return []
            }
        }
    },
    mounted(){
        this.img_info=this.imgs
    }
   
};
</script>
<style lang="scss" scoped>
.stree_storey_TPL {
    width: 1200px;
    margin:  0 auto;
    overflow: hidden;
  .stree_storey_sp_top {
    .top_left {
      float: left;
      .left_top {
        margin-bottom: 10px;
      }

      .left_bott {
        .bott_left {
          float: left;
        }

        .bott_right {
          float: right;
        }
      }
    }

    .top_right {
      float: right;
      .top_midd {
        img {
          margin-top: 10px;
        }
      }

      .top_bott {
        margin-top: 7px;
        .bott_left {
          float: left;
        }

        .bott_right {
          float: right;
        }
      }
    }
  }
  .stree_storey_sp_bott {
    img {
      margin-top: 10px;
    }
  }
}
</style>