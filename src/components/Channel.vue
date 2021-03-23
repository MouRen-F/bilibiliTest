<template>
  <div class="channel">
    <item :isActive="isActive" @active="$emit('active')">
      <div class="inner">
        <div class="left">
          <span class="name">{{ data.name }}</span>
          <span class="number">{{ data.channel_count }}</span>
        </div>
        <div class="right">
          <slot name="icon"></slot>
        </div>
      </div>
    </item>
  </div>
</template>

<script>
import item from "./item";
export default {
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
    data: {
      type: Object,
      default: function() {
        return {};
      },
    },
  },
  components: {
    item,
  },
};
</script>

<style scoped>
.channel {
  width: 100%;
  height: 40px;
  line-height: 40px;
  /* overflow: hidden; */
}
.inner {
  padding: 0 20px;
}
.left {
  float: left;
  color: #212121;
  font-weight: 500;
}
.right {
  float: right;
  font-size: 12px;
  color: #999;
}
.name {
  font-size: 14px;
}
.number {
  font-size: 12px;
  color: #999;
  margin-left: 8px;
}
.name,
.number {
  float: left;
}
</style>
