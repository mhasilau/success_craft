<template>
  <div class="framework" v-for="framework in frameworks">

    <div class="odd" v-if="framework.id%2===1">
      <div class="pic">
        <img :src=[framework.pic] alt="">
      </div>
      <div class="about">
        <div>
          <h1>{{framework.name}}</h1>
          <p>
            {{framework.disc}}
          </p>
        </div>
        <div class="buttons">
          <Button :type="'primary'"><a :href=[framework.link]>Read more</a></Button>
          <Button :type="'text'">Webinar</Button>
        </div>
      </div>
    </div>

    <div class="even" v-else>
      <div class="about">
        <div>
          <h1>{{framework.name}}</h1>
          <p>
            {{framework.disc}}
          </p>
        </div>

        <div class="buttons">
          <Button :type="'primary'"><a :href=[framework.link]>Read more</a></Button>
          <Button :type="'text'">Webinar</Button>
        </div>
      </div>
      <div class="pic">
        <img :src=[framework.pic] alt="">
      </div>
    </div>

  </div>
</template>

<script>
import Button from './Buttons.vue'
export default {
  name: 'Framework',
  components: {
    Button,
  },
  props: {
    frameworks: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
.buttons, .odd, .even, .framework {
  display: flex;
}
.odd, .even {
  justify-content: center;
}
.about {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  width: 40%;
}
.pic {
  width: 40%;
  height: 25%;

  img {
    width: 100%;
  }
}
</style>
