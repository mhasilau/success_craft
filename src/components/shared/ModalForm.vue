<template>
  <div class="modal">
    <div class="entries">
      <slot></slot>
        <ButtonComp type="primary" class="confirm"  @click="closeForm">Close</ButtonComp>
    </div>
  </div>
</template>

<script>
import ButtonComp from '@/components/shared/Buttons.vue';

export default {
  components: {
    ButtonComp,
  },
  name: 'ModalForm',
  emits: ['close'],
  methods: {
    closeForm() {
      this.$emit('close', false);
    },
  },
};
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
      //height: 60%;
      background-color: cornsilk;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 20px 0;

      .confirm {
        //position: relative;
        //bottom: 10px;
        align-self: self-end;
      }
    }
  }
</style>
