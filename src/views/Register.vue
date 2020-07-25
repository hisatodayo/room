<template lang="pug">
div.wrap
  div.head
    h1.title アカウント作成
  TheForm.form(
    :page="'register'"
    :errorMsgSubmit="errorMsg"
    @submit-button-click="submit"
  )
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

import TheForm from '@/components/TheForm'

export default {
  name: 'Register',
  components: {
    TheForm
  },
  data() {
    return {
      errorMsg: ''
    }
  },
  computed: {
    ...mapGetters('register', ['isRegisterError'])
  },
  methods: {
    ...mapActions('register', ['register']),
    async submit({ name, email, password, passwordConfirmation }) {
      const params = {
        name,
        email,
        password,
        password_confirmation: passwordConfirmation
      }
      await this.register(params)

      if (this.isRegisterError) {
        this.errorMsg = 'メールアドレスまたはパスワードが無効です。'
        return
      }
      this.errorMsg = ''

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
  font-weight: bold;
  text-align: center;
}
.form {
  width: 300px;
  margin: 30px auto;
}
</style>
