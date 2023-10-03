<template>
  <div v-if="hasCards" class="card-list">
    <div class="list-header">
      <h2>{{ numberOfCards }} Card{{ numberOfCards === 1 ? '' : 's' }}</h2>
      <AppButton @click="removeAllCards">
        Remove All
      </AppButton>
    </div>
    <TransitionGroup name="fade">
      <CardItem
        v-for="(item, index) in selectedCards"
        :key="`${item.id}-${index}`"
        :card="item"
      />
    </TransitionGroup>
  </div>
  <div v-else>
    <h1>Go ahead and add some cards!</h1>
    <p>No cards available.</p>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useCardStore } from '@/stores/CardStore';
import AppButton from '@/components/common/AppButton.vue';
import CardItem from '@/components/CardItem.vue';

export default {
  name: 'CardList',
  components: {
    AppButton,
    CardItem,
  },
  computed: {
    ...mapState(useCardStore, ['selectedCards']),
    numberOfCards() {
      return this.selectedCards.length;
    },
    hasCards() {
      return this.numberOfCards > 0;
    },
  },
  methods: {
    ...mapActions(useCardStore, ['removeAllCards']),
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

  .list-header {
    grid-column: span 3;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    margin-bottom: 1rem;

    @media print {
      display: none;
    }
  }
}
</style>
