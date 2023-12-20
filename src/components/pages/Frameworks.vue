<template>
  <FrameworkComp :frameworks="frameworks"/>
</template>

<script>
// eslint-disable-next-line import/no-unresolved
import FrameworkComp from '@/components/shared/Framework.vue';
// eslint-disable-next-line import/extensions,import/no-unresolved
import { frameworks } from '@/mock/frameworks-page/frameworks';

export default {
  name: 'FrameworksPage',
  components: {
    FrameworkComp,
  },
  data() {
    return {
      frameworks: [],
    };
  },
  methods: {
    async getFrameworks() {
      try {
        this.frameworks = frameworks;
      } catch (e) {
        alert(e.message);
      }
    },
  },
  mounted() {
    this.getFrameworks();
  },
};
</script>

<style></style>
