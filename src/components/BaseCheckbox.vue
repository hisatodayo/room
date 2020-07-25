<template lang="pug">
div.wrap
  BaseInput.checkbox(
    :type="'checkbox'"
    :name="name"
    :value="value"
    :checked="true"
    @change="onChange"
  )
  span.box
</template>

<script>
import BaseInput from '@/components/BaseInput'

export default {
  name: 'BaseCheckbox',
  components: {
    BaseInput
  },
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    name: {
      type: String,
      required: true
    },
    value: {
      type: String,
      required: true
    },
    checked: {
      type: Boolean,
      required: true
    }
  },
  methods: {
    onChange(newValue) {
      this.$emit('change', newValue)
    }
  }
}
</script>

<style lang="scss" scoped>
@keyframes shrink-bounce {
  0% {
    transform scale(1)
  }
  33% {
    transform scale(.85)
  }
  100% {
    transform scale(1)
  }
}

@keyframes checkbox-check {
  0% {
    width 0
    height 0
  }
  33% {
    width 5px
    height 0
  }
  100% {
    width 5px
    height 10px
    border-color #111
  }
}

.checkbox {
  &:checked + .box {
    border: (2.5px * 4) solid $main_color;
    animation: shrink-bounce .2s cubic-bezier(.4, .0, .23,1);
    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 0;
      border-right: 1px solid transparent;
      border-bottom: 1px solid transparent;
      transform: translate3d(-90%, -90%, 0) rotate(45deg);
      transform-origin: 0% 100%;
      animation: checkbox-check 125ms 250ms cubic-bezier(.4, .0, .23,1) forwards;
    }
  }
}

.box {
  width: 2.5px * 4 * 2;
  height: 2.5px * 4 * 2;
  background: transparent;
  border: 1px solid #9E9E9E;
  border-radius: 50%;
  cursor: pointer;
  transition: all .25s cubic-bezier(.4, .0, .23, 1);
  position: relative;
}
</style>
