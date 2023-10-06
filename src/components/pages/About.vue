<template>
  <div class="about">
    <div class="text">
      <div class="desc">
        <h1>About us</h1>
        <div class="demo-collapse">
          <el-collapse accordion v-for="item in items">
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
        <Button :type="'primary'">Read more</Button>
        <Button :type="'text'">Contact Us</Button>
      </div>

    </div>
    <div class="video">
      <iframe
          src="https://www.youtube.com/embed/2gwDjMqJepQ?si=au_E6La_oxdye3gz"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen></iframe>
    </div>
  </div>
</template>

<script>
import Button from '@/components/shared/Buttons.vue'
import { about } from '@/mock/about-page/about'
export default {
	name: 'AboutPage',
  components: {
    Button,
  },
  data() {
    return {
      items: about
    }
  }
}
</script>

<style scoped lang="scss">
.about {
  display: flex;
  justify-content: space-evenly;
  //width: 100%;

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
</style>
