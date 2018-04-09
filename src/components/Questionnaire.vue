<template>
  <div class="screen bg-main">
    <header class="header container">
      <button-prev></button-prev>
    </header>
    <div class="main container">
      <h2>{{ questionnaire.name }}</h2>
      <p>{{ questionnaire.description }}</p>
    </div>
    <footer class="footer container">
      <button-audio></button-audio>
      <button-next :linkTo="'/questionnaire/' + this.$route.params.questionnaire_index + '/question/1'" :isDisabled="false"></button-next>
    </footer>
  </div>
</template>

<script>
import ButtonAudio from './parts/ButtonAudio'
import ButtonPrev from './parts/ButtonPrev'
import ButtonNext from './parts/ButtonNext'
import ButtonOption from './parts/ButtonOption'

export default {
  name: 'RegistrationSuccess',
  data () {
    return {
      questionnaire: {
        name: this.$store.getters.getQuestionnaireName(this.$route.params.questionnaire_index),
        description: this.$store.getters.getQuestionnaireDescription(this.$route.params.questionnaire_index)
      }
    }
  },
  components: {
    ButtonAudio,
    ButtonPrev,
    ButtonNext,
    ButtonOption
  }
}
</script>
