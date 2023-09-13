<script setup>
import SideBar from "./SideBar.vue";
import ProfileInfo from "./ProfileInfo.vue";
import SearchElements from "./SearchElements.vue";
</script>

<template>
  <div class="client-search-block">
    <div class="client-search-block__top-line">
      <div class="label">Жилфонд</div>
      <div class="user">Пользователь</div>
    </div>
    <SearchElements class="search-elements" />
  </div>
</template>

<style scoped lang="scss">
.client-search-block {
  display: flex;
  flex-direction: column;
  row-gap: 44px;

  &__top-line {
    max-width: 1266px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    .label {
      font-size: 32px;
      font-weight: 700;
      color: $logo-color;
    }
    .user {
      margin-top: 4px;
    }
  }
}
</style>
