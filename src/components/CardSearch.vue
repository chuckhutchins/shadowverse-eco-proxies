<template>
  <div class="search">
    <div class="input">
      <label for="search">Search</label>
      <div class="input-wrapper">
        <input
          v-model="search"
          id="search"
          name="search"
          type="text"
        >
        <AppButton
          v-if="hasSearchInput"
          class="btn-clear"
          @click="clear"
        >
          Clear
        </AppButton>
      </div>
    </div>
    <Transition name="slide-fade">
      <ul v-if="hasResults" class="results">
        <TransitionGroup name="slide-fade">
          <li
            v-for="(item, index) in results"
            :key="`${item.id}-${index}`"
            class="result-item"
          >
            {{ item.name }}<template v-if="item.evolved"> (Evolved)</template>
            <AppButton @click="addCard(item)">
              Add
            </AppButton>
          </li>
        </TransitionGroup>
      </ul>
    </Transition>

  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useCardStore } from '@/stores/CardStore';
import AppButton from '@/components/common/AppButton.vue';

export default {
  name: 'CardSearch',
  components: {
    AppButton,
  },
  data: () => ({
    search: '',
  }),
  computed: {
    ...mapState(useCardStore, ['allCards']),
    results() {
      if (this.search.length >= 3) {
        return this.allCards.filter(item => item.name.toLowerCase().includes(this.search.toLowerCase()));
      }
      return [];
    },
    hasResults() {
      return this.results.length > 0;
    },
    hasSearchInput() {
      return this.search.length > 0;
    },
  },
  methods: {
    ...mapActions(useCardStore, ['addCard']),
    clear() {
      this.search = '';
    },
  },
};
</script>

<style scoped lang="scss">
.search {
  display: grid;
  gap: 0.25rem;

  > * {
    min-inline-size: 0;
  }
}

.input {
  display: grid;
  gap: 0.25rem;

  > * {
    min-inline-size: 0;
  }

  label {
    justify-self: start;
    line-height: 1;
  }

  .input-wrapper {
    position: relative;

    input {
      inline-size: 100%;
      font-size: 1rem;
      border: none;
      box-shadow: inset 0 0 0 1px var(--color-dark-gray);
      border-radius: .75rem;
      padding: .75rem 1rem;
      transition: .2s;
      outline: none;
      -webkit-appearance: none;

      &:focus {
        box-shadow: inset 0 0 0 0.25rem var(--color-dark-gray);
      }
    }

    .btn-clear {
      position: absolute;
      inset-block-start: 0.5rem;
      inset-inline-end: 0.5rem;
    }
  }
}

.results {
  list-style: none;
  padding: 0.25rem;
  border-radius: 0.75rem;
  background-color: var(--results-background);
  box-shadow: inset 0 0.0625rem 0.25rem rgba(0, 0, 0, 0.1);

  .result-item {
    display: grid;
    grid-template-columns: 1fr max-content;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem 0.25rem 0.25rem 0.625rem;
    border-radius: 0.5rem;

    > * {
      min-inline-size: 0;
    }

    &:hover {
      background-color: var(--results-hover);
      box-shadow: 0 0.0625rem 0.25rem rgba(0, 0, 0, 0.1);
    }

    &:focus-within {
      background-color: var(--results-hover);
      box-shadow: 0 0 0 0.125rem var(--text);
    }
  }
}

@media print {
  .search {
    display: none;
  }
}
</style>
