<template>
  <div class="screen bg-main">
    <header class="header container">
      <button-prev></button-prev>
    </header>
    <div class="main container">
      <h2 class="mb-3">{{ title }}</h2>
      <p class="mb-4">{{ content }}</p>
    </div>
    <footer class="footer container">
      <button-audio :text="textAudio"></button-audio>
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
    ButtonPrev
  },
  data () {
    return {
      title: 'No puedes seguir',
      content: 'Al rechazar el consentimiento para recopilar tus datos, lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur deserunt iusto amet, nulla. Expedita quae facere illum aliquid, libero id modi, fugit maiores neque officiis aliquam. Rem, alias, dignissimos! Repellendus.'
    }
  },
  computed: {
    textAudio () {
      return this.title + '\n\n\n\n' + this.content + '\n\n\n\n\n\n\n'
    }
  }
}
</script>
