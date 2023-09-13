<script setup>
import SideBar from "./SideBar.vue";
import ProfileInfo from "./ProfileInfo.vue";
</script>

<template>
  <div class="search-elements">
    <SideBar />
    <ProfileInfo />
  </div>
</template>

<style scoped lang="scss">
.search-elements {
  display: flex;
  flex-direction: row;
  column-gap: 28px;
  max-width: 1266px;
  height: 575px;

  box-shadow: 0px 0px 10px 0px #0000001a;
}
</style>
