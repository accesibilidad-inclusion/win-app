<template>
  <div class="screen bg-main">
    <header class="header container">
      <button-prev></button-prev>
    </header>
    <div class="main container">
      <h2>¡Ya te has registrado!</h2>
      <p>Ahora comenzarán las preguntas lorem dolor sit amet, consectetur adipiscing elit</p>
    </div>
    <footer class="footer container">
      <button-audio></button-audio>
      <button-next :linkTo="'/questionnaire/1'" :isDisabled="false"></button-next>
    </footer>
  </div>
</template>

<script>
import ButtonAudio from './parts/ButtonAudio'
import ButtonPrev from './parts/ButtonPrev'
import ButtonNext from './parts/ButtonNext'

export default {
  name: 'RegistrationSuccess',
  components: {
    ButtonAudio,
    ButtonPrev,
    ButtonNext
  }
}
</script>
