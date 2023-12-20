<template>
  <header>
    <div class="logo">
      <img src="@/assets/logo.svg" alt="" class="logo-img"/>
    </div>
    <MainMenu v-if="width > 900" class="main-menu"></MainMenu>
    <MiniMenu v-else class="mini-menu"></MiniMenu>
  </header>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import MainMenu from '@/components/shared/MainMenu.vue';
// eslint-disable-next-line import/no-unresolved
import MiniMenu from '@/components/shared/MiniMenu.vue';

export default {
  name: 'AppHeader',
  components: {
    MiniMenu,
    MainMenu,
  },
  mounted() {
    // eslint-disable-next-line no-restricted-globals
    addEventListener('resize', (ev) => {
      this.width = ev.target.innerWidth;
    });
  },
  data() {
    return {
      width: window.innerWidth,
    };
  },
};
</script>

<style scoped lang="scss">
header {
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-around;
  font-size: 18px;

  .logo {
    text-align: center;
    align-self: center;

    .logo-img {
      width: 197px;
      height: 38px;
    }
  }

  .main-menu {
    width: 70%;
    display: block;
  }

  .mini-menu {
    display: none;
  }
}

@media (max-width: 900px) {
  header {
    justify-content: flex-start;

    .main-menu {
      display: none;
    }

    .mini-menu {
      display: block;
    }
  }
}

</style>
