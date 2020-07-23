<template lang="pug">
InputPassword(
  :value="value"
  :name="'password_confirmation'"
  @input="propagation"
  @change="propagation"
)
</template>

<script>
import InputPassword from '@/components/InputPassword'

export default {
  name: 'InputPasswordConfirmation',
  components: {
    InputPassword
  },
  props: {
    value: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    }
  },
  methods: {
    propagation(params) {
      if (params.value !== this.password) {
        params.errorMsg = 'パスワードが一致していません。'
      }

      this.$emit('input', params)
    }
  }
}
</script>

