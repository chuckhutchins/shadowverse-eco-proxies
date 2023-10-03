<template>
  <button
    class="btn"
    :class="{ 'icon': isIcon }"
    :disabled="isDisabled"
    type="button"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',
  props: {
    isDisabled: {
      default: false,
      required: false,
      type: Boolean,
    },
    isIcon: {
      default: false,
      required: false,
      type: Boolean,
    },
  },
};
</script>

<style scoped lang="scss">
.btn {
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
</style>
