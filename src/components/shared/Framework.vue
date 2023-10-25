<template>
  <div v-for="framework in frameworks" :key="framework.id" class="framework">

    <div v-if="framework.id%2===1" class="odd">
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
          <ButtonComp :type="'primary'"><a :href=[framework.link]>Read more</a></ButtonComp>
          <ButtonComp :type="'text'">Webinar</ButtonComp>
        </div>
      </div>
    </div>

    <div v-else class="even">
      <div class="about">
        <div>
          <h1>{{framework.name}}</h1>
          <p>
            {{framework.disc}}
          </p>
        </div>

        <div class="buttons">
          <ButtonComp :type="'primary'"><a :href=[framework.link]>Read more</a></ButtonComp>
          <ButtonComp :type="'text'">Webinar</ButtonComp>
        </div>
      </div>
      <div class="pic">
        <img :src=[framework.pic] alt="">
      </div>
    </div>

  </div>
</template>

<script>
import ButtonComp from './Buttons.vue';

export default {
  name: 'FrameworkComp',
  components: {
    ButtonComp,
  },
  props: {
    frameworks: {
      type: Array,
      required: true,
    },
  },
};
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
