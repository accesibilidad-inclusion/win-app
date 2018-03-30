<template>
  <router-link :to="linkTo" :class="classes">Siguiente</router-link>
</template>

<script>
export default {
  name: 'ButtonNext',
  props: {
    'linkTo': String,
    'isDisabled': Boolean
  },
  data () {
    return {
      isActive: true
    }
  },
  computed: {
    classes: function () {
      return [ 'btn-next', (this.isDisabled ? 'disabled' : '') ].join(' ')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./../../assets/sass/main.scss";

.btn-next {
  @extend .btn;
  @extend .btn-light;
  margin-bottom: $grid-gutter-width / 2;
  padding-left: $spacer*1.5;
  padding-right: $spacer*1.5;
  box-shadow: 0 0 10px 5px rgba($black, .1);
}
</style>
