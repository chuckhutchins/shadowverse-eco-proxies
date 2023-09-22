<template>
  <header class="header">
    <nav class="nav">
      <h1>Shadowverse Evolve Eco Proxies</h1>
      <ul class="nav-items">
        <li>
          <button @click="printCards" type="button">
            Print
          </button>
        </li>
        <li>
          <button @click="openHelpDialog" type="button">
            Help
          </button>
        </li>
      </ul>
    </nav>
  </header>
  <dialog
    ref="dialog"
    class="dialog"
    inert
    @click:outside="closeHelpDialog"
    @keydown.esc="closeHelpDialog"
  >
    <div class="header">
      <h2>Help</h2>
    </div>
    <button
      ref="closeBtn"
      class="btn-close"
      type="button"
      @click="closeHelpDialog"
    >
      <IconClose />
      <span class="sr-only">Close help dialog</span>
    </button>
    <div class="content">
      asdf
    </div>
  </dialog>
</template>

<script>
import IconClose from '@/components/icons/IconClose.vue';

export default {
  name: 'TheHeader',
  components: {
    IconClose,
  },
  methods: {
    openHelpDialog() {
      // TODO: open help dialog
      // TODO: do i allow borders to be toggled on/off? and maybe just do dots?
      // TODO: give instructions on the filled in or outlined token box
      console.log('opening help dialog');
      this.$refs.dialog.removeAttribute('inert');
      this.$refs.dialog.showModal();
    },
    closeHelpDialog() {
      console.log('closing help dialog');
      this.$refs.dialog.close();
      this.$refs.dialog.setAttribute('inert', '');
    },
    printCards() {
      // TODO: trigger system print dialog
      console.log('triggering print dialog');
    },
  }
};
</script>

<style scoped lang="scss">
.header {
  border-block-end: 2px solid;
  padding-block-end: 1rem;

  .nav {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .nav-items {
    // TODO: style navbar
    display: none;
  }
}

.dialog {
  position: fixed;
  inset: 0;
  margin: auto;
  display: grid;
  grid-template-rows: minmax(1.5rem, 1fr);
  grid-template-columns: 1fr 1rem;
  gap: 1rem 0.5rem;
  padding: 1rem;
  background-color: var(--color-white);
  border: none;
  box-shadow: var(--card-box-shadow);
  border-radius: 0.5rem;
  inline-size: 30rem;
  max-inline-size: min(90vw, 30rem);
  max-block-size: min(80vh, 100%);
  max-block-size: min(80dvb, 100%);
  overflow: hidden;
  transition: opacity .2s ease;

  @media (min-width: 48rem) {
    padding: 1.5rem;
    gap: 1.5rem 0.5rem;
  }

  > * {
    min-inline-size: 0;
  }

  &:not([open]) {
    pointer-events: none;
    opacity: 0;
  }

  &::backdrop {
    background-color: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(0.5rem);
  }

  .btn-close {
    position: absolute;
    inset-block-start: 0.5rem;
    inset-inline-end: 0.5rem;
    background-color: transparent;
    border-radius: 50%;
    border: none;
    padding: 0.25rem;
    transition: 0.2s;
    aspect-ratio: 1;
    cursor: pointer;
    line-height: 0;

    svg {
      aspect-ratio: 1;
      inline-size: 2rem;
      transition: .2s;
    }

    &:hover,
    &:focus {
      background-color: var(--color-light-gray);

      svg {
        transform: rotate(90deg);
      }
    }
  }

  .content,
  .footer {
    grid-column: span 2;
  }
}

@media print {
  header {
    display: none;
  }
}
</style>