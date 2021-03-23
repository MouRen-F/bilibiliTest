<template>
  <div>
    <div
      class="channel-list"
      :style="{
        height: `${height}px`,
      }"
    >
      <div
        class="item"
        v-for="item in channels"
        :key="item.id"
        :style="{
          width: `${100 / columns}%`,
        }"
      >
        <Channel
          @active="$emit('active', item.id)"
          :isActive="item.id === activeId"
          :data="item"
        />
      </div>
    </div>
    <div class="collapse" @click="isExpand = !isExpand">
      <span>{{ isExpand ? "收起" : "展开" }}</span>
      <!-- <i
        class="iconfont"
        :class="isExpand ? 'icon-up' : 'icon-shanglajiantou'"
      ></i> -->
      <Icon :type="isExpand ? 'arrowUp' : 'arrowDown'" extraClass="icon" />
    </div>
  </div>
</template>

<script>
import Channel from "./Channel";
import channelServ from "../services/channel";
import Icon from "./Icon";
export default {
  components: {
    Channel,
    Icon,
  },
  props: ["activeId"],
  props: {
    activeId: {
      type: Number,
      required: true,
    },
    columns: {
      type: Number,
      default: 2,
    },
  },
  data() {
    return {
      channels: [],
      isExpand: false,
    };
  },
  computed: {
    height() {
      var row = 3;
      if (this.isExpand) {
        row = Math.ceil(this.channels.length / this.columns);
      }
      return row * 40;
    },
  },
  //组件注册后的调用的方法
  async created() {
    // this.channels = await channelServ.getChannels();
    var datas = await channelServ.getChannels();
    this.channels = datas.filter((item) => item.name !== "热门");
  },
};
</script>

<style scoped>
/* @import "//at.alicdn.com/t/font_2419212_v6h46exgo9p.css"; */
.channel-list {
  overflow: hidden;
  transition: 0.5s;
}
.item {
  float: left;
  width: 50%;
}
.collapse {
  clear: both;
  width: 100%;
  text-align: center;
  color: #999;
  font-size: 14px;
  cursor: pointer;
  border-bottom: 1px solid #e7e7e7;
}
.icon {
  font-size: 12px;
  margin-left: 5px;
}
</style>
