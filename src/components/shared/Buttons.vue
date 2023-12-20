<template>
  <div class="btns">
    <el-button class="button" :type=type>
      <slot></slot>
    </el-button>
  </div>
</template>

<script>
export default {
  name: 'ButtonComp',
  props: {
    type: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.btns {
  .button {
    border: 1px solid #409eff;
    border-radius: 7px;
    width: 150px;
    margin-right: 20px;
    margin-top: 10px;
  }
}

</style>
