<template>
  <div class="eighe_small">
    <li>
      <div class="new_main_bodybanner">
        <a href="javascript:" target="_blank">
          <img src="/static/assets/home/onefloor/1.1.jpg" />
        </a>
        <div class="img_text">
          <h4>1212313</h4>
          <div class="price">121212</div>
          <div class="oldprice">87878</div>
        </div>
        <div class="wsad">
          <div class="price">{{el.price2}}</div>
          <div class="jrgwz">
            <a href="javascript:">{{el.text2}}</a>
          </div>
        </div>
      </div>
    </li>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
li {
  width: 232px;
  height: 325px;
  float: left;
  background-color: #fff;
  padding-top: 10px;
  margin-right: 10px;
  text-align: center;
  .new_main_bodybanner {
    width: 232px;
    // height: 340px;
    // margin-top: -10px;

    a {
      text-decoration: none;

      img {
        margin-bottom: 10px;
        width: 215px;
        height: 215px;
      }
    }
    .img_text {
      display: block;
      h4 {
        width: 100%;
        clear: both;
        font-size: 12px;
        color: #313131;
        font-weight: 400;
        line-height: 25px;
        text-align: left;
        height: 45px;
        overflow: hidden;
        padding: 5px;
        // word-spacing: 5px;
      }
      .price {
        color: #fc3538;
        font-size: 14px;
        line-height: 20px;
        text-align: left;
        font-weight: 600;
        margin-top: 10px;
        margin-bottom: 10px;
      }
      .oldprice {
        color: #999;
        font-size: 12px;
        float: left;
        margin-left: 95px;
        line-height: 20px;
        margin-top: -30px;
        text-decoration: line-through;
      }
    }
    .wsad {
      display: none;
      position: absolute;
      width: 230px;
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
        margin-left: 80px;
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
</style>