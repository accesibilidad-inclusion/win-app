<template>
  <div class="screen bg-main">
    <header class="header container">
      <button-prev></button-prev>
    </header>
    <div class="main container">
      <h2 class="mb-3">{{ title }}</h2>
      <p class="mb-4">{{ content }}</p>
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
      <button-audio :text="textAudio"></button-audio>
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
  data () {
    return {
      title: 'Consentimiento',
      content: 'Tus datos personales serán privados y tendrás acceso a todas tus respuestas. Todas las respuestas que ingreses a la aplicación serán analizadas de forma estrictamente confidencial por el equipo WIN',
      selectedValue: this.$store.state.user.consent
    }
  },
  methods: {
    changeValue (newValue) {
      this.selectedValue = newValue
      this.$store.commit('consent', newValue)
    }
  },
  computed: {
    canContinue () {
      return this.selectedValue !== null
    },
    continueTo () {
      return this.selectedValue === true ? '/registration' : '/rejected-consent'
    },
    textAudio () {
      return this.title + '\n\n\n\n' + this.content + '\n\n\n\n\n\n\n' + 'No acepto' + '\n\n\n\n' + 'Sí acepto'
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.$store.state.event !== null) {
        vm.$router.push('registration')
      }
    })
  }
}
</script>
