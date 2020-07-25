<template lang="pug">
input(
  v-model="innerValue"
  :type="type"
  :name="name"
  @change="onChange"
  @blur="onBlur"
)
</template>

<script>
export default {
  name: 'BaseInput',
  props: {
    type: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    }
  },
  computed: {
    innerValue: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue)
      }
    }
  },
  methods: {
    onChange() {
      this.$emit('change', this.innerValue)
    },
    onBlur() {
      this.$emit('blur', this.innerValue)
    }
  }
}
</script>
