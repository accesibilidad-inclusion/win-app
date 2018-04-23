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
  name: 'RegistrationSuccess',
  components: {
    ButtonAudio,
    // ButtonPrev,
    ButtonNext,
    ClipLoader
  },
  data () {
    return {
      title: '¡Ya te has registrado!',
      description: 'Ahora comenzarán las preguntas lorem dolor sit amet, consectetur adipiscing elit'
    }
  },
  computed: {
    linkTo () {
      return this.$store.state.questionnaire.length > 0 ? '/questionnaire/' + this.$store.state.questionnaire[0].id : ''
    },
    canContinue () {
      return this.$store.state.questionnaire.length > 0
    },
    textAudio () {
      return this.title + '\n\n\n\n\n\n' + this.description
    }
  },
  methods: {
    // Helper para detectar cuando la propiedad user.id haya sido guardada en el state
    // https://gist.github.com/granteagon/2238248
    waitUntil (boolFn, callback, delay) {
      const _this = this
      // if delay is undefined or is not an integer
      delay = (typeof (delay) === 'undefined' || isNaN(parseInt(delay, 10))) ? 100 : delay
      setTimeout(function () {
        (boolFn()) ? callback() : _this.waitUntil(boolFn, callback, delay)
      }, delay)
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.$store.dispatch('saveUser').then(() => {
        vm.waitUntil(() => {
          return vm.$store.state.user.id !== null && typeof vm.$store.state.user.id !== 'undefined'
        }, () => {
          vm.$store.dispatch('newSurvey')
        }, 100)
      })
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
