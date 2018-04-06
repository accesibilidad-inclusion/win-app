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
      selectedValue: this.$store.getters
        .getRelatedOptionsValue(
          parseInt(this.$route.params.question_id),
          this.$route.params.question_type
        )
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
      const types = this.$store.getters
        .getRelatedOptions(
          parseInt(this.$route.params.question_id),
          this.$route.params.question_type
        )
      types.forEach((item, index) => {
        const value = this.$store.getters
          .getOptionValue(item.id)
        this.$set(types[index], 'value', value)
      })
      return types
    }
  }
}
</script>
