<template>
  <div class="modal">
    <div class="entries">
      <slot></slot>
      <Button @click="closeForm" type="primary">Close</Button>
    </div>
  </div>
</template>

<script>
import Button from "@/components/shared/Buttons.vue";
export default {
  components: {
    Button
  },
  name: 'ModalForm',
  emits: ['close'],
  methods: {
    closeForm() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
  .modal {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    .entries {
      width: 60%;
      height: 60%;
      background-color: cornsilk;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  }
</style>