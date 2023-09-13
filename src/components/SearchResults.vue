<script setup>
import UserSmallCard from "./UserSmallCard.vue";
import { useStore } from "vuex";
import { ref, computed } from "vue";

const store = useStore();
const error = ref();
try {
  store.dispatch("getUsers");
} catch (code) {
  error.value = code;
}

const users = store.state.users;
const filteredUsers = computed(() => store.getters.filteredUsers);
</script>

<template>
  <div class="search-results">
    <span v-if="!store.state.query">начните поиск</span>
    <span v-if="error"> ОШИБКА ПРИ ОБРАЩЕНИИ К СЕРВЕРУ: {{ error }}</span>
    <div class="search-results__usersList">
      <UserSmallCard v-for="user in filteredUsers" :user="user" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.search-results {
  display: flex;
  flex-direction: column;
  max-height: 412px;
  max-width: 240px;
  overflow: auto;

  &__usersList {
    display: flex;
    flex-direction: column;
    row-gap: 18px;
  }
}
</style>
