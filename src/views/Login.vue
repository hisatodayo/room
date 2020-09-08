<template lang="pug">
div.wrap
  Header(
    :menu="false"
  )
  div.head
    h1.title ログイン
  TheForm.form(
    :page="'login'"
    :errorMsgSubmit="errorMsg"
    @submit-button-click="submit"
  )
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import Header from '@/components/Header.vue'
import TheForm from '@/components/TheForm'

export default {
  name: 'Login',
  components: {
    TheForm,
    Header
  },
  data() {
    return {
      errorMsg: ''
    }
  },
  computed: {
    ...mapGetters('login', ['isLoginError'])
  },
  methods: {
    ...mapActions('login', ['login']),
    async submit({ email, password }) {
      await this.login({ email, password, remember: true })

      if (this.isLoginError) {
        this.errorMsgSubmit = 'メールアドレスまたはパスワードが異なります。'
        return
      }
      this.errorMsgSubmit = ''

      this.$router.push('/').catch(() => {})
    }
  }
}
</script>

<style lang="scss" scoped>
.wrap {
  position: relative;
  height: 100vh;
}
.head {
  padding: 30px 0 0;
}
.title {
  font-size: 20px;
  text-align: center;
  color: $text-color;
}
.form {
  width: 300px;
  margin: 30px auto;
  color: $text-color;
}
</style>
