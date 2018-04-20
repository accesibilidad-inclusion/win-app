<template>
  <div class="screen bg-main">
    <header class="header container">
      <button-prev></button-prev>
    </header>
    <div class="main container">
      <h2 class="mb-3">¿Dónde trabajas?</h2>
      <form>
        <div class="form-group mb-4">
          <input type="text" class="form-control" v-model="worksAt" @keyup="changeValue" placeholder="Ingresa tu lugar de trabajo">
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
      worksAt: this.$store.state.user.works_at
    }
  },
  methods: {
    changeValue (event) {
      const value = event.target.value
      this.worksAt = value
      this.$store.commit('worksAt', value)
    }
  },
  computed: {
    canContinue () {
      return this.worksAt !== ''
    }
  }
}
</script>
