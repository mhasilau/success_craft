<template>
  <div class="contact-us">
    <h4>Dear {{form.fName}} {{form.lName}}!</h4>
    <p>We have received your request and will contact you shortly</p>

    <pre>form</pre>
  </div>
</template>

<script>
export default {
  name: 'ModalContactUs',
  props: {
    form: {
      type: Object
    },
  }
}
</script>

<style lang="scss" scoped>

</style>