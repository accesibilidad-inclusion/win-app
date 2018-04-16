<template>
  <div :class="classes">
    <header class="header container">
      <button-prev></button-prev>
    </header>
    <div class="main container container--question">
      <h2>{{ title }}</h2>
      <transition name="fade">
        <router-view
          @changeQuestion="changeQuestionValue"
          @changeOption="changeOptionValue">
        </router-view>
      </transition>
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

export default {
  name: 'Question',
  components: {
    ButtonAudio,
    ButtonPrev,
    ButtonNext
  },
  data () {
    return {
      questionValue: this.$store.getters.getValueQuestion(),
      optionValue: this.$store.getters.getRelatedOptionsValue()
    }
  },
  methods: {
    changeQuestionValue (newValue) {
      this.questionValue = newValue
      this.$store.commit('question', { id: this.$route.params.question_id, value: newValue })
    },
    changeOptionValue (newValue) {
      this.optionValue = newValue
      this.$store.commit('option', {
        question_id: parseInt(this.$route.params.question_id),
        question_type: this.$route.params.question_type,
        option_id: newValue
      })
    }
  },
  computed: {
    question () {
      return this.$store.getters.getQuestionnaireQuestion()
    },
    title () {
      if (this.$route.name === 'question-assistances') {
        return '¿Qué tipo de apoyo necesitas?'
      }
      if (this.$route.name === 'question-specification') {
        return this.question.specification
      }
      return this.question.formulation
    },
    classes () {
      const backgrounds = ['bg-alt1', 'bg-alt2', 'bg-alt3', 'bg-alt4']
      const item = backgrounds[Math.floor(Math.random() * backgrounds.length)]
      return ['screen', item]
    },
    canContinue () {
      if (this.$route.name === 'question') {
        return this.questionValue !== null && this.questionValue !== ''
      }
      if (this.$route.name === 'question-type') {
        return this.$store.getters
          .getRelatedOptions()
          .find(option => this.$store.state.options[option.id] === true)
      }
    },
    continueTo () {
      // Type
      if (this.$route.name === 'question') {
        const type = this.questionValue === true ? 'yes' : 'no'
        return { name: 'question-type', params: { question_type: type } }
      }
      // Assistances
      if (this.$route.name === 'question-type' && this.$store.getters.needsAssistantes()) {
        return { name: 'question-assistances' }
      }
      // Specification
      if (['question-type', 'question-assistances'].indexOf(this.$route.name) !== -1 && this.$store.getters.needsSpecification()) {
        return { name: 'question-specification' }
      }

      // Casos a considerar
      // if this.$route.name === 'question'
      // - questionnaire/:questionnaire_id/question/:question_id -> questionnaire/:questionnaire_id/question/:id/type/:question_type

      // if this.$route.name === 'question-type' && this.$store.getters.needsAssistances()
      // - questionnaire/:questionnaire_id/question/:id/type/:question_type -> questionnaire/:questionnaire_id/question/:id/assistances

      // if ['question-type', 'question-assistances'].indeOf(this.$route.name) !== -1 && this.$store.getters.needsSpecification()
      // * questionnaire/:questionnaire_id/question/:id/type/:question_type -> questionnaire/:questionnaire_id/question/:id/where
      // * questionnaire/:questionnaire_id/question/:id/assistances -> questionnaire/:questionnaire_id/question/:id/where

      // if this.$store.getters.isQuestionComplete()
      // * questionnaire/:questionnaire_id/question/:id/type/:question_type -> questionnaire/:questionnaire_id/question/:id
      // * questionnaire/:questionnaire_id/question/:id/assistances -> questionnaire/:questionnaire_id/question/:id/
      // * questionnaire/:questionnaire_id/question/:id/where -> questionnaire/:questionnaire_id/question/:id/

      // if this.$store.getters.isAllComplete()
      // * questionnaire/:questionn aire_id/question/:id/type/:question_type -> completed
      // * questionnaire/:questionnaire_id/question/:id/assistances -> completed
      // * questionnaire/:questionnaire_id/question/:id/where -> completed

      // if this.$store.getters.isQuestionnaireComplete()
      // * questionnaire/:questionnaire_id/question/:id/type/:question_type -> questionnaire/:questionnaire_id
      // * questionnaire/:questionnaire_id/question/:id/assistances -> questionnaire/:questionnaire_id
      // * questionnaire/:questionnaire_id/question/:id/where -> questionnaire/:questionnaire_id

      return '/questionnaire/' + this.$route.params.questionnaire_id + '/question/' + this.$route.params.question_id + '/type/' + (this.questionValue === true ? 'yes' : 'no')
    }
  }
}
</script>
