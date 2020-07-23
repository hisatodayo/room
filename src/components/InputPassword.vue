<template lang="pug">
BaseInput(
  :type="'password'"
  :name="name"
  :value="value"
  minlength="8"
  @input="propagation"
  @change="propagation"
)
</template>

<script>
import BaseInput from '@/components/BaseInput'

export default {
  name: 'InputPassword',
  components: {
    BaseInput
  },
  props: {
    value: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: false,
      default: 'password'
    }
  },
  methods: {
    propagation(newValue) {
      const regex = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,100}$/i
      const params = {
        value: newValue,
        errorMsg: regex.test(newValue)
          ? ''
          : '無効なパスワードです。\n半角英数字を含んだ8-100文字の範囲内で入力してください。'
      }

      this.$emit('input', params)
    }
  }
}
</script>

