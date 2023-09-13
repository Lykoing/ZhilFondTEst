<script setup>
const props = defineProps({
  user: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div class="user-big-card">
    <img
      src="@/assets/pics/placeholderPicBig.png"
      class="user-big-card__picture"
    />
    <div class="user-big-card__info">
      <span class="name">
        {{ user?.name }}
      </span>
      <div class="email">
        <span class="title">email:&nbsp </span>
        <span> {{ user?.email }} </span>
      </div>
      <div class="phone">
        <span class="title">phone:&nbsp </span>
        <span> {{ user?.phone }} </span>
      </div>
      <div class="about">
        <span class="title">О себе: </span>
        <span> {{ user?.about }} </span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.user-big-card {
  display: flex;
  flex-wrap: wrap;
  row-gap: 15px;

  &__info {
    display: flex;
    flex-direction: column;
    padding-left: 61px;

    .name {
      font-weight: $bold-weight;
      padding-bottom: 10px;
    }

    .title {
      font-weight: $bold-weight;
    }

    .email {
      font-size: $small-font;
      padding-bottom: 10px;
    }

    .phone {
      font-size: $small-font;
      padding-bottom: 25px;
    }

    .about {
      display: flex;
      flex-direction: column;
      font-size: $small-font;
      .title {
        padding-bottom: 20px;
        font-size: $regular-font;
      }
    }
  }

  img {
    border: 1px solid #e0e0e0;
  }
}
</style>
