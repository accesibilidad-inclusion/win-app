<template>
    <div class="screen bg-main">
      <header class="header container header--result">
        <button-prev></button-prev>
        <div class="dimension-control">
          <span class="dimension-name">{{ result.label }}</span>
          <span class="dimension-indicator"></span>
        </div>
      </header>
      <div class="main container container--result">
        <transition name="fade">
          <div class="result" :key="result.id">
            <dimension :result="result"></dimension>
          </div>
        </transition>
        <!-- Gráfico: componente x cada uno -->
        <!-- Texto: se construye a partir de la dimensión y el nivel (12 alternativas) -->
      </div>
      <footer class="footer container">
        <button-audio :text="textAudio"></button-audio>
        <button-next :linkTo="linkTo" :isDisabled="false"></button-next>
      </footer>
    </div>
</template>

<script>
import ButtonAudio from './parts/ButtonAudio'
import ButtonPrev from './parts/ButtonPrev'
import ButtonNext from './parts/ButtonNext'
import Dimension from './parts/Dimension'

export default {
  name: 'Results',
  components: {
    ButtonAudio,
    ButtonPrev,
    ButtonNext,
    Dimension
  },
  computed: {
    result () {
      return this.$store.getters.getResult()
    },
    linkTo () {
      if (this.$store.getters.wereResultsReviewed()) {
        return '/final-results/'
      }
      return '/result/' + this.$store.getters.nextResultId()
    },
    textAudio () {
      return this.result.label
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
.dimension-indicator {
  font-weight: 500;
}
.result {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
}
</style>
