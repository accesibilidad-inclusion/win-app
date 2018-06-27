<template>
  <div class="screen bg-main">
    <header class="header container">
      <!-- <button-prev></button-prev> -->
    </header>
    <div class="main container">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <div class="wrapper-loading">
        <clip-loader :loading="!canContinue" :color="'#fff'" :size="'34px'"></clip-loader>
      </div>
    </div>
    <footer class="footer container">
      <button-audio :text="textAudio"></button-audio>
      <button-next :linkTo="linkTo" :isDisabled="!canContinue"></button-next>
    </footer>
  </div>
</template>

<script>
import ButtonAudio from './parts/ButtonAudio'
// import ButtonPrev from './parts/ButtonPrev'
import ButtonNext from './parts/ButtonNext'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

export default {
  name: 'CompletedQuestionnaire',
  components: {
    ButtonAudio,
    // ButtonPrev,
    ButtonNext,
    ClipLoader
  },
  data () {
    return {
      title: '¡Has terminado el cuestionario!',
      description: 'Ahora puedes revisar tus resultados de autodeterminación'
    }
  },
  computed: {
    canContinue () {
      return this.$store.state.results.length > 0
    },
    linkTo () {
      return this.$store.state.results.length > 0 ? '/result/' + this.$store.state.results[0].id : ''
    },
    textAudio () {
      return this.title + '\n\n\n\n\n\n' + this.description
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$store.dispatch('getResults')
    })
  }
}
</script>

<style lang="css" scoped>
.wrapper-loading {
  position: relative;
}
.v-spinner {
  position: absolute;
  top: 1rem;
  left: 50%;
  margin-left: -17px;
}
</style>
