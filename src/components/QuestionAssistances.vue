<template>
  <form class="question-form">
    <button-option v-for="item in question.assistances.filter(item => item.pivot.question_id === this.$route.params.id)" :key="item.id" :name="'question-assistance'" :realValue="item.id" :value="selectedValue" @change="changeValue">{{ item.label }}</button-option>
  </form>
</template>

<script>
import ButtonOption from './parts/ButtonOption'

export default {
  name: 'QuestionAssistances',
  components: {
    ButtonOption
  },
  data () {
    return {
      selectedValue: this.$store.getters.getOptionValue(this.$route.params.type)
    }
  },
  methods: {
    changeValue (newValue) {
      this.selectedValue = newValue
    }
  },
  computed: {
    question () {
      return this.$store.getters.getScriptQuestion(this.$route.params.id)
    }
  }
}
</script>
