<template lang="pug">
div.postInputArea
  textarea.textarea(v-model="message")
  input(
    type="file"
    @change="selectedFile"
  )
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
      message: '',
      file: null
    }
  },
  computed: {
    ...mapGetters('user', ['getUserId'])
  },
  methods: {
    selectedFile(e) {
      // 選択された File の情報を保存しておく
      e.preventDefault()
      let files = e.target.files
      this.file = files[0]
    },
    send() {
      const url = 'chat'
      // FormData を利用して File を POST する
      let formData = new FormData()
      formData.append('user_id', this.getUserId)
      if (this.file) {
        formData.append('photo', this.file)
      }
      formData.append('message', this.message)
      let config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      }
      this.$axios.post(url, formData, config)
        .then(() => {
          this.message = '',
          this.file = null
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.postInputArea {
  background: $main-color;
  padding: 10px;
}
.textarea {
  background: $light-color;
  border-radius: 4px;
  display: inline-block;
  vertical-align: middle;
  width: 85%;
  padding: 10px 5px;
}
.button {
  display: inline-block;
  background: $light-color;
  vertical-align: middle;
  margin-left: 10px;
  padding: 2px 5px;
  border-radius: 4px;
}
</style>