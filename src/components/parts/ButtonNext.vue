<template>
  <router-link :to="linkTo" :class="classes">
    Siguiente
    <svgicon name="chevron-right" width="10" height="18" color="#34C595"></svgicon>
  </router-link>
</template>

<script>
import '@/assets/icons/chevron-right'
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
.svg-icon {
  position: relative;
  top: 3px;
  left: 10px;
}
</style>
