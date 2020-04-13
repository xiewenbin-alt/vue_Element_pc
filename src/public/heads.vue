<template>
  <div id="index">
    <div id="webapp">
      <div id="banner">
        <div class="banner_content">
          <div class="content_left">
            <div class="left_img"></div>
            <div class="left_ul">
              <div class="uls">
                <span>Applet教育优惠</span>
              </div>
            </div>
          </div>
          <div class="content_right">
            <ul>
              <li>
                <div class="right_tet">
                  我的顺电
                  <div class="right_img"></div>
                </div>
              </li>
              <li>
                <div class="jg">&nbsp;</div>
              </li>
              <li>
                <div class="right_tet">家电医院</div>
              </li>
              <li>
                <div class="jg">&nbsp;</div>
              </li>
              <li>
                <div class="right_tet">
                  为你服务
                  <div class="right_img"></div>
                </div>
              </li>
              <li>
                <div class="jg">&nbsp;</div>
              </li>
              <li>
                <div class="right_tet">
                  更多精选
                  <div class="right_img"></div>
                </div>
              </li>
              <li>
                <div class="jg">&nbsp;</div>
              </li>
              <li>
                <div class="right_tet">
                  企业购：
                  <span style="font-weight:bold ;color: red">0755-83286903</span>
                </div>
              </li>
            </ul>
            <p></p>
          </div>
        </div>
      </div>
      <div id="header">
        <div class="header_contenr">
          <div class="header_left">
            <div class="left">
              <a href="javascript:">
                <img src="/static/assets/home/heads/top.png" alt />
              </a>
            </div>
          </div>
          <div class="header_right">
            <div class="header_midd">
              <form action>
                <input id="inpbut" type="text" autocomplete="off" />
                <input type="button" class="buttinp" value="搜索" />
              </form>
              <div class="bott_host">
                <ul>
                  <li v-for="item in info" :key="item.id">
                    <span>{{item}}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="header_butt">
              <button class="zc">注册</button>
              <button class="dl">登陆</button>
              <div class="gwc">
                <div class="gwc_tp"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="goodsbg">
        <div class="goodstype">
          <div class="All_goods">
            <a href="javascript:">所有商品分类</a>
          </div>
          <div class="wrap"  @mouseleave="onMouseout">
            <ul class="goods_uls">
              <li v-for="(items,index) in infoss" @mouseenter="sel(items)" :key="index">
                <span>
                  <img :src="items.img" alt />
                  {{items.name}}
                </span>
              </li>
            </ul>
            <div id="sub" v-show="seen">
              <div class="abc">
                <div class="info" v-for="item in a" :key="item.id">
                  <div class="list">
                    <h4>{{item.title}}</h4>
                    <ul>
                      <li v-for="items in item.ad" :key="items.id">{{items}}</li>
                    </ul>
                  </div>
                  <div class="list_img">
                    <img :src="item.img" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="goods_info">
            <ul>
              <li v-for="(itemss,index) in infos" :key="itemss.id" :class="index==0?'clickNow':''">
                <span>{{itemss}}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { test } from "../api/api";
import axios from "axios";

export default {
  data() {
    return {
      info: [
        "Pro",
        "|",
        "索尼43英寸4k电视",
        "|",
        "8公斤滚筒洗衣机",
        "|",
        "Apple教育优惠",
        "|",
        "微信专区",
        "|",
        "营业执照"
      ],
      infos: [
        "首页",
        "Apple授权专营店",
        "新品",
        "Man",
        "以旧换新",
        "清仓折扣",
        "品牌街",
        "企业购",
        "顺电门店",
        "顺电App",
        "人才招聘"
      ],
      infoss: [
        {
          index: "big_appliance",
          img: "/static/assets/home/heads/djd.png",
          name: "大家电"
        },
        {
          index: "iphone",
          img: "/static/assets/home/heads/sjtx.png",
          name: "手机通讯"
        },
        {
          index: "entertainment",
          img: "/static/assets/home/heads/yx.png",
          name: "智能/娱乐"
        },
        {
          index: "Computer",
          img: "/static/assets/home/heads/dn.png",
          name: "电脑"
        },
        {
          index: "camera",
          img: "/static/assets/home/heads/sm.png",
          name: "数码航拍"
        },
        {
          index: "work_oddice",
          img: "/static/assets/home/heads/bgsb.png",
          name: "办公设备"
        },
        {
          index: "Kitchen",
          img: "/static/assets/home/heads/cfjd.png",
          name: "厨房小电器"
        },
        {
          index: "left_Kitchen",
          img: "/static/assets/home/heads/shjd.png",
          name: "生活电器"
        },
        {
          index: "Healthy",
          img: "/static/assets/home/heads/gh.png",
          name: "个护/健康"
        }
      ],
      a: [],
      seen:false,
    };
  },
  mounted() {
    axios.get("/static/data/data.json").then(response => {
      let abc = response.data.data.big_appliance;
      console.log(abc);
      this.a = abc;
    });
  },

  methods: {
    sel(items) {
      let indexof = items.index;
      console.log(indexof);
      axios.get("/static/data/data.json").then(response => {
        let abc = response.data.data[indexof];
        console.log(abc);
        this.a = abc;
      });
      this.seen=true;
    },
    onMouseout(){
      this.seen=false
    }
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  #index {
    // margin-bottom: 20px;
    #webapp {
      width: 100%;
      margin: 0 auto;
      #banner {
        width: 100%;
        height: 40px;
        background: #f0f0f0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .banner_content {
          width: 1226px;
          min-width: 1226px;
          margin: 0 auto;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          .content_left {
            width: 130px;
            line-height: 40px;
            .left_img {
              float: left;
              width: 30px;
              height: 40px;
              line-height: 40px;
              background: url(/static/assets/home/heads/top_news.png) no-repeat
                center left;
            }

            .left_ul {
              height: 40px;
              width: 100px;
              float: right;
              position: relative;
              overflow: hidden;

              .uls {
                list-style: none;
                position: absolute;
                top: 0;
                left: 0;
                span {
                  font-size: 11px;
                }

                li {
                  line-height: 40px;
                  text-align: left;
                }
              }
            }
          }

          .content_right {
            position: relative;

            ul {
              float: left;
              margin: 0;
              list-style: none;
              text-align: right;
              li {
                height: 40px;
                line-height: 40px;
                padding: 0px 5p;
                float: left;
                color: gray;
                .right_tet {
                  font-size: 14px;
                  .right_img {
                    width: 12px;
                    height: 12px;
                    line-height: 16px;
                    background: url(/static/assets/home/heads/hy-down.png);
                    background-size: 100% 100%;
                    display: inline-block;
                    margin-left: 2px;
                  }
                }

                .jg {
                  width: 5px;
                  height: 40px;
                  background: url(/static/assets/home/heads/split.png);
                  background-position: bottom;
                  margin: 0 2px;
                }

                &:hover {
                  background: #fff;
                  background-image: url(/static/assets/home/heads/hy-up.png)
                    no-repeat;
                  color: cyan;
                  cursor: pointer;
                  .right_tet {
                    .right_img {
                      background: url(/static/assets/home/heads/hy-up.png)
                        no-repeat;
                    }
                  }
                }
              }
            }

            p {
              position: absolute;
              width: 220px;
              height: 67px;
              //    display: block;
              border: 1px solid #f0f0f0;
              top: 40px;
              background: white;
              z-index: 20;
              border-top: none;
              display: none;
            }
          }
        }
      }
      #header {
        // width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .header_contenr {
          width: 1225px;
          margin: 20px 0 20px 0;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
          .header_left {
            width: 180px;
            // margin-left: 22px;
            .left {
              margin-top: 5px;
            }
          }

          .header_right {
            // float: right;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            .header_midd {
              margin-top: 10px;
              overflow: hidden;
              float: left;
              vertical-align: middle;

              form {
                width: 730px;

                #inpbut {
                  height: 36px;
                  width: 562px;
                  border-style: none;
                  border: 1px solid gray;
                  line-height: 36px;
                  font-size: 14px;
                  background: url(/static/assets/home/heads/search.png) scroll
                    5px 9px no-repeat;
                  padding-left: 40px;
                  vertical-align: middle;
                  outline: none;
                  outline: none;
                }

                .buttinp {
                  width: 127px;
                  height: 39px;
                  background-color: #00bbd7;
                  border: none;
                  font-size: 16px;
                  color: #fff;
                  margin-left: -6px;
                  position: relative;
                  vertical-align: middle;
                }
              }

              .bott_host {
                overflow: hidden;
                ul {
                  width: 580px;
                  float: left;
                  list-style: none;
                  margin: 0;
                  padding: 0;
                  li {
                    float: left;
                    // a {
                    span {
                      text-decoration: none;
                      color: gray;
                      font-size: 8px;
                      padding: 0 2px 0 2px;
                      &:hover {
                        color: #00bbd7;
                        cursor: pointer;
                      }
                    }
                  }
                }
              }
            }

            .header_butt {
                  margin-top: -10px;
              width: 270px;
              .zc {
                width: 65px;
                height: 40px;
                line-height: 40px;
                background-color: #fc3538;
                color: #fff;
                border: none;
                margin: 0px 20px 0 50px;
                font-size: 16px;
                a {
                  text-decoration: none;
                  color: white;
                }
              }

              .dl {
                width: 65px;
                height: 40px;
                line-height: 40px;
                border: 1px solid #e1e1e1;
                color: black;
                background: white;
                font-size: 16px;
                a {
                  text-decoration: none;
                  color: black;
                }
              }

              .gwc {
                float: right;
                // margin-top: 8px;
                cursor: pointer;
                position: relative;
                width: 50px;
                text-align: center;
                margin-left: 2px;

                .gwc_tp {
                  width: 40px;
                  height: 38px;
                  line-height: 38px;
                  border: 1px solid #e1e1e1;
                  background: url(/static/assets/home/heads/index_cart.png)
                    no-repeat scroll center center;
                }
              }
            }
          }
        }
      }
      #goodsbg {
        width: 100%;
        background-color: #33353d;
        height: 40px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        position: relative;
        z-index: 999;
        .goodstype {
          width: 1225px;
          position: absolute;
          top: 0;
          margin-left: 22px;

          .All_goods {
            line-height: 40px;
            text-align: left;
            padding-left: 20px;
            font-size: 14px;
            font-weight: bold;
            width: 125px;
            background: url(/static/assets/home/heads/category-handle.png)
            
              scroll center center;
            padding-right: 20px;
            letter-spacing: 5px;
            float: left;
            a {
              text-decoration: none;
              font-size: 14px;
              font-weight: 400;
              color: white;
              display: block;
              background: url(/static/assets/home/heads/category-handl_sildown.png) scroll 107px center no-repeat;
            }
          }
          .wrap {
            position: absolute;
            top: 40px;
            background: url(/static/assets/home/heads/ino-bak.png);
            line-height: 42px;
            width: 180px;
            z-index: 99;
            height: 380px;
            // display: none;
            .goods_uls {
              // text-align: center;
              padding: 0;
              margin: 0;
              li {
                list-style: none;
                position: relative;
                padding-left: 5px;
                padding-left: 50px;
                span {
                  img {
                    position: absolute;
                    top: 8px;
                    left: 20px;
                  }
                  cursor: pointer;
                }
                &:hover {
                  background: white;
                  color: #00bbd7;
                }
              }
            }
            #sub {
              width: 700px;
              height: 380px;
              position: absolute;
              background: white;
              left: 180px;
              box-sizing: border-box;
              margin: 0;
              padding: 20px;
              top: 0;
              // border: 1px solid black;
              .abc {
                width: 100%;
                display: flex;
                justify-content: space-between;
                .info {
                  width: 30%;
                  .list {
                    cursor: pointer;
                    h4 {
                      font-weight: bold;
                      border-bottom: 1px solid black;
                    }
                    ul {
                      list-style: none;
                      line-height: 30px;
                      li:hover{
                        color: #00bbd7;
                      }
                    }
                  }
                  .list_img {
                    width: 197px;
                    height: 64px;
                    position: absolute;
                    top: 290px;
                    img {
                      width: 100%;
                    }
                  }
                }
              }
            }
          }
          .goods_info {
            ul {
              float: left;
              list-style: none;
              margin: 0;
              padding: 0;
              li {
                float: left;
                line-height: 40px;
                font-size: 14px;

                span {
                  text-decoration: none;
                  color: white;
                  display: block;
                  padding: 0 20px;
                  font-size: 14px;
                  &:hover {
                    background: #00bbd7;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .clickNow {
    background: #00bbd7;
  }
}
</style>

