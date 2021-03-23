<template>
  <form class="search-area" @submit.prevent="handelSearch">
    <input type="text" v-model="searchValue" :placeholder="placeholder" />
    <div class="icon" @click="handelSearch">
      <Icon type="search" />
    </div>
  </form>
</template>

<script>
import Icon from "./Icon";
export default {
  components: {
    Icon,
  },
  data() {
    return {
      searchValue: "",
    };
  },
  props: {
    placeholder: {
      type: String,
      default: "搜索关键字",
    },
  },
  methods: {
    handelSearch() {
      if (this.searchValue) {
        this.$emit("search", this.searchValue);
      }
    },
  },
};
</script>

<style scoped>
.search-area {
  width: 100%;
  height: 100%;
  border: 1px solid #e7e7e7;
  box-sizing: border-box;
  position: relative;
  /* margin: 20px 10px 10px 20px; */
  border-radius: 2px;
}
.search-area input {
  outline: none;
  border: none;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding-left: 15px;
  padding-right: 35px;
}
.search-area input::placeholder {
  color: #999;
}
.icon {
  position: absolute;
  width: 16px;
  height: 16px;
  right: 10px;
  top: 8px;
  cursor: pointer;
  font-size: 10px;
  color: #c0c0c0;
}
</style>
