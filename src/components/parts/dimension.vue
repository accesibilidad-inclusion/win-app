<template>
  <div class="dimension-wrapper">
    <div :class="classes"></div>
  </div>
</template>

<script>
export default {
  name: 'Dimension',
  props: ['result'],
  computed: {
    classes () {
      return ['dimension', 'dimension-' + this.result.id, this.result.level].join(' ')
    }
  }
}
</script>

<style lang="scss" scoped>
// Wrapper
.dimension-wrapper {
  position: relative;
  width: 100%;
  margin: 0 auto;
  &::before {
    display: block;
    padding-top: 100%;
    content: '';
  }
}

// Dimension
.dimension {
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(#fff, .2);
  border-radius: 100%;
  &::before,
  &::after {
    position: absolute;
    display: block;
    border-radius: 100%;
    background-color: rgba(#fff, .2);
    content: '';
  }
  &::before {
    width: 50%;
    height: 50%;
    z-index: 2;
  }
  &::after {
    width: 75%;
    height: 75%;
    z-index: 1;
  }
}

// Esquinas
.top-left {
  border-top-left-radius: 0;
  &::before,
  &::after {
    top: 0;
    left: 0;
    border-top-left-radius: 0;
  }
}
.top-right {
  border-top-right-radius: 0;
  &::before,
  &::after {
    top: 0;
    right: 0;
    border-top-right-radius: 0;
  }
}
.bottom-left {
  border-bottom-left-radius: 0;
  &::before,
  &::after {
    bottom: 0;
    left: 0;
    border-bottom-left-radius: 0;
  }
}
.bottom-right {
  border-bottom-right-radius: 0;
  &::before,
  &::after {
    bottom: 0;
    right: 0;
    border-bottom-right-radius: 0;
  }
}

// Colores y niveles
.dimension-1 {
  $color: #ffe356;
  @extend .bottom-right;
  &.high { background-color: $color }
  &.medium::after { background-color: $color }
  &.low::before { background-color: $color }
}
.dimension-5 {
  $color: #fb8460;
  @extend .bottom-left;
  &.high { background-color: $color }
  &.medium::after { background-color: $color }
  &.low::before { background-color: $color }
}
.dimension-9 {
  $color: #86e2d5;
  @extend .top-left;
  &.high { background-color: $color }
  &.medium::after { background-color: $color }
  &.low::before { background-color: $color }
}
.dimension-14 {
  $color: #90ee90;
  @extend .top-right;
  &.high { background-color: $color }
  &.medium::after { background-color: $color }
  &.low::before { background-color: $color }
}
</style>
