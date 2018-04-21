<template>
  <form class="question-form">
    <button-option
      v-for="item in options"
      :key="item.id"
      :name="'question-type'"
      :realValue="item.value"
      :value="selectedValue"
      @change="changeValue"
    >{{ item.label }}</button-option>
  </form>
</template>

<script>
import ButtonOption from './parts/ButtonOption'

export default {
  name: 'QuestionType',
  components: {
    ButtonOption
  },
  data () {
    return {
      selectedValue: this.$store.getters.getValueOptions()
    }
  },
  methods: {
    changeValue (newValue) {
      this.selectedValue = newValue
      this.$emit('changeOption', this.selectedValue)
    }
  },
  computed: {
    options () {
      const types = this.$store.getters.getQuestionTypeOptions()
      return types
    }
  }
}
</script>
