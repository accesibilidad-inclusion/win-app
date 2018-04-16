<template>
  <form class="question-form">
    <div class="row">
      <div class="col-6 pr-3">
        <button-option
          :isLarge="true"
          :name="'question'"
          :realValue="true"
          :value="selectedValue"
          @change="changeValue"
        >Sí</button-option>
      </div>
      <div class="col-6 pl-3">
        <button-option
          :isLarge="true"
          :name="'question'"
          :realValue="false"
          :value="selectedValue"
          @change="changeValue"
        >No</button-option>
      </div>
    </div>
  </form>
</template>

<script>
import ButtonOption from './parts/ButtonOption'

export default {
  name: 'QuestionStart',
  components: {
    ButtonOption
  },
  data () {
    return {
      selectedValue: this.$store.getters.getValueQuestion()
    }
  },
  methods: {
    changeValue (newValue) {
      this.selectedValue = newValue
      this.$emit('changeQuestion', newValue)
    }
  }
}
</script>
