<template lang="pug">
BaseInput(
  :type="'name'"
  :name="'name'"
  :value="value"
  maxlength="20"
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
      const params = {
        value: newValue,
        errorMsg: newValue === ''
          ? 'お名前を入力してください。'
          : ''
      }

      this.$emit('input', params)
    }
  }
}
</script>

