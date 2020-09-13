<template lang="pug">
p {{text}}
</template>

<script>
export default {
  name: 'BaseText',
  props: {
    text: {
      type: [String, Boolean],
      required: false
    }
  }
}
</script>
<style lang="scss">
p {
  font-size: 16px;
  color: $text-color;
}
</style>