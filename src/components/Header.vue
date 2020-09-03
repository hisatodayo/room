<template lang="pug">
div.header
  p.logo room
  HeaderMenu.menu
</template>

<script>
import HeaderMenu from '@/components/HeaderMenu.vue'

export default {
  name: 'Header',
  components: {
    HeaderMenu
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 30px;
  background: $main-color;
  position: relative;
}
.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: $text-color;
  font-weight: bold;
  font-size: 20px;
}
.menu {
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
}
.anchor {
  font-size: 10px;
  color: $text-color;
}
</style>