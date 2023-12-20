<template>
  <div class="main">
    <AppHeader/>
    <RouterView/>
    <AppFooter class="footer"/>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import AppFooter from '@/components/AppFooter.vue';
// eslint-disable-next-line import/no-unresolved
import AppHeader from '@/components/AppHeader.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style scoped lang="scss">
.main {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  min-width: 400px;

  .footer {
    margin-top: 5px;
  }
}
</style>
