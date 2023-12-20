<template>
  <div v-for="framework in frameworks" :key="framework.id" class="framework">

    <div v-if="framework.id%2===1" class="odd">
      <div class="about">
        <div class="f">
          <div class="pic">
            <img :src=[framework.pic] alt="">
          </div>
          <div>
            <h1>{{ framework.name }}</h1>
            <p>
              {{ framework.disc }}
            </p>
          </div>

        </div>
        <div class="buttons">
          <ButtonComp :type="'primary'"><a :href=[framework.link]>Read more</a></ButtonComp>
          <ButtonComp :type="'text'">Webinar</ButtonComp>
        </div>
      </div>

    </div>

    <div v-else class="even">
      <div class="about">
        <div class="f">
          <div>
            <h1>{{ framework.name }}</h1>
            <p>
              {{ framework.disc }}
            </p>
          </div>

          <div class="pic">
            <img :src=[framework.pic] alt="">
          </div>

        </div>
        <div class="buttons">
          <ButtonComp :type="'primary'"><a :href=[framework.link]>Read more</a></ButtonComp>
          <ButtonComp :type="'text'">Webinar</ButtonComp>
        </div>
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

<style lang="scss" scoped>
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
  padding: 5px;

  img {
    width: 100%;
  }
}

@media (max-width: 900px) {

  .odd, .even {
    display: block;
    align-self: start;
    position: relative;

    .about {
      width: 90%;

      .f {
        display: flex;
        width: 100%;

        .pic {
          align-self: center;
          width: 100%;
        }
      }

      .buttons {
        justify-content: space-between;
      }
    }
  }
}
</style>
