<template>
  <header class="header">
    <nav class="nav">
      <h1>Shadowverse Evolve Eco Proxies</h1>
      <ul class="nav-items">
        <li>
          <AppButton @click="printCards">
            Print
          </AppButton>
        </li>
        <li>
          <AppButton @click="openHelpDialog">
            Help
          </AppButton>
        </li>
      </ul>
    </nav>
  </header>
  <AppDialog ref="helpDialog">
    <template v-slot:header>
      <h2>Help</h2>
    </template>
    <h3>Recommended Settings</h3>
    <p>You should be fine switching between US Letter and A4. Folks with A4 paper will have to let me know if that's not the case.</p>
    <ul>
      <li>Orientation: Portrait</li>
      <li>Scale: 100%</li>
      <li>Margins: Minimum</li>
    </ul>
    <p>If you check the "Print backgrounds" setting, the box around the "Token" trait gets filled in.</p>
    <h3>Issues</h3>
    <p>Do I have a typo somewhere in the card data? Do you want me to add specific cards? Is something just not working? Please create an issue in the <a href="https://github.com/chuckhutchins/shadowverse-eco-proxies/issues" target="_blank">Issues tab</a>.</p>
    <h3>Support</h3>
    <p>This is totally not necessary, but if you'd like to, I have a <a href="https://ko-fi.com/brokendivsociety" target="_blank">Ko-Fi</a> you can toss a dollar or two at if you like the application.</p>
  </AppDialog>
</template>

<script>
import AppButton from '@/components/common/AppButton.vue';
import AppDialog from '@/components/common/AppDialog.vue';

export default {
  name: 'TheHeader',
  components: {
    AppButton,
    AppDialog,
  },
  methods: {
    openHelpDialog() {
      this.$refs.helpDialog.openDialog();
    },
    printCards() {
      window.print();
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
    justify-content: space-between;
    align-items: center;
  }

  .nav-items {
    display: flex;
    gap: 1rem;
    list-style-type: none;
    padding-left: 0;
  }
}

@media print {
  header {
    display: none;
  }
}
</style>