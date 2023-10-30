<template>
  <div class="about">
    <div class="text">
      <div class="desc">
        <h1>About us</h1>
        <div class="demo-collapse">

          <el-collapse
              v-for="item in items"
              :key="item" accordion
          >
            <el-collapse-item
                :title=item.title
                :name=item.id
            >
              <div>{{item.body}}</div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
      <div class="buttons">
        <ButtonComp :type="'primary'">Read more</ButtonComp>
        <ButtonComp :type="'text'">Contact Us</ButtonComp>
      </div>

    </div>
    <div class="video">
      <iframe
          src="https://www.youtube.com/embed/2gwDjMqJepQ?si=au_E6La_oxdye3gz"
          title="YouTube video player"
          allow="accelerometer;
          autoplay; clipboard-write;
          ncrypted-media;
          gyroscope;
          picture-in-picture;
          web-share"
          allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
import ButtonComp from '@/components/shared/Buttons.vue';
import { about } from '@/mock/about-page/about';

export default {
  name: 'AboutPage',
  components: {
    ButtonComp,
  },
  data() {
    return {
      items: about,
    };
  },
};
</script>

<style scoped lang="scss">
.about {
  display: flex;
  justify-content: space-evenly;

  .text {
    width: 50%;

    .buttons {
      display: flex;
    }
  }

  .video {
    width: 40%;
    iframe {
      width: 100%;
      height: 45%;
    }
  }
}

@media (max-width: 900px) {

  .about {
    flex-direction: column-reverse;
    align-items: center;

    .video, .text {
      width: 80%;
    }
  }

}
</style>
