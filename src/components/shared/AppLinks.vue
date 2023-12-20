<template>
  <nav>
    <RouterLink to="/home">HOME</RouterLink>
    <RouterLink to="/about">ABOUT US</RouterLink>
    <RouterLink to="/frameworks">FRAMEWORKS</RouterLink>
    <RouterLink to="/applications">APPLICATIONS</RouterLink>
    <RouterLink to="/contact">CONTACT US</RouterLink>
  </nav>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
nav {
  width: 20%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-self: center;
  text-align-last: end;

  a {
    padding: 0 10px;
    text-decoration: none;
    color: #3d3d3d;
  }
  a:hover {
    background-color: #3d3d3d;
    color: white;
  }
}

@media (max-width: 900px) {
  nav {
    display: inline-grid;
    z-index: 100;
    position: fixed;
    top: 0;
    right: 30px;

    a {
      padding: 10px 5px;
      color: red;
      background-color: white;
    }
  }
}
</style>
