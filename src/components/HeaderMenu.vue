<template lang="pug">
div.wrap
  div.menu
    span
    span
    span
  div.content(:class="{'active': isActive}")
    router-link.anchor(:to="'/logout'") ログアウト
</template>

<script>
export default {
  name: "HeaderMenu",
  data() {
    return {
      isActive: false
    }
  }
}
</script>

<style lang="scss">
.menu {
  width: 20px;
  height: 16px;
  position: relative;
}
span {
  display: block;
  width: 20px;
  height: 2px;
  border-radius: 2px;
  background: $light-color;
  position: absolute;
  left: 0;
  right: 0;
  &:nth-child(1) {
    top: 0;
  }
  &:nth-child(2) {
    top: 50%;
    transform: translateY(-50%);
  }
  &:nth-child(3) {
    bottom: 0;
  }
}
.content {
  display: none;
  position: fixed;
  top: 100vh;
  width: 100%;
  border-radius: 10px 0;
  background: $light-color;
  &.active {
    top: auto;
    bottom: 0;
  }
}
</style>