<template>
  <div class="screen bg-main">
    <header class="header container">
      <button-prev></button-prev>
    </header>
    <div class="main container">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
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
      <button-audio :text="textAudio"></button-audio>
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
      title: '¿Has asistido o asistes a algún centro de apoyo especial?',
      description: 'Puede ser un grupo, escuela, institución o establecimiento',
      selectedValue: this.$store.state.user.studies
    }
  },
  methods: {
    changeValue (newValue) {
      this.selectedValue = newValue
      this.$store.commit('studies', newValue)
    }
  },
  computed: {
    canContinue () {
      return this.selectedValue !== null
    },
    continueTo () {
      return this.selectedValue === true ? '/registration-school-details' : '/registration-success'
    },
    textAudio () {
      return this.title + '\n\n\n\n\n' + this.description + '\n\n\n\n\n\n' + 'Sí' + '\n\n\n\n\n' + 'No'
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.$store.state.event !== null) {
        vm.$router.push('registration-success')
      }
    })
  }
}
</script>
