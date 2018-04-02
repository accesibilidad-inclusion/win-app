<!--
Ejemplo obtenido de: https://jsfiddle.net/3uznmk72/154/
-->
<template>
  <label class="button-option">
    <input type="radio" :value="realValue" :name="name" v-model="buttonValue">
    <span :class="classes"><slot></slot></span>
  </label>
</template>

<script>
export default {
  name: 'ButtonOption',
  props: ['name', 'value', 'realValue', 'isLarge'],
  computed: {
    buttonValue: {
      get: function () {
        return this.value
      },
      set: function () {
        this.$emit('change', this.realValue)
      }
    },
    classes: function () {
      return ['btn', (this.isLarge ? 'btn-lg' : '')].join(' ')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "./../../assets/sass/_custom.scss";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/buttons";

.button-option {
  display: block;
  & .btn {
    @extend .btn-light;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    color: $gray;
    border: none;
    &.btn-lg {
      font-size: $h1-font-size;
    }
    &:hover {
      background-color: $white;
    }
  }
  & input[type="radio"] {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  & input[type="radio"]:focus ~ .btn {
    box-shadow: $input-btn-focus-box-shadow;
  }
  & input[type="radio"]:checked ~ .btn {
    box-shadow: inset 0 0 0 5px $brand-green;
  }
}
</style>
