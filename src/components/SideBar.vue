<script setup>
import SearchResults from "./SearchResults.vue";
import { ref, computed } from "vue";
import { useStore } from "vuex";

const store = useStore();
const setQuery = () => {
  store.commit("setQuery", search);
};
const search = ref();
</script>

<template>
  <div class="side-bar">
    <span class="side-bar__label">Поиск сотрудников</span>
    <input
      v-model="search"
      placeholder="Введите Id или имя"
      @input="setQuery"
    />
    <div class="side-bar__results">
      <span class="side-bar__label">Результаты</span>
      <SearchResults />
    </div>
  </div>
</template>

<style scoped lang="scss">
.side-bar {
  display: flex;
  flex-direction: column;
  padding-left: 23px;
  padding-top: 13px;
  row-gap: 22px;

  &__label {
    font-weight: $bold-weight;
  }

  input {
    font: inherit;
    width: 240px;
    height: 46px;
    font-size: $small-font;

    border-radius: 8px;
    border-width: 2px;
    border: 1.5px solid #e9ecef;

    color: #76787d;
    background: #ffff;
    text-align: center;
  }

  &__results {
    display: flex;
    row-gap: 18px;
    flex-direction: column;
  }
}
</style>
