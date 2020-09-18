<template lang="pug">
div.postInputArea
  p.alertMsg(v-show="activeAlert") {{alertMsg}}
  label.fileBotton(:class="{selected: file}")
    <i class="fas fa-file-image"></i>
    input.fileBotton_input(
      type="file"
      @change="selectedFile"
    )
  textarea.textarea(v-model="message" ref="adjust_textarea" @keydown="adjustHeight" @focus="inputText")
  button.button(
    type="button"
    :class="{active: this.activeSend}"
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
      file: null,
      activeAlert: false,
      alertMsg: ''
    }
  },
  computed: {
    ...mapGetters('user', ['getUserId']),
    activeSend() {
      return this.message || this.file
    }
  },
  methods: {
    selectedFile(e) {
      // 選択された File の情報を保存しておく
      e.preventDefault()
      let files = e.target.files
      this.file = files[0]
    },
    send() {
      if (!this.activeSend) {
        this.alert('入力してね!');
        return 
      }
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
    },
    inputText() {
      this.activeAlert = false;
    },
    alert(msg) {
      this.activeAlert = true;
      this.alertMsg = msg
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
  flex-wrap: wrap;
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
  &.active {
    background: $yellow;
  }
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
  position: relative;
  &.selected {
    &:after {
      content: "1";
      display: block;
      text-align: center;
      width: 15px;
      height: 15px;
      border: 3px solid $main-color;
      background: $light-color;
      color: $main-color;
      border-radius: 50%;
      position: absolute;
      top: 0%;
      right: 0%;
      transform: translate(50%, -50%);
    }
  }
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
.alertMsg {
  flex-basis: 100%;
  text-align: center;
  color: #FC9D9D;
  font-size: 14px;
  padding-bottom: 5px;
}
</style>