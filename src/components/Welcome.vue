<template>
  <div class="screen bg-main">
    <header></header>
    <div class="main container">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <div class="welcome-help">
        <p class="small">{{ help }}</p>
        <button-audio :text="textAudio"></button-audio>
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
  },
  data () {
    return {
      title: '¡Bienvenidos a WIN!',
      description: 'Esta aplicación te dirá que tan independiente eres',
      help: 'Si tienes dificultad o no quieres leer, no te preocupes. Puedes activar la opción de sonido, presionando el ícono de altavoz'
    }
  },
  computed: {
    textAudio () {
      return this.title + '\n\n\n\n' + this.description + '\n\n\n\n\n\n' + this.help
    }
  }
}
</script>
