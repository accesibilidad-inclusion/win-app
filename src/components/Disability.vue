<template>
  <div class="screen bg-main">
    <header class="header container">
      <button-prev></button-prev>
    </header>
    <div class="main container">
      <h2>¿Estás en situación de discapacidad?</h2>
      <br>
      <form class="row">
        <div class="col-6 pr-4">
          <button-option :name="'hasDisability'" :realValue="true" :value="selectedValue" :isLarge="true" @change="changeValue">Sí</button-option>
        </div>
        <div class="col-6 pl-4">
          <button-option :name="'hasDisability'" :realValue="false" :value="selectedValue" :isLarge="true" @change="changeValue">No</button-option>
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
  name: 'Disability',
  components: {
    ButtonAudio,
    ButtonPrev,
    ButtonNext,
    ButtonOption
  },
  data () {
    return {
      selectedValue: this.$store.state.user.disability
    }
  },
  methods: {
    changeValue (newValue) {
      this.selectedValue = newValue
      this.$store.commit('disability', newValue)
    }
  },
  computed: {
    canContinue () {
      return this.selectedValue !== null
    },
    continueTo () {
      return this.selectedValue === true ? '/disability-details' : '/consent'
    }
  }
}
</script>
