<template>
  <i class="iconfont" :class="[iconClass, extraClass]"></i>
</template>

<script>
var map = {
  arrowUp: "icon-up",
  arrowDown: "icon-shanglajiantou",
  search: "icon-search",
};
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    extraClass: {
      type: String,
      default: "",
    },
  },
  computed: {
    iconClass() {
      return map[this.type];
    },
  },
};
</script>

<style scoped>
@import "//at.alicdn.com/t/font_2419212_6uejpzo0fms.css";
</style>
