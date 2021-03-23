<template>
  <div class="item" :class="{ active: isActive }" @click="handelcheck">
    <!-- 插槽 提供父组件使用的一个占位符-->
    <!-- {{ count }} -->
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    isActive: {
      type: Boolean, //约束该属性的类型为Boolean
      //   required:true,//该约束属性必须要传递
      default: false, //约束该属性的默认值为false
    },
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    handelcheck() {
      console.log("事件触发!");
      this.count++;
      this.$emit("active");
    },
  },
};
</script>
<style scoped>
.active {
  background-color: #e7e7e7;
}
.item {
  cursor: pointer;
  width: 100%;
  height: 100%;
  transition: 0.5s;
}
:hover {
  background-color: #f4f4f4;
}
</style>
