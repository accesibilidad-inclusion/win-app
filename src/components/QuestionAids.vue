<template>
  <form class="question-form">
    <form-check
      v-for="item in options"
      :key="item.id"
      :id="item.id"
      :name="item.label"
      :realValue="item.id"
      :value="selectedValue"
      @change="changeValue"
    >{{ item.label }}</form-check>
  </form>
</template>

<script>
import FormCheck from './parts/FormCheck'

export default {
  name: 'QuestionAids',
  components: {
    FormCheck
  },
  data () {
    return {
      selectedValue: this.$store.getters.getValueAids()
    }
  },
  methods: {
    changeValue (newValue) {
      const index = this.selectedValue.indexOf(newValue)
      if (index !== -1) {
        this.selectedValue.splice(index, 1)
      } else {
        this.selectedValue.push(newValue)
      }
      this.$emit('changeAids', this.selectedValue)
    }
  },
  computed: {
    options () {
      return this.$store.getters.getAidsOptions()
    }
  }
}
</script>
