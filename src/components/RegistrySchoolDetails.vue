<template>
  <div class="screen bg-main justify-content-between">
    <header class="header container">
      <button-prev></button-prev>
    </header>
    <div class="main container">
      <h2 class="mb-3">¿A qué centro asistes o asististe?</h2>
      <form>
        <div class="form-group mb-4">
          <input type="text" class="form-control" v-model="schoolName" @keyup="changeValue" placeholder="Ingresa el nombre del centro">
        </div>
      </form>
    </div>
    <footer class="footer container">
      <button-audio></button-audio>
      <button-next :linkTo="'/registry-success'" :isDisabled="!canContinue"></button-next>
    </footer>
  </div>
</template>

<script>
import ButtonAudio from './parts/ButtonAudio'
import ButtonPrev from './parts/ButtonPrev'
import ButtonNext from './parts/ButtonNext'

export default {
  name: 'RegistrySchoolDetails',
  components: {
    ButtonAudio,
    ButtonPrev,
    ButtonNext
  },
  data () {
    return {
      schoolName: this.$store.state.user.schoolName
    }
  },
  methods: {
    changeValue (event) {
      const value = event.target.value
      this.schoolName = value
      this.$store.commit('schoolName', value)
    }
  },
  computed: {
    canContinue () {
      return this.schoolName !== ''
    }
  }
}
</script>
