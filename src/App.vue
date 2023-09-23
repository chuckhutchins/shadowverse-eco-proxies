<template>
  <div class="container">
    <TheHeader />
    <main>
      <CardSearch />
      <CardList />
    </main>
    <TheFooter />
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import { useCardStore } from '@/stores/CardStore';
import CardList from '@/components/CardList.vue';
import CardSearch from '@/components/CardSearch.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';

export default {
  name: 'App',
  components: {
    CardList,
    CardSearch,
    TheFooter,
    TheHeader,
  },
  created() {
    this.getCardList();
    this.getLocalData();
  },
  methods: {
    ...mapActions(useCardStore, ['getCardList', 'getLocalData']),
  },
};
</script>

<style scoped lang="scss">
.container {
  inline-size: calc(100% - 2rem);
  max-inline-size: 816px; // 816px is 8.5in
  margin: 0 auto;
  box-sizing: border-box;
  padding: 1rem 0;
  display: grid;
  grid-template-rows: auto 1fr auto;
  align-items: start;
  grid-gap: 2rem;
  min-height: 100dvh;

  @media print {
    display: block;
    padding: 0;
    min-height: 0;
  }

  main {
    display: grid;
    justify-items: center;
    gap: 2rem;

    > * {
      min-inline-size: 0;
    }

    @media print {
      display: block;
    }
  }

  .search {
    inline-size: 100%;
    max-inline-size: 20rem;
  }

  .card-list {
    justify-self: center;
  }
}

@media print {
  .header,
  .footer,
  .search {
    display: none;
  }
}
</style>
