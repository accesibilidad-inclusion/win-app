<template>
  <div class="screen bg-main justify-content-between">
    <header class="header container">
      <button-prev :linkTo="'/disability'"></button-prev>
    </header>
    <div class="main container">
      <h2>¿Qué tipo de discapacidad tienes?</h2>
      <p>Puedes seleccionar más de una</p>
      <form>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" value="intelectual" id="intelectual" v-model="types">
          <label for="intelectual" class="custom-control-label">Intelectual</label>
        </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" value="fisica" id="fisica" v-model="types">
          <label for="fisica" class="custom-control-label">Física</label>
        </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" value="auditiva" id="auditiva" v-model="types">
          <label for="auditiva" class="custom-control-label">Auditiva</label>
        </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" value="visual" id="visual" v-model="types">
          <label for="visual" class="custom-control-label">Visual</label>
        </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" value="otra" id="otra" v-model="types">
          <label for="otra" class="custom-control-label">Otra</label>
        </div>
      </form>
    </div>
    <footer class="footer container">
      <button-audio></button-audio>
      <button-next :linkTo="'/consent'" :isDisabled="!canContinue"></button-next>
    </footer>
  </div>
</template>

<script>
import ButtonAudio from './parts/ButtonAudio'
import ButtonPrev from './parts/ButtonPrev'
import ButtonNext from './parts/ButtonNext'

export default {
  name: 'DisabilityDetails',
  components: {
    ButtonAudio,
    ButtonPrev,
    ButtonNext
  },
  data () {
    return {
      types: []
    }
  },
  computed: {
    canContinue: function () {
      return this.types.length > 0
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./../assets/sass/main.scss";
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
  & .custom-control-input:checked ~ .custom-control-label::before {
    background-color: $white;
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
