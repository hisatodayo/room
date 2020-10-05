<template lang="pug">
  div.talkWrap
    div.item(:class="{me: userId === myUserId}")
      div.item_head
        div.item_head_thum
          img(
            src="@/assets/img/thum.jpg"
          )
        BaseText.item_head_name(:text="name")
        BaseText.item_head_skill(:text="'beginner'") 
      div.item_asset(
        v-if="img"
        @click="showImgModal()"
      )
        img(
          v-if="isImage(img)"
          :src="assetsPath(img)"
        )
        video(
          v-else
          :src="assetsPath(img)"
          muted
          autoplay
          loop
        )
      BaseText.item_lead(
        v-if="body"
        :text='body'
      )
    p.time {{formatTime}}
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
    'time',
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
    },
    formatTime() {
      const date = new Date(this.time)
      const d = date.toLocaleTimeString()
      return d.slice(0, -3)
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$emit('scroll')
    });
  },
  methods: {
    showImgModal() {
      this.$emit("showImgModal", this.assetsPath(this.img))
    }
  }
}
</script>

<style lang="scss" scoped>
.talkWrap {
  &:nth-child(n+2) {
    margin-top: 15px;
  }
}
.time {
  display: inline-block;
  vertical-align: bottom;
  margin-left: 10px;
}
.item {
  display: inline-block;
  width: 280px;
  background: $forth-color;
  border-radius: 6px;
  padding: 5px 10px;
  &.me {
    background: $my-color;
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
