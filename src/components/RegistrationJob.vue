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
          <button-option :name="'hasJob'" :realValue="true" :value="selectedValue" :isLarge="true" @change="changeValue">Sí</button-option>
        </div>
        <div class="col-6 pl-4">
          <button-option :name="'hasJob'" :realValue="false" :value="selectedValue" :isLarge="true" @change="changeValue">No</button-option>
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
  name: 'RegistrationJob',
  components: {
    ButtonAudio,
    ButtonPrev,
    ButtonNext,
    ButtonOption
  },
  data () {
    return {
      title: '¿Tienes trabajo?',
      description: 'Indícanos si realizas algún trabajo con remuneración',
      selectedValue: this.$store.state.user.works
    }
  },
  methods: {
    changeValue (newValue) {
      this.selectedValue = newValue
      this.$store.commit('works', newValue)
    }
  },
  computed: {
    canContinue () {
      return this.selectedValue !== null
    },
    continueTo () {
      return this.selectedValue === true ? '/registration-job-details' : '/registration-school'
    },
    textAudio () {
      return this.title + '\n\n\n\n\n' + this.description + '\n\n\n\n\n\n' + 'Sí' + '\n\n\n\n\n' + 'No'
    }
  }
}
</script>
