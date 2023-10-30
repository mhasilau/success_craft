<template>
  <div class="info">
    <img src="@/assets/main-pic.png" alt="" />
    <div class="text">
      <h1>Welcome to Test Page</h1>
      <p>Front-end developer</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped lang="scss">
.info {
  position: relative;
  text-align: center;
  color: white;

  img {
    width: 100%;
  }

  .text {
    font-size: larger;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
