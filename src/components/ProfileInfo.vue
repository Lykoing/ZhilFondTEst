<script setup>
import UserBigCard from "./UserBigCard.vue";
import { useStore } from "vuex";
import { computed } from "vue";
const store = useStore();
const pickedUser = computed(() => store.getters.pickedUser);
</script>

<template>
  <div class="profile-info">
    <span class="profile-info__placeholder" v-if="!pickedUser">
      Выберите сотрудника, чтобы посмотреть его профиль
    </span>
    <UserBigCard
      class="profile-info__user-card"
      :user="pickedUser"
      v-if="pickedUser"
    />
  </div>
</template>

<style scoped lang="scss">
.profile-info {
  width: 975px;
  height: 575px;
  border-left: 1px solid #dededd;

  &__placeholder {
    position: relative;
    top: 250px;
    left: 284px;
  }
  &__user-card {
    padding-top: 30px;
    padding-left: 21px;
  }
}
</style>
