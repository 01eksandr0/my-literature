import { defineStore } from "pinia";
import data from "./data.json";

export const usePoems = defineStore("poems", {
  state: () => ({ poems: [...data], page: 1, query: "", sort: "new" }),
  getters: {
    getPoems: (s) => {
      const startIndex = (s.page - 1) * 6;
      const endIndex = s.page * 6;
      const poems = s.poems.filter(
        (i) =>
          i.title.toLowerCase().includes(s.query) ||
          i.text.toLowerCase().includes(s.query)
      );
      return poems.slice(startIndex, endIndex);
    },
    getPage: (s) => s.page,
    getLimit: (s) => parseInt(s.poems.length / 6) + 1,
  },
  actions: {
    updatePage(newPage) {
      this.page = newPage;
    },
    updateQuery(newQuery) {
      this.query = newQuery;
    },
  },
});
