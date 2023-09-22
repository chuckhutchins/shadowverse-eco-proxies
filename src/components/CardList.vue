<template>
  <div v-if="hasCards" class="card-list">
    <CardItem
      v-for="(item, index) in selectedCards"
      :key="`${item.id}-${index}`"
      :card="item"
    />
  </div>
  <div v-else>
    <h1>Go ahead and add some cards!</h1>
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
    ...mapState(useCardStore, ['selectedCards']),
    hasCards() {
      return this.selectedCards.length > 0;
    },
  },
};
</script>

<style scoped lang="scss">
.card-list {
  display: grid;
  grid-template-columns: repeat(3, 15rem);

  > * {
    min-inline-size: 0;
  }
}
</style>
