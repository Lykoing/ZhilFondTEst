<script setup>
import { useStore } from "vuex";
const store = useStore();
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    :class="{ active: user.isPicked }"
    class="user-small-card"
    @click="store.commit('setPickedUser', user.id)"
  >
    <img
      src="@/assets/pics/placeholderPicSmall.png"
      class="user-small-card__picture"
    />
    <div class="user-small-card__info">
      <span class="name">
        {{ user.name }}
      </span>
      <span class="email">
        {{ user.email }}
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user-small-card {
  display: flex;
  box-shadow: 0px 0px 10px 0px #0000001a;
  border-radius: 10px;
  width: 240px;
  font-size: $small-font;

  &:hover {
    cursor: pointer;
  }
  &__info {
    display: flex;
    flex-direction: column;

    .name {
      font-weight: $bold-weight;
      padding-top: 15px;
      padding-left: 15px;
    }

    .email {
      padding-top: 5px;
      padding-left: 15px;
    }
  }
}

.active {
  background: #e0e0e0;
}
</style>
