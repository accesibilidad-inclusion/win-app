<!--
Ejemplo obtenido de: https://jsfiddle.net/3uznmk72/154/
-->
<template>
  <label class="button-sex">
    <input type="radio" name="sex" :value="defaultValue" v-model="buttonValue">
    <span class="wrapper">
      <span class="icon">
        <svgicon :name="icon" width="22" height="50" color="#fff"></svgicon>
      </span>
      <span class="text">
        <slot></slot>
      </span>
    </span>
  </label>
</template>

<script>
import '@/assets/icons/man'
import '@/assets/icons/woman'

export default {
  name: 'ButtonSex',
  props: ['value', 'defaultValue'],
  computed: {
    buttonValue: {
      get: function () {
        return this.value
      },
      set: function () {
        this.$emit('change', this.defaultValue)
      }
    },
    icon: function () {
      return this.defaultValue === 'male' ? 'man' : 'woman'
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "./../../assets/sass/_custom.scss";

.button-sex {
  display: block;
  & .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: $gray;
    background-color: rgba($white, .2);
    transition: $transition-base;
  }
  & .icon,
  & .text {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    transition: $transition-base;
  }
  & .icon {
    height: 11rem;
  }
  & .text {
    height: 70px;
    font-size: $font-size-base;
    background-color: $white;
  }
  & input[type="radio"] {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }
  & input[type="radio"]:focus ~ .wrapper {
    box-shadow: $input-btn-focus-box-shadow;
  }
  & input[type="radio"]:checked ~ .wrapper {
    background-color: $brand-green;
  }
  & input[type="radio"]:checked ~ .wrapper .text {
    box-shadow: inset 0 -5px 0 0 $brand-green;
  }
}
</style>
