<template lang="pug">
div
  template(v-for="(value, key) in inputs")
    label.label
      p.text(v-if="isVisible(key)") {{ inputLabel(key) }}
      component.input(
        :is="componentName(key)"
        v-if="isVisible(key)"
        :value="value"
        :password="inputs.password"
        required
        autocomplete
        @input="updateInputsAndErrorMsgs($event, key)"
        @change="updateInputsAndErrorMsgs($event, key)"
      )
    p.error(v-if="errorMsgsInput[key]") {{ errorMsgsInput[key] }}
  p.error(v-if="errorMsgSubmit") {{ errorMsgSubmit }}
  button.button(
    type="button"
    :disabled="isError"
    @click="submit"
  ) {{ buttonName }}
</template>

<script>
import InputName from '@/components/InputName'
import InputEmail from '@/components/InputEmail'
import InputPassword from '@/components/InputPassword'
import InputPasswordConfirmation from '@/components/InputPasswordConfirmation'

export default {
  name: 'TheForm',
  components: {
    InputName,
    InputEmail,
    InputPassword,
    InputPasswordConfirmation
  },
  props: {
    page: {
      type: String,
      required: true
    },
    errorMsgSubmit: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      inputs: {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      },
      errorMsgsInput: {
        name: '',
        email: '',
        password: '',
        passwordConfirmation: ''
      }
    }
  },
  computed: {
    inputLabel() {
      return kind => {
        if (kind === 'name') return 'お名前'
        if (kind === 'email') return 'メールアドレス'
        if (kind === 'password') return 'パスワード'
        if (kind === 'passwordConfirmation') return '確認用パスワード'
        return ''
      }
    },
    componentName() {
      return kind => {
        if (kind === 'name') return 'InputName'
        if (kind === 'email') return 'InputEmail'
        if (kind === 'password') return 'InputPassword'
        if (kind === 'passwordConfirmation') return 'InputPasswordConfirmation'
        console.error(`Custom error: "${kind}" is not defined.`)
        return ''
      }
    },
    buttonName() {
      return this.isRegisterPage ? '新規登録' : 'ログイン'
    },
    isVisible() {
      return kind => {
        if (kind !== 'name' && kind !== 'passwordConfirmation') return true
        if (this.isRegisterPage) return true
        return false
      }
    },
    isRegisterPage() {
      if (this.page === 'register') return true
      return false
    },
    isError() {
      const errorMsgs = Object.assign(
        this.errorMsgsInput,
        {
          submit: this.errorMsgSubmit
        }
      )
      const errorList = Object.keys(errorMsgs).filter(key => errorMsgs[key])

      return errorList.length ? true : false
    }
  },
  methods: {
    updateInputsAndErrorMsgs({ value, errorMsg }, type) {
      const existsType = {}.hasOwnProperty.call(this.inputs, type)
      if (!existsType) {
        console.error(`Custom error: "${type}" is not defined in this.inputs.`)
      }

      this.inputs[type] = value
      this.errorMsgsInput[type] = errorMsg
    },
    submit() {
      const params = {
        name: this.inputs.name,
        email: this.inputs.email,
        password: this.inputs.password,
        passwordConfirmation: this.inputs.passwordConfirmation,
      }

      if (
        this.isRegisterPage &&
        (this.inputs.password !== this.inputs.passwordConfirmation)
      ) {
        this.inputs.passwordConfirmation = 'パスワードが一致していません。'
      }
      this.$emit('submit-button-click', params)
    }
  }
}
</script>

<style lang="scss" scoped>
.label {
  display: block;
  margin-top: 20px;
}
.text {
  font-size: 16px;
}
.input {
  margin: 3px auto 0;
  display: block;
  width: 100%;
  height: 40px;
  padding: 8px;
  box-sizing: border-box;
  border-radius: 3px;
  font-size: 16px;
  border: 1px solid #9E9E9E;
}
.error {
  color: #ff0000 !important;
  font-size: 11px;
  margin: 5px 0 0;
  text-align: left;
}
.button {
  appearance: none;
  width: 200px;
  display: block;
  height: 40px;
  border-radius: 3px;
  background: transparent;
  margin: 30px auto;
  background: $main_color;
  color: #fff;
  &:disabled {
    background: #dbddd8;
    box-shadow: 0 3px #d1d1d1;
  }
}
</style>

