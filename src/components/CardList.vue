<template>
  <div v-if="hasCardList" class="card-list">
    <CardItem
      v-for="item in cardList"
      :key="item.id"
      :card="item"
    />
  </div>
  <div v-else>
    <p>No cards available.</p>
  </div>
</template>

<script>
import { mapState } from 'pinia';
import { useCardStore } from '@/stores/CardStore';
import CardItem from '@/components/CardItem.vue';

export default {
  name: 'CardList',
  components: {
    CardItem,
  },
  computed: {
    ...mapState(useCardStore, ['cardList']),
    hasCardList() {
      return this.cardList.length > 0;
    },
  },
};
</script>

<style scoped lang="scss">
.card-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
