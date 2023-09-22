<template>
  <div class="card">
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
};
</script>

<style scoped lang="scss">
.card {
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  gap: 0.5rem;
  aspect-ratio: 240 / 335;
  width: 15rem;
  border: 1px solid var(--color-black);
  padding: 0.5rem;

  > * {
    min-width: 0;
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
  border-radius: 0.125rem;
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
    padding-left: 0;
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
</style>