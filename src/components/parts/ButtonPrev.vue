<template>
  <a href="javascript:history.go(-1)" class="btn-prev">
    <svgicon name="chevron-left" width="18" height="18" color="#fff"></svgicon>
  </a>
</template>

<script>
import '@/assets/icons/chevron-left'
export default {
  name: 'ButtonPrev'
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "./../../assets/sass/_custom.scss";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/buttons";

.btn-prev {
  position: relative;
  display: block;
  width: 40px;
  height: 40px;
  margin-left: ($grid-gutter-width/2) * -1;
  background-color: rgba($white, .2);
  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -9px;
    margin-left: -9px;
  }
  &:focus{
    box-shadow: $input-btn-focus-box-shadow;
  }
}
</style>
