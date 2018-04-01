<template>
  <div class="screen bg-main justify-content-between">
    <header class="header container">
      <button-prev></button-prev>
    </header>
    <div class="main container">
      <h2 class="mb-3">Consentimiento</h2>
      <p class="mb-4">Tus datos personales serán privados y tendras acceso a todas tus respuestas. Todas las respuestas que ingreses a la aplicación serán analizadas de forma estrictamente confidencial por el equipo WIN</p>
      <form class="row">
        <div class="col-6 pr-4">
          <button-option :name="'acceptConsent'" :realValue="false" :value="selectedValue" @change="changeValue">No acepto</button-option>
        </div>
        <div class="col-6 pl-4">
          <button-option :name="'acceptConsent'" :realValue="true" :value="selectedValue" @change="changeValue">Sí acepto</button-option>
        </div>
      </form>
    </div>
    <footer class="footer container">
      <button-audio></button-audio>
      <button-next :linkTo="continueTo" :isDisabled="!canContinue"></button-next>
    </footer>
  </div>
</template>

<script>
import ButtonAudio from './parts/ButtonAudio'
import ButtonPrev from './parts/ButtonPrev'
import ButtonNext from './parts/ButtonNext'
import ButtonOption from './parts/ButtonOption'

export default {
  name: 'Consent',
  components: {
    ButtonAudio,
    ButtonPrev,
    ButtonNext,
    ButtonOption
  },
  data: function () {
    return {
      selectedValue: null
    }
  },
  methods: {
    changeValue: function (newValue) {
      this.selectedValue = newValue
    }
  },
  computed: {
    canContinue: function () {
      return this.selectedValue !== null
    },
    continueTo: function () {
      return this.selectedValue === true ? '/registry-names' : '/welcome'
    }
  }
}
</script>
