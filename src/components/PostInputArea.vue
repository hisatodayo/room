<template lang="pug">
div.postInputArea
  label.fileBotton
    <i class="fas fa-file-image"></i>
    input.fileBotton_input(
      type="file"
      @change="selectedFile"
    )
  textarea.textarea(v-model="message" ref="adjust_textarea" @keydown="adjustHeight")
  button.button(
    type="button"
    @click="send"
  ) <i class="fas fa-paper-plane"></i>
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
    },
    adjustHeight(){
      const textarea = this.$refs.adjust_textarea
      const resetHeight = new Promise(function(resolve) {
        resolve(textarea.style.height = 'auto')
      });
      resetHeight.then(function(){
        textarea.style.height = textarea.scrollHeight + 'px'
      });
    }
  }
}
</script>

<style lang="scss" scoped>
.postInputArea {
  background: $main-color;
  padding: 10px;
  display: flex;
  align-items: flex-end;
}
.textarea {
  background: $light-color;
  border-radius: 4px;
  flex-basis: 75%;
  margin-left: 2.5%;
  resize: none;
  font-size: 16px;
  line-height: 1;
  padding: 5px;
  height: 30px;
}
.button {
  background: $light-color;
  margin-left: 2.5%;
  flex-basis: 10%;
  border-radius: 4px;
  height: 30px;
  .fas {
    display: block;
    line-height: 30px;
    text-align: center;
    font-size: 18px;
  }
}
.fileBotton {
  flex-basis: 10%;
  background: $sub-color;
  border-radius: 4px;
  height: 30px;
  .fas {
    display: block;
    line-height: 30px;
    text-align: center;
    font-size: 22px;
  }
  &_input {
    display: none;
  }
}
</style>