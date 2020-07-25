<template lang="pug">
BaseInput(
  :type="'email'"
  :name="'email'"
  :value="value"
  maxlength="254"
  @input="propagation"
  @change="propagation"
)
</template>

<script>
import BaseInput from '@/components/BaseInput'

export default {
  name: 'InputEmail',
  components: {
    BaseInput
  },
  props: {
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    propagation(newValue) {
      const regex = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/
      const params = {
        value: newValue,
        errorMsg: regex.test(newValue)
          ? ''
          : '無効なメールアドレスです。'
      }

      this.$emit('input', params)
    }
  }
}
</script>
