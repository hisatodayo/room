<template lang="pug">
div.header
  p.logo room
  div.menu(@click="isActive = !isActive")
    span
    span
    span
  div.content(:class="{'active': isActive}")
    router-link.anchor(:to="'/logout'") ログアウト
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      isActive: false
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 45px;
  background: $main-color;
  position: relative;
}
.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: $sub-color;
  font-size: 28px;
}
.anchor {
  font-size: 10px;
  color: $dark-color;
}
.menu {
  width: 20px;
  height: 16px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-50%, -50%);
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
  position: fixed;
  top: 100%;
  left: 0;
  width: 100%;
  border-radius: 10px 10px 0 0;
  background: $light-color;
  height: 60%;
  &.active {
    transform: translateY(-100%);
  }
}
</style>