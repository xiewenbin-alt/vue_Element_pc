<template>
  <div class="floor">
    <div class="floor_name" :name="name">{{name}}</div>
    <div class="floor_series">
      <div class="left_name" :Engname="Engname">{{Engname}}</div>
      <div class="right_serise">
        <ul>
          <li v-for="item in temp" :key="item.id">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      Engname: "",
      temp: []
    };
  },
  props: {
    temps: {
      type: Object,
      default: function() {
        return [];
      }
    }
  },
  methods: {},
  mounted() {
    this.name = this.temps.name;
    this.Engname = this.temps.Engname;
    this.temp = this.temps.temp;
  }
};
</script>
<style lang="scss" scoped>
.floor {
  width: 1200px;
  margin: 10px auto 10px auto;
  .floor_name {
    font-size: 24px;
    font-weight: 600;
    display: block;
    overflow: hidden;
    position: relative;
  }
  .floor_series {
    overflow: hidden;
    display: flex;
    justify-content: space-between;
    line-height: 25px;
    background: url(/static/assets/home/onefloor/index_bottom_l.png) repeat-x
      scroll bottom left;
    .left_name {
      color: #919191;
      font-size: 12px;
      background: url(/static/assets/home/onefloor/index_bottom_d.png) repeat-x
        scroll bottom left;
      height: 25px;
    }
    .right_serise {
      ul {
        list-style: none;
        li {
          float: left;
          font-size: 14px;
          color: #919191;
          cursor: pointer;
          margin-left: 40px;
          &:hover {
            color: #00bad6;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>