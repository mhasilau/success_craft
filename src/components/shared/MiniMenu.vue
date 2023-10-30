<template>
  <div class="mini-menu">
    <AppLinks v-if="show"></AppLinks>
    <el-icon class="menu-icon" @click="showMenu"><Menu /></el-icon>
  </div>

</template>

<script>
import AppLinks from '@/components/shared/AppLinks.vue';
import {Menu} from "@element-plus/icons-vue";

export default {
  name: 'MiniMenu',
  components: {
    AppLinks,
    Menu
  },
  data() {
    return {
      show: false
    }
  },
  methods: {
    showMenu() {
      this.show = !this.show
    }
  }
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


@media (max-width: 900px) {


  .mini-menu {
    display: block;
  }

}
</style>
