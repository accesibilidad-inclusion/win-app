<template>
  <div class="screen bg-main">
    <header class="header container header--result">
      <button-prev></button-prev>
      <div class="dimension-control">
        <span class="dimension-name">{{ title }}</span>
      </div>
    </header>
    <div class="main container">
      <div class="dimensions-graph">
        <span v-for="item in this.$store.state.results" :key="item.id">
          <dimension :classes="['dimension', 'dimension-' + item.id, item.level].join(' ')"></dimension>
        </span>
      </div>
      <p class="mt-3">{{ description }}</p>
    </div>
    <footer class="footer container">
      <button-audio :text="textAudio"></button-audio>
    </footer>
  </div>
</template>

<script>
import ButtonAudio from './parts/ButtonAudio'
import ButtonPrev from './parts/ButtonPrev'
import Dimension from './parts/Dimension'

export default {
  name: 'FinalResult',
  components: {
    ButtonAudio,
    ButtonPrev,
    Dimension
  },
  data () {
    return {
      title: 'Recomendaciones',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }
  },
  computed: {
    textAudio () {
      return this.title + '\n\n\n\n\n\n' + this.description
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "./../assets/sass/_custom.scss";

.header--result {
  position: relative;
  display: flex;
  background-color: rgba($white, .2);
}
.dimension-control {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 7px;
  font-size: $font-size-base * $font-size-adjust * (13/16);
}
.dimension-name {
  margin-left: $spacer;
  margin-top: 2px;
}
.dimensions-graph {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  &::before {
    padding-top: 100%;
    content: ''
  }
  span {
    display: flex;
    width: 50%;
    height: 50%;
  }
}
</style>
