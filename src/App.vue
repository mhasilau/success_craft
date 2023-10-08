<template>
  <div class="main">
<!--    <div class="header">-->
<!--      <p>header</p>-->
<!--    </div>-->
<!--    <div class="body">-->
<!--      <p>body</p>-->
<!--    </div>-->
<!--    <div class="footer">-->
<!--      <p>footer</p>-->
<!--    </div>-->
    <AppHeader/>
    <RouterView/>
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
    display: flex;
    flex-direction: column;
    height: 100%;
    .header {

    }
    .body {

    }
    .footer {
      position: absolute;
      bottom: 0;
      width: 100%;
    }
  }
</style>
