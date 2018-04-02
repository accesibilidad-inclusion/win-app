<template>
  <select
    :class="classes"
    :id="id"
    v-model="selectedOption"
    @input="event => { $emit('input', event.target.value) }"
  >
    <option v-if="optionDefault" value="" disabled hidden>{{ optionDefault }}</option>
    <option v-for="item in options" v-bind:key="item.value" :value="item.value">{{ item.text }}</option>
  </select>
</template>

<script>
export default {
  name: 'FormSelect',
  props: {
    id: {
      type: String
    },
    options: {
      type: Array,
      required: true
    },
    optionDefault: {
      type: String
    },
    value: null
  },
  data () {
    return {
      selectedOption: null
    }
  },
  computed: {
    classes: function () {
      return ['custom-select', (this.selectedOption !== '' ? 'custom-select--filled' : '')].join(' ')
    }
  },
  mounted () {
    this.selectedOption = this.value
  },
  watch: {
    value: function (newValue) {
      this.selectedOption = newValue
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "./../../assets/sass/_custom.scss";

.custom-select {
  padding-right: 0;
  color: $input-placeholder-color;
  border: none;
  background-position: right;
}
.custom-select option,
.custom-select--filled {
  color: $gray;
}
</style>
