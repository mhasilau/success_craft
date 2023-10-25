<template>
  <div class="apps">
    <div v-for="a in applications" :key="a.idx" class="line">
      <div v-for="item in a.items" :key="item.id" class="items">

        <div class="img">
          <img :src=[item.img] alt="">
        </div>
        <div class="title">
          <p>{{item.title}}</p>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import { applications } from '@/mock/applications-page/applications';

export default {
  name: 'AppsPage',
  data() {
    return {
      applications,
    };
  },
};

</script>

<style lang="scss" scoped>
.apps {
  .line {
    display: flex;
    justify-content: center;

    .items {
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;

      .img {
        width: 80%;
        display: inline-block;
        overflow: hidden;
        margin: 10px;

        img {
          width: 100%;
          transition: 1s;
          display: block;
          cursor: pointer;
        }

        img:hover {
          transform: scale(1.2)
        }
      }

      .title {
        position: relative;
        bottom: 25px;
        height: 20px;
        width: 80%;
        background-color: #3d3d3d;

        p {
          color: #fff;
          text-align: center;
        }
      }
    }
  }
}
</style>
