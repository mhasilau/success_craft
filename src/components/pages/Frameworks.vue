<template>
  <FrameworkComp :frameworks="frameworks"/>
</template>

<script>
import FrameworkComp from '@/components/shared/Framework.vue';
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
        console.log(e);
      }
    },
  },
  mounted() {
    this.getFrameworks();
  },
};
</script>

<style></style>
