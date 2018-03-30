<template>
  <div class="screen bg-main justify-content-between">
    <header class="header container">
      <button-prev :linkTo="'/welcome'"></button-prev>
    </header>
    <div class="main container">
      <h2>¿Estás en situación de discapacidad?</h2>
    </div>
    <footer class="footer container">
      <button-audio></button-audio>
      <button-next :linkTo="'/disability-details'"></button-next>
    </footer>
  </div>
</template>

<script>
import ButtonAudio from './parts/ButtonAudio'
import ButtonPrev from './parts/ButtonPrev'
import ButtonNext from './parts/ButtonNext'

export default {
  name: 'Disability',
  components: {
    ButtonAudio,
    ButtonPrev,
    ButtonNext
  }
}
</script>
