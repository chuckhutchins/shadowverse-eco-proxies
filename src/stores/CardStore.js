import { defineStore } from 'pinia';
import ApiService from '@/services/Api.js';

export const useCardStore = defineStore('card', {
  state: () => ({
    allCards: [],
    selectedCards: [],
  }),
  actions: {
    getCardList() {
      this.allCards = ApiService.getCardList();
    },
    getLocalData() {
      const localData = localStorage.getItem('sveProxies');
      if (localData) {
        this.selectedCards = JSON.parse(localData);
      }
    },
    saveLocalData() {
      const stringifyData = JSON.stringify(this.selectedCards);
      localStorage.setItem('sveProxies', stringifyData);
    },
    addCard(card) {
      this.selectedCards.push(card);
      this.selectedCards.sort((a, b) => a.name.localeCompare(b.name) || a.id - b.id);
      this.saveLocalData();
    },
    removeCard(id) {
      const index = this.selectedCards.findIndex(item => item.id === id);
      this.selectedCards.splice(index, 1);
      this.saveLocalData();
    },
    removeAllCards() {
      this.selectedCards = [];
      this.saveLocalData();
    },
  },
});
