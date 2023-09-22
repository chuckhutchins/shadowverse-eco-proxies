<template>
  <footer class="footer">
    <p>Shadowverse Evolve Eco Proxies is in no way affiliated with Cygames or Bushiroad. Shadowverse Evolve and all associated images and card text are copyright © Cygames and Bushiroad. All rights reserved.</p>
    <p>Made with 💀</p>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
};
</script>

<style scoped lang="scss">
.footer {
  display: grid;
  gap: 0.5rem;
  border-top: 2px solid;
  padding-top: 1rem;

  .nav {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
}
</style>