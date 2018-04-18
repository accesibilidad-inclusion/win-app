<template>
  <form class="question-form">
    <button-option
      v-for="item in options"
      :key="item.id"
      :name="'question-type'"
      :realValue="item.id"
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
      selectedValue: this.$store.getters.getQuestionTypeOptionSelected()
    }
  },
  methods: {
    changeValue (newValue) {
      this.selectedValue = newValue
      this.$emit('changeOption', newValue)
    }
  },
  computed: {
    options () {
      const types = this.$store.getters.getQuestionTypeOptions()
      types.forEach((item, index) => {
        const selected = this.$store.getters.getSelectedOption(item.id)
        this.$set(types[index], 'selected', selected)
      })
      return types
    }
  }
}
</script>
