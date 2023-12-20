<template>
  <div class="mini-menu">
    <AppLinks v-if="show" @mouseleave="showMenu"></AppLinks>
    <el-icon class="menu-icon" @click.stop="showMenu"><Menu /></el-icon>
  </div>

</template>

<script>
import { Menu } from '@element-plus/icons-vue';
// eslint-disable-next-line import/no-unresolved
import AppLinks from '@/components/shared/AppLinks.vue';

export default {
  name: 'MiniMenu',
  components: {
    AppLinks,
    // eslint-disable-next-line vue/no-reserved-component-names
    Menu,
  },
  props: {
    width: null,
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    showMenu() {
      this.show = !this.show;
    },
  },
};
</script>

<style lang="scss" scoped>

  .mini-menu {
    display: none;

    .menu-icon {
      position: fixed;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
  }
</style>
