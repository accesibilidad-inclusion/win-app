<template>
  <router-link :to="linkTo" :class="classes">Siguiente</router-link>
</template>

<script>
export default {
  name: 'ButtonNext',
  props: {
    'linkTo': null,
    'isDisabled': Boolean
  },
  data () {
    return {
      isActive: true
    }
  },
  computed: {
    classes () {
      return [ 'btn-next', (this.isDisabled ? 'disabled' : '') ].join(' ')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "./../../assets/sass/_custom.scss";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/buttons";

.btn-next {
  @extend .btn;
  @extend .btn-light;
  margin-bottom: $grid-gutter-width / 2;
  padding-left: $spacer*1.5;
  padding-right: $spacer*1.5;
  box-shadow: $input-btn-focus-box-shadow;
  transition: $transition-base;
  &:hover {
    background-color: $white;
  }
}
</style>
