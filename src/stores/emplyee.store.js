import { createStore } from "vuex";
import { computed } from "vue";
import getAllUsers from "@/api";

export default createStore({
  state: {
    users: [],
    query: "",
    loadingRequest: false,
  },

  getters: {
    filteredUsers(state) {
      const data = state.query.split(/,| /);
      const users = [];
      data.forEach((query) => {
        if (query) {
          state.users.forEach((user) => {
            if (user.name.toLowerCase().includes(query.toLowerCase()))
              users.push(user);
            if (user.id == query) users.push(user);
          });
        }
      });
      return [...new Set(users)];
    },

    pickedUser(state) {
      return state.users.find((user) => user.isPicked);
    },
  },

  mutations: {
    setQuery(state, newQuery) {
      state.query = newQuery;
    },
    updateData(state, usersList) {
      state.users = usersList;
    },
    setPickedUser(state, id) {
      state.users.forEach((user) => {
        if (user.id == id) user.isPicked = true;
        else user.isPicked = false;
      });
    },
  },

  actions: {
    async getUsers(state) {
      state.loadingRequest = true;
      const data = await getAllUsers();
      state.loadingRequest = false;
      data.forEach((item) => {
        item.isPicked = false;
      });
      state.commit("updateData", data);
    },
  },
});
