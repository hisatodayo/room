<template lang="pug">
div.postHead
  div.postHead_item(
    v-for="image in sortedImgArray"
    :key="image.id"
  )
    template(v-if="isImage(image.image_path)")
      img(:src="assetsPath(image.image_path)")
    tamplate(v-else)
      video(
        :src="assetsPath(image.image_path)"
        muted
        autoplay
        loop
      )
</template>

<script>
export default {
  name: 'PostHead',
  props: ['images'],
  data() {
    return {
    }
  },
  computed: {
    assetsPath() {
      return filename => {
        return `http://localhost:8888/storage/points_images/${filename}`
      }
    },
    isImage() {
      return filename => {
        const regex = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i
        const test = regex.test(filename)
        return test
      }
    },
    sortedImgArray() {
      const ImgAray = this.images
      ImgAray.sort(function(a,b){
        if(a.id > b.id) return -1;
        if(a.id < b.id) return 1;
        return 0;
      });
      return ImgAray
    }
  }
}
</script>

<style lang="scss" scoped>
.postHead {
  background: $main-color;
  margin-top: 10px;
  padding: 10px;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  box-sizing: content-box;
  height: 100px;
  &_item {
    display: inline-block;
    width: 100px;
    height: 100%;
    background: $light-color;
    border-radius: 6px;
    overflow: hidden;
    &:nth-child(n+2) {
      margin-left: 10px;
    }
    img,video {
      object-fit: cover;
      width: 100%;
      height: 100%
    }
  }
}
</style>
