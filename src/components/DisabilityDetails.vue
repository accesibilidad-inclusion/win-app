<template>
  <div class="screen bg-main">
    <header class="header container">
      <button-prev></button-prev>
    </header>
    <div class="main container">
      <h2>{{ title }}</h2>
      <p>{{ label }}</p>
      <form>
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
    </div>
    <footer class="footer container">
      <button-audio :text="textAudio"></button-audio>
      <button-next :linkTo="'/consent'" :isDisabled="!canContinue"></button-next>
    </footer>
  </div>
</template>

<script>
import ButtonAudio from './parts/ButtonAudio'
import ButtonPrev from './parts/ButtonPrev'
import ButtonNext from './parts/ButtonNext'
import FormCheck from './parts/FormCheck'

export default {
  name: 'DisabilityDetails',
  components: {
    ButtonAudio,
    ButtonPrev,
    ButtonNext,
    FormCheck
  },
  data () {
    return {
      title: '¿Qué tipo de discapacidad tienes?',
      label: 'Puedes seleccionar más de una',
      selectedValue: this.$store.state.user.disability_types
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
      this.$store.commit('disabilityTypes', this.selectedValue)
    }
  },
  computed: {
    options () {
      return [
        {id: 'intelectual', label: 'Intelectual'},
        {id: 'fisica', label: 'Física'},
        {id: 'auditiva', label: 'Auditiva'},
        {id: 'visual', label: 'Visual'},
        {id: 'otra', label: 'Otra'}
      ]
    },
    canContinue () {
      return this.selectedValue.length > 0
    },
    textAudio () {
      let text = this.title + '\n\n\n\n' + this.label + '\n\n\n\n\n'
      for (let option of this.options) {
        text += option.label + '\n\n\n\n'
      }
      return text
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "./../assets/sass/_custom.scss";

.custom-checkbox {
  margin-bottom: 5px;
  padding: 0 !important;

  & .custom-control-input ~ .custom-control-label {
    position: relative;
    width: 100%;
    padding: $spacer*.5 $spacer*.5 $spacer*.5 $spacer*3;
    font-size: $lead-font-size;
    line-height: 1.35;
    background-color: rgba($white, .2);
    transition: $transition-base;
  }
  & .custom-control-input:checked ~.custom-control-label {
    color: $gray;
    background-color: $white;
    box-shadow: inset -5px 0 0 $brand-green;
  }
  & .custom-control-input ~ .custom-control-label::before,
  & .custom-control-input ~ .custom-control-label::after {
    top: $spacer * .5;
    left: $spacer * .5;
    width: $spacer * 1.5625;
    height: $spacer * 1.5625;
  }
  & .custom-control-input ~ .custom-control-label::before {
    background-color: $white;
  }
  & .custom-control-input:checked ~ .custom-control-label::before {
    box-shadow: 0 0 0 3px $brand-green;
  }
}

@media screen and ( min-height: 530px ) {
  .custom-checkbox {
    & .custom-control-input ~ .custom-control-label {
      padding: $spacer*.625 $spacer*.625 $spacer*.625 $spacer*3;
      font-size: $lead-font-size;
      line-height: 1.35;
    }
    & .custom-control-input ~ .custom-control-label::before,
    & .custom-control-input ~ .custom-control-label::after {
      top: $spacer * .625;
      left: $spacer * .625;
      width: $spacer * 1.5625;
      height: $spacer * 1.5625;
    }
  }
}
</style>
