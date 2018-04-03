<template>
  <div :class="classes">
    <header class="header container">
      <button-prev></button-prev>
    </header>
    <div class="main container container--question">
      <h2>{{ question.formulation }}</h2>
      <form class="row">
        <div class="col-6 pr-4">
          <button-option :name="'question'" :realValue="true" :value="selectedValue" :isLarge="true" @change="changeValue">Sí</button-option>
        </div>
        <div class="col-6 pl-4">
          <button-option :name="'question'" :realValue="false" :value="selectedValue" :isLarge="true" @change="changeValue">No</button-option>
        </div>
      </form>
    </div>
    <footer class="footer container">
      <button-audio></button-audio>
      <button-next :linkTo="'/'" :isDisabled="!canContinue"></button-next>
    </footer>
  </div>
</template>

<script>
import ButtonAudio from './parts/ButtonAudio'
import ButtonPrev from './parts/ButtonPrev'
import ButtonNext from './parts/ButtonNext'
import ButtonOption from './parts/ButtonOption'

export default {
  name: 'Question',
  components: {
    ButtonAudio,
    ButtonPrev,
    ButtonNext,
    ButtonOption
  },
  data () {
    return {
      selectedValue: null
    }
  },
  methods: {
    changeValue (newValue) {
      this.selectedValue = newValue
      this.$store.commit('question', newValue)
    }
  },
  computed: {
    question () {
      return this.$store.getters.getQuestionById(this.$route.params.id)
    },
    classes () {
      const backgrounds = ['bg-alt1', 'bg-alt2', 'bg-alt3', 'bg-alt4']
      const item = backgrounds[Math.floor(Math.random()*backgrounds.length)]
      return ['screen', item]
    },
    canContinue () {
      return this.selectedValue !== null
    }
  }
}
</script>
