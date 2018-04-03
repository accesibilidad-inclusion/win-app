<template>
  <div class="screen bg-main justify-content-between">
    <header class="header container">
      <button-prev></button-prev>
    </header>
    <div class="main container">
      <h2>¿Has asistido o asistes a algún centro de apoyo especial?</h2>
      <p>Puede ser un grupo, escuela, institución o establecimiento</p>
      <br>
      <form class="row">
        <div class="col-6 pr-4">
          <button-option :name="'hasSchool'" :realValue="true" :value="selectedValue" :isLarge="true" @change="changeValue">Sí</button-option>
        </div>
        <div class="col-6 pl-4">
          <button-option :name="'hasSchool'" :realValue="false" :value="selectedValue" :isLarge="true" @change="changeValue">No</button-option>
        </div>
      </form>
    </div>
    <footer class="footer container">
      <button-audio></button-audio>
      <button-next :linkTo="continueTo" :isDisabled="!canContinue"></button-next>
    </footer>
  </div>
</template>

<script>
import ButtonAudio from './parts/ButtonAudio'
import ButtonPrev from './parts/ButtonPrev'
import ButtonNext from './parts/ButtonNext'
import ButtonOption from './parts/ButtonOption'

export default {
  name: 'RegistrationSchool',
  components: {
    ButtonAudio,
    ButtonPrev,
    ButtonNext,
    ButtonOption
  },
  data () {
    return {
      selectedValue: this.$store.state.user.school
    }
  },
  methods: {
    changeValue (newValue) {
      this.selectedValue = newValue
      this.$store.commit('school', newValue)
    }
  },
  computed: {
    canContinue () {
      return this.selectedValue !== null
    },
    continueTo () {
      return this.selectedValue === true ? '/registration-school-details' : '/registration-success'
    }
  }
}
</script>
