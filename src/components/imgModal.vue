<template lang="pug">
  div.modalBg
    div.modal
      img(
        v-if="isImage(path)"
        :src="path"
      )
      video(
        v-else
        :src="path"
        muted
        autoplay
        loop
      )
    i.close(
      class="far fa-times-circle"
      @click="closeModal"
    )
    i.prev(class="far fa-arrow-alt-circle-left")
    i.next(class="far fa-arrow-alt-circle-left")
</template>

<script>
  export default {
  name: 'imgModal',
  props: {
    path: {
      type: String,
      default: "",
      required: false
    }
  },
  created() {
    console.log(this.path)
  },
  computed: {
    isImage() {
      return filename => {
        const regex = /\.(gif|jpe?g|tiff?|png|webp|bmp)$/i
        const test = regex.test(filename)
        console.log(test)
        return test
      }
    }
  },
  methods: {
    closeModal() {
      this.$emit("closeModal")
    }
  }
}
</script>

<style lang="scss" scoped>
.modalBg {
  background: rgba(0,0,0,.7);
  position: fixed;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  .modal {
    width: 85vw;
    height: 85vw;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .close {
    position: absolute;
    top: 80%;
    left: 15vw;
    color: $warning-color;
    font-size: 36px;
  }
  .next,.prev {
    position: absolute;
    top: 80%;
    color: $third-color;
    font-size: 36px;
  }
  .next {
    right: 15vw;
    transform: rotate(180deg);
  }
  .prev {
    left: 45vw;
  }
  img,video {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
}
</style>
