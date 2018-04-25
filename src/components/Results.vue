<template>
  <div class="screen bg-main">
    <header class="header container header--result">
      <button-prev></button-prev>
      <div class="dimension-control">
        <span class="dimension-name">{{ result.label }}</span>
        <div class="dimension-indicator">
          <span v-for="item in this.$store.state.results" :key="item.id">
            <dimension v-if="item.id === result.id" :classes="['dimension', 'dimension-' + item.id, 'icon', 'icon-active'].join(' ')"></dimension>
            <dimension v-else :classes="['dimension', 'dimension-' + item.id, 'icon'].join(' ')"></dimension>
          </span>
        </div>
      </div>
    </header>
    <div class="main container container--result">
      <transition name="fade">
        <div class="result" :key="result.id">
          <dimension :classes="['dimension', 'dimension-' + result.id, result.level].join(' ')"></dimension>
          <p class="mt-3">{{ resultDescription }}</p>
        </div>
      </transition>
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
    resultDescription () {
      if (this.result.level === 'high') {
        if (this.result.id === 1) return 'Tomas la iniciativa y decides qué cosas son importantes para ti'
        if (this.result.id === 5) return 'Sabes muy bien lo que quieres y vas a por ello'
        if (this.result.id === 9) return 'Piensas antes de hacer las cosas y eso te ayuda en tu vida'
        if (this.result.id === 14) return 'Te sientes bien siendo tú mismo y sabes que eres valioso'
      }
      if (this.result.level === 'medium') {
        if (this.result.id === 1) return 'Decides cosas importantes para ti, pero te falta tomar la iniciativa algunas veces'
        if (this.result.id === 5) return 'Aunque sabes lo que quieres, tienes algunas dudas sobre cómo conseguirlo'
        if (this.result.id === 9) return 'Muchas cosas de tu vida serían más fáciles si te parases a pensar antes de hacerlas'
        if (this.result.id === 14) return 'Aunque te gusta cómo eres, te importa mucho lo que piensen los demás sobre ti'
      }
      if (this.result.level === 'low') {
        if (this.result.id === 1) return 'Parece que necesitas ayuda para poder tomar decisiones. Piensa en cómo o quién podría ayudarte'
        if (this.result.id === 5) return 'Te cuesta un poco saber qué cosas te gustan. Podrías hacer una lista de cosas importantes para ti'
        if (this.result.id === 9) return 'A veces haces cosas sin pensar mucho en las consecuencias. Es importante que pienses en lo que puede pasar cuando haces algo'
        if (this.result.id === 14) return 'Hay muchas cosas de ti que te gustaría cambiar. Seguro que también tienes muchas habilidades, piensa en ellas'
      }
    },
    linkTo () {
      if (this.$store.getters.wereResultsReviewed()) {
        return '/final-result'
      }
      return '/result/' + this.$store.getters.nextResultId()
    },
    textAudio () {
      return this.result.label + '\n\n\n\n\n\n\n\n' + this.resultDescription
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 25px;
  height: 25px;
  span {
    display: flex;
    width: 12px;
    height: 12px;
  }
}
.result {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100%;
}
</style>
