<template>
  <div class="screen bg-main">
    <header class="header container">
      <button-prev></button-prev>
    </header>
    <div class="main container">
      <h2 class="mb-3">{{ title }}</h2>
      <form>
        <div class="form-group mb-4">
          <input type="text" class="form-control" v-model="studiesAt" @keyup="changeValue" placeholder="Ingresa el nombre del centro">
        </div>
      </form>
    </div>
    <footer class="footer container">
      <button-audio :text="textAudio"></button-audio>
      <button-next :linkTo="'/registration-success'" :isDisabled="!canContinue"></button-next>
    </footer>
  </div>
</template>

<script>
import ButtonAudio from './parts/ButtonAudio'
import ButtonPrev from './parts/ButtonPrev'
import ButtonNext from './parts/ButtonNext'

export default {
  name: 'RegistrationSchoolDetails',
  components: {
    ButtonAudio,
    ButtonPrev,
    ButtonNext
  },
  data () {
    return {
      title: '¿A qué centro asistes o asististe?',
      studiesAt: this.$store.state.user.studies_at
    }
  },
  methods: {
    changeValue (event) {
      const value = event.target.value
      this.studiesAt = value
      this.$store.commit('studiesAt', value)
    }
  },
  computed: {
    canContinue () {
      return this.studiesAt !== ''
    },
    textAudio () {
      return this.title
    }
  }
}
</script>
