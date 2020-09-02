<template lang="pug">
div.postInputArea
  textarea.textarea(v-model="message")
  button.button(
    type="button"
    @click="send"
  ) 送信
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'PostInputArea',
  data() {
    return {
      message: ''
    }
  },
  computed: {
    ...mapGetters('user', ['getUserId'])
  },
  methods: {
    send() {
      const url = 'chat'
      const params = {
        user_id: this.getUserId,
        message: this.message
      }
      this.$axios.post(url, params)
        .then(() => {
          this.message = ''
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.postInputArea {
  width: 100%;
  background: #f1a483;
  margin-top: 20px;
  padding: 10px;
}
.textarea {
  background: #fff;
  border-radius: 4px;
  display: inline-block;
  vertical-align: middle;
  width: 85%;
  padding: 10px 5px;
}
.button {
  display: inline-block;
  background: #fff;
  vertical-align: middle;
  margin-left: 10px;
  padding: 2px 5px;
  border-radius: 4px;
}
</style>