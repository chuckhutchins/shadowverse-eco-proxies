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
        <button
          v-if="hasSearchInput"
          class="btn-clear"
          type="button"
          @click="clear"
        >
          Clear
        </button>
      </div>
    </div>
    <ul v-if="hasResults" class="results">
      <li
        v-for="(item, index) in results"
        :key="`${item.id}-${index}`"
        class="result-item"
      >
        {{ item.name }}<template v-if="item.evolved"> (Evolved)</template>
        <button
          class="btn-add"
          type="button"
          @click="addCard(item)"
        >
          Add
        </button>
      </li>
    </ul>
<!--    <div class="actions">-->
<!--      <button @click="removeAllCards" type="button">-->
<!--        Remove All Cards-->
<!--      </button>-->
<!--    </div>-->
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useCardStore } from '@/stores/CardStore';

export default {
  name: 'CardSearch',
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
    ...mapActions(useCardStore, ['addCard', 'removeAllCards']),
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
      background-color: var(--color-black);
      border-radius: 0.25rem;
      border: none;
      padding: 0.375rem 0.75rem;
      transition: 0.2s;
      cursor: pointer;
      color: var(--color-white);
      font-size: 1rem;
      line-height: 1;

      svg {
        aspect-ratio: 1;
        inline-size: 1rem;
        transition: .2s;
      }

      &:hover,
      &:focus {
        background-color: var(--color-dark-gray);

        svg {
          transform: rotate(90deg);
        }
      }
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

    .btn-add {
      background-color: var(--color-black);
      color: var(--color-white);
      border-radius: 0.25rem;
      border: none;
      padding: 0.375rem 0.75rem;
      transition: 0.2s;
      cursor: pointer;
      font-size: 1rem;
      line-height: 1;

      &:hover,
      &:focus {
        background-color: var(--color-dark-gray);
      }
    }
  }
}

@media print {
  .search {
    display: none;
  }
}
</style>
