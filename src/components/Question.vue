<template>
  <div :class="classes">
    <header class="header container header--question">
      <button-prev></button-prev>
      <div class="stage-control">
        <span class="stage-name">{{ questionnaire.name }}</span>
        <span class="stage-progress-indicator">{{ progressData[0] }} / {{ progressData[1] }}</span>
      </div>
      <div class="progress">
        <div class="progress-bar" role="progressbar" :style="{ width: progressPercent + '%' }" :aria-valuenow="progressPercent" aria-valuemin="0" aria-valuemax="100"></div>
      </div>
    </header>
    <div class="main container container--question">
      <h2>{{ title }}</h2>
      <transition name="fade">
        <router-view
          @changeQuestion="changeQuestionValue"
          @changeOption="changeOptionValue"
          @changeAids="changeAidsValues">
        </router-view>
      </transition>
    </div>
    <footer class="footer container">
      <button-audio></button-audio>
      <button-next :linkTo="linkTo" :isDisabled="!canContinue"></button-next>
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
      optionValue: this.$store.getters.getQuestionTypeOptionSelected(),
      aidsValues: this.$store.getters.getValueAids(),
      questionnaire: this.$store.getters.getQuestionnaire(),
      link: this.continueTo()
    }
  },
  methods: {
    changeQuestionValue (newValue) {
      this.questionValue = newValue
      this.$store.commit('question', { value: newValue })
      this.linkTo = this.continueTo()
    },
    changeOptionValue (newValue) {
      this.optionValue = newValue
      this.$store.commit('option', { value: newValue })
      this.linkTo = this.continueTo()
    },
    changeAidsValues (newValue) {
      this.aidsValues = newValue
      this.$store.commit('aids', { value: newValue })
      this.linkTo = this.continueTo()
    },
    continueTo () {
      // Tipo
      if (this.$route.name === 'question') {
        const type = this.$store.getters.getValueQuestion() === true ? 'yes' : 'no'
        return { name: 'question-type', params: { question_type: type } }
      }
      // Ayudas
      if (this.$route.name === 'question-type' && this.$store.getters.needsAids()) {
        return { name: 'question-aids' }
      }
      // Especificaciones
      if (['question-type', 'question-aids'].indexOf(this.$route.name) !== -1 && this.$store.getters.needsSpecification()) {
        return { name: 'question-specification' }
      }
      // Cuestionario completo
      if (this.$route.name !== 'question' && this.$store.getters.isAllComplete()) {
        return { name: 'completed' }
      }
      // Etapa completa
      if (this.$route.name !== 'question' && this.$store.getters.isQuestionnaireComplete()) {
        return '/questionnaire/' + this.$store.getters.nextQuestionnaireId()
      }
      // Pregunta completa
      if (this.$route.name !== 'question' && this.$store.getters.isQuestionComplete()) {
        return '/questionnaire/' + this.$route.params.questionnaire_id + '/question/' + this.$store.getters.nextQuestionId()
      }
      return ''
    }
  },
  watch: {
    '$route' (to, from) {
      this.linkTo = this.continueTo()
    }
  },
  computed: {
    question () {
      return this.$store.getters.getQuestion()
    },
    linkTo: {
      get () { return this.link },
      set (linkTo) { this.link = linkTo }
    },
    progressData () {
      return [parseInt(this.$store.getters.getQuestionIndex()) + 1, parseInt(this.questionnaire.questions.length)]
    },
    progressPercent () {
      return (this.progressData[0] / this.progressData[1]) * 100
    },
    title () {
      if (this.$route.name === 'question-aids') {
        return '¿Qué tipo de apoyo necesitas?'
      }
      if (this.$route.name === 'question-specification') {
        return this.question.specification
      }
      return this.question.formulation
    },
    classes () {
      return ['screen', this.$store.getters.getQuestionBackground()]
    },
    canContinue () {
      if (this.$route.name === 'question') {
        return typeof this.$store.getters.getValueQuestion() === 'boolean'
      }
      if (this.$route.name === 'question-type') {
        return this.$store.getters
          .getQuestionTypeOptions()
          .find(option => this.$store.state.options[option.id] === true)
      }
      if (this.$route.name === 'question-aids') {
        return this.$store.getters.getValueAids().length > 0
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "./../assets/sass/_custom.scss";

.header--question {
  position: relative;
  display: flex;
  background-color: rgba($white, .2);
}
.stage-control {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 7px;
  font-size: $font-size-base * $font-size-adjust * (13/16);
}
.stage-name {
  margin-left: $spacer;
}
.stage-progress-indicator {
  font-weight: 500;
}
.progress {
  position: absolute;
  width: 100%;
  top: 100%;
  margin-left: ($grid-gutter-width / 2) * -1
}
</style>
