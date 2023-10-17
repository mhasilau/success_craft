<template>
  <div class="main">
    <AppHeader />
    <RouterView />
    <AppFooter class="footer" />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
}
</script>

<style scoped lang="scss">
  .main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;

    .footer {
      margin-top: auto;
    }
  }
</style>
