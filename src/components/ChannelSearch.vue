<template>
  <div class="channelsearch">
    <Search @search="search" placeholder="搜索频道" />
  </div>
</template>

<script>
import Search from "./Search";
export default {
  components: {
    Search,
  },
  methods: {
    search(e) {
      console.log(e);
    },
  },
};
</script>

<style scoped>
.channelsearch {
  width: 100%;
  height: 36px;
  margin: 20px 0;
  padding: 0 15px;
  box-sizing: border-box;
}
</style>
