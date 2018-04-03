<template>
  <div class="screen bg-main">
    <header></header>
    <div class="main container">
      <h2>¡Bienvenidos a WIN!</h2>
      <p>Esta aplicación te dirá que tan independiente eres</p>
      <div class="welcome-help">
        <p class="small">Si tienes dificultad o no quieres leer, no te preocupes. Puedes activar la opción de sonido, presionando el ícono de altavoz</p>
        <button-audio></button-audio>
      </div>
    </div>
    <footer class="footer container justify-content-end">
      <button-next :linkTo="'/disability'"></button-next>
    </footer>
  </div>
</template>

<script>
import ButtonAudio from './parts/ButtonAudio'
import ButtonNext from './parts/ButtonNext'

export default {
  name: 'Welcome',
  components: {
    ButtonAudio,
    ButtonNext
  }
}
</script>
