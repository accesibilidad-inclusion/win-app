<template>
  <div :class="classes">
    <div class="dimension-inside"></div>
  </div>
</template>

<script>
export default {
  name: 'Dimension',
  props: ['classes']
}
</script>

<style lang="scss" scoped>
@import "./../../assets/sass/_bootstrap.scss";
@import "./../../assets/sass/_custom.scss";

// Wrapper
.dimension {
  position: relative;
  width: 100%;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
  &::before {
    display: block;
    padding-top: 100%;
    content: '';
  }
}

// Dimension
.dimension-inside {
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(#000, .1);
  border-radius: 100%;
  &::before,
  &::after {
    position: absolute;
    display: block;
    border-radius: 100%;
    background-color: rgba(#000, .1);
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
.top-left .dimension-inside {
  border-top-left-radius: 0;
  &::before,
  &::after {
    top: 0;
    left: 0;
    border-top-left-radius: 0;
  }
}
.top-right .dimension-inside {
  border-top-right-radius: 0;
  &::before,
  &::after {
    top: 0;
    right: 0;
    border-top-right-radius: 0;
  }
}
.bottom-left .dimension-inside {
  border-bottom-left-radius: 0;
  &::before,
  &::after {
    bottom: 0;
    left: 0;
    border-bottom-left-radius: 0;
  }
}
.bottom-right .dimension-inside {
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
  &.high .dimension-inside,
  &.icon-active .dimension-inside { background-color: $color }
  &.medium .dimension-inside::after { background-color: $color }
  &.low .dimension-inside::before { background-color: $color }
}
.dimension-5 {
  $color: #fb8460;
  @extend .bottom-left;
  &.high .dimension-inside,
  &.icon-active .dimension-inside { background-color: $color }
  &.medium .dimension-inside::after { background-color: $color }
  &.low .dimension-inside::before { background-color: $color }
}
.dimension-9 {
  $color: #86e2d5;
  @extend .top-right;
  &.high .dimension-inside,
  &.icon-active .dimension-inside { background-color: $color }
  &.medium .dimension-inside::after { background-color: $color }
  &.low .dimension-inside::before { background-color: $color }
}
.dimension-14 {
  $color: #90ee90;
  @extend .top-left;
  &.high .dimension-inside,
  &.icon-active .dimension-inside { background-color: $color }
  &.medium .dimension-inside::after { background-color: $color }
  &.low .dimension-inside::before { background-color: $color }
}

// Icon
.icon {
  width: 12px;
  height: 12px;
  .dimension-inside:before,
  .dimension-inside:after {
    display: none;
  }
}

@include media-breakpoint-down(md) {
  .dimension {
    max-width: 260px;
  }
  .top-left,
  .bottom-left {
    margin-left: 0;
  }
  .top-right,
  .bottom-right {
    margin-right: 0;
  }
}
</style>
