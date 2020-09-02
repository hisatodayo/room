<template lang="pug">
div.header
  p.logo room
  router-link.anchor(:to="'/logout'") ログアウト
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="scss" scoped>
.header {
  height: 30px;
  background: #fff;
  position: relative;
}
.logo {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.anchor {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  font-size: 10px;
}
</style>