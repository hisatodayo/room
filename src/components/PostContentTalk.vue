<template lang="pug">
  div.item(:class="{me: userId === myUserId}")
    div.item_head
      div.item_head_thum
        img(
          src="@/assets/img/thum.jpg"
        )
      BaseText.item_head_name(:text="name")
      BaseText.item_head_skill(:text="'beginner'") 
    div.item_asset(v-if="img")
      template(v-if="isImage(img)")
        img(:src="assetsPath(img)")
      tamplate(v-else)
        video(
          :src="assetsPath(img)"
          muted
          autoplay
          loop
        )
    template(v-if="body")
      BaseText.item_lead(:text='body')
</template>

<script>

import BaseText from '@/components/BaseText.vue'

export default {
  name: 'PostContentTalk',
  components: {
    BaseText
  },
  props: [
    'name',
    'body',
    'img',
    'userId',
    'myUserId'
  ],
  data() {
    return {
      messages: []
    }
  },
  computed: {
    isImage() {
      return filename => {
        const regex = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i
        const test = regex.test(filename)
        return test
      }
    },
    assetsPath() {
      return filename => {
        return `http://localhost:8888/storage/points_images/${filename}`
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$emit('scroll')
    });
  },
}
</script>

<style lang="scss" scoped>
  .item {
    max-width: 280px;
    background: $dark-color;
    border-radius: 6px;
    padding: 5px 10px;
    &.me {
      background: $sub-color;
    }
    &:nth-child(n+2) {
      margin-top: 15px;
    }
    &_head {
      display: flex;
      align-items: center;
      &_thum {
        width: 30px;
        height: 30px;
        background: #fff;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 10px;
        img {
          display: block;
          height: 100%;
        }
      }
      &_name {
        font-size: 16px;
        color: #fff;
      }
      &_skill {
        background: skyblue;
        border-radius: 4px;
        color: #fff;
        font-size: 12px;
        padding: 2px 5px;
        margin-left: auto;
      }
    }
    &_asset {
      overflow: hidden;
      position: relative;
      margin: 10px 0 0;
      img,video {
        height: 125px;
        object-fit: cover;
      }
    }
    &_lead {
      margin-top: 10px;
      font-size: 14px;
      color: #fff;
      padding-left: 5px;
    }
  }
</style>
