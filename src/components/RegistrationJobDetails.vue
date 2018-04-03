<template>
  <div class="screen bg-main justify-content-between">
    <header class="header container">
      <button-prev></button-prev>
    </header>
    <div class="main container">
      <h2 class="mb-3">¿Dónde trabajas?</h2>
      <form>
        <div class="form-group mb-4">
          <input type="text" class="form-control" v-model="jobPlace" @keyup="changeValue" placeholder="Ingresa tu lugar de trabajo">
        </div>
      </form>
    </div>
    <footer class="footer container">
      <button-audio></button-audio>
      <button-next :linkTo="'/registration-school'" :isDisabled="!canContinue"></button-next>
    </footer>
  </div>
</template>

<script>
import ButtonAudio from './parts/ButtonAudio'
import ButtonPrev from './parts/ButtonPrev'
import ButtonNext from './parts/ButtonNext'

export default {
  name: 'RegistrationJobDetails',
  components: {
    ButtonAudio,
    ButtonPrev,
    ButtonNext
  },
  data () {
    return {
      jobPlace: this.$store.state.user.jobPlace
    }
  },
  methods: {
    changeValue (event) {
      const value = event.target.value
      this.jobPlace = value
      this.$store.commit('jobPlace', value)
    }
  },
  computed: {
    canContinue () {
      return this.jobPlace !== ''
    }
  }
}
</script>
