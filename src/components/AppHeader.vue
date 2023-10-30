<template>
  <header>
    <div class="logo">
      <img src="@/assets/logo.svg" alt="" class="logo-img" />
    </div>
<!--    <nav>-->
<!--      <RouterLink to="/home">HOME</RouterLink>-->
<!--      <RouterLink to="/about">ABOUT US</RouterLink>-->
<!--      <RouterLink to="/frameworks">FRAMEWORKS</RouterLink>-->
<!--      <RouterLink to="/applications">APPLICATIONS</RouterLink>-->
<!--      <RouterLink to="/contact">CONTACT US</RouterLink>-->
<!--    </nav>-->
    <MainMenu class="main-menu"></MainMenu>
    <MiniMenu class="mini-menu"></MiniMenu>
  </header>
</template>

<script>
import MainMenu from '@/components/shared/MainMenu.vue';
import MiniMenu from '@/components/shared/MiniMenu.vue';

export default {
  name: 'AppHeader',
  components: {
    MiniMenu,
    MainMenu,
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
}

.logo {
  text-align: center;
  align-self: center;

  .logo-img {
    width: 197px;
    height: 38px;
  }
}

.main-menu {
  display: block;
}

.mini-menu {
  display: none;
}

@media (max-width: 900px) {

  .main-menu {
    display: none;
  }

  .mini-menu {
    display: block;
  }
  header {
    justify-content: flex-start;
  }
}

</style>
