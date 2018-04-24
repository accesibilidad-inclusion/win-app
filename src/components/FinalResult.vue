<template>
  <div class="screen bg-main">
    <header class="header container header--question">
      <button-prev></button-prev>
      <div class="dimension-control">
        <span class="dimension-name">{{ title }}</span>
      </div>
    </header>
    <div class="main container">
      <p>{{ description }}</p>
      <div class="wrapper-loading">
        <clip-loader :loading="!canContinue" :color="'#fff'" :size="'34px'"></clip-loader>
      </div>
    </div>
    <footer class="footer container">
      <button-audio :text="textAudio"></button-audio>
<!--       <button-next :linkTo="linkTo" :isDisabled="!canContinue"></button-next> -->
    </footer>
  </div>
</template>

<script>
import ButtonAudio from './parts/ButtonAudio'
// import ButtonPrev from './parts/ButtonPrev'
// import ButtonNext from './parts/ButtonNext'

export default {
  name: 'FinalResult',
  components: {
    ButtonAudio
    // ButtonPrev,
    // ButtonNext
  },
  data () {
    return {
      title: 'Recomendaciones',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, ipsa, modi. Consequatur repudiandae consequuntur quod esse a tempora ullam tempore.'
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

.header--question {
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
}
.dimension-indicator {
  font-weight: 500;
}
</style>
