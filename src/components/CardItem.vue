<template>
  <div class="card">
    <button class="btn-remove" @click="removeCard(card.id)">
      <IconClose />
      <span class="sr-only">Remove card</span>
    </button>
    <div class="header">
      <div v-if="hasCost || isEvolved" class="cost">
        <template v-if="hasCost">{{ card.cost }}</template>
        <template v-if="isEvolved">E</template>
      </div>
      <div class="title">
        <h2 class="name">{{ card.name }}</h2>
        <p class="trait">
          <span v-if="isToken" class="token">Token</span>
          {{ traitList }}
        </p>
      </div>
    </div>
    <div class="content" :class="{'lengthy': card.lengthy}">
      <ul>
        <li v-for="(item, index) in card.text" :key="index">{{ item }}</li>
      </ul>
    </div>
    <div class="footer">
      <div v-if="hasAttack" class="attack">{{ card.attack }}</div>
      <div class="misc">
        <p class="type">{{ card.type }}</p>
        <p class="class">{{ card.class }}</p>
      </div>
      <div v-if="hasDefense" class="defense">{{ card.defense }}</div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import { useCardStore } from '@/stores/CardStore';
import IconClose from '@/components/icons/IconClose.vue';

export default {
  name: 'CardItem',
  props: {
    card: {
      default() {
        return {};
      },
      required: true,
      type: Object,
    }
  },
  components: {
    IconClose,
  },
  data: () => ({
    tempCost: '13',
    tempAttack: '10',
    tempDefense: '00',
  }),
  computed: {
    hasCost() {
      return this.card.cost !== undefined;
    },
    isEvolved() {
      return this.card.evolved;
    },
    traitList() {
      return this.card.trait.join(' / ');
    },
    isToken() {
      return this.card.rarity === 'T';
    },
    hasAttack() {
      return this.card.attack !== undefined;
    },
    hasDefense() {
      return this.card.defense !== undefined;
    },
  },
  methods: {
    ...mapActions(useCardStore, ['removeCard']),
  }
};
</script>

<style scoped lang="scss">
.card {
  position: relative;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  gap: 0.5rem;
  aspect-ratio: 240 / 335;
  inline-size: 15rem;
  border: 1px solid var(--color-black);
  padding: 0.5rem;
  background-color: var(--color-white);

  > * {
    min-inline-size: 0;
  }
}

.btn-remove {
  position: absolute;
  z-index: 1;
  inset-block-start: 0.5rem;
  inset-inline-end: 0.5rem;
  background-color: var(--color-destructive);
  color: var(--color-white);
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  border-radius: 50%;
  border: none;
  padding: 0.25rem;
  transition: 0.2s;
  aspect-ratio: 1;
  cursor: pointer;
  line-height: 0;

  svg {
    aspect-ratio: 1;
    inline-size: 1rem;
    transition: .2s;
  }

  &:hover,
  &:focus {
    background-color: var(--color-destructive-hover);

    svg {
      transform: rotate(90deg);
    }
  }
}

.header {
  display: grid;
  grid-template-columns: 1fr 5fr;
  gap: 0.5rem;
}

.footer {
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  gap: 0.5rem;

  .misc {
    grid-column: 2;
  }
}

.cost,
.attack,
.defense {
  font-size: 2.5rem;
  line-height: 0.8;
  letter-spacing: -0.03125em;
  text-align: center;
}

.cost {
  align-self: start;
}

.name {
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 1;
}

.trait {
  font-size: 0.75rem;
  line-height: 1.125rem;
}

.token {
  font-weight: 700;
  color: var(--color-white);
  padding: 0 0.25rem;
  background-color: var(--color-black);
  box-shadow: inset 0 0 0 1px var(--color-black);
  border-radius: 0.25rem;
}

.content {
  font-size: 1rem;
  line-height: 1.25;

  &.lengthy {
    font-size: 0.875rem;
  }

  ul {
    display: grid;
    gap: 0.5rem;
    list-style: none;
    padding-inline-start: 0;
  }
}

.type,
.attack,
.defense {
  justify-self: center;
}

.misc {
  display: flex;
  flex-direction: column;
  justify-content: center;

  p {
    font-size: 0.75rem;
    line-height: 1rem;
    text-align: center;

    &.type {
      font-weight: 700;
    }
  }
}

@media print {
  .btn-remove {
    display: none;
  }
}
</style>
