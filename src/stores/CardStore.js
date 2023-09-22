import { defineStore } from 'pinia';
import ApiService from '@/services/Api.js';

export const useCardStore = defineStore('card', {
  state: () => ({
    cardList: [],
  }),
  actions: {
    getCardList() {
      this.cardList = ApiService.getCardList();
    },
  },
});
