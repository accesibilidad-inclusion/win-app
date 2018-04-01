<template>
  <div class="screen bg-main justify-content-between">
    <header class="header container">
      <button-prev></button-prev>
    </header>
    <div class="main container">
      <h2>Tus datos</h2>
      <p class="mb-3">Vayamos conociéndonos<br>¿Cómo te llamas?</p>
      <form>
        <div class="form-group mb-4">
          <label for="name">Nombre</label>
          <input type="text" id="name" name="name" class="form-control" v-model="user.name" placeholder="Escribe tu nombre">
        </div>
        <div class="form-group">
          <label for="lastname">Apellido</label>
          <input type="text" id="lastname" name="lastname" class="form-control" v-model="user.lastname" placeholder="Escribe tu apellido">
        </div>
      </form>
    </div>
    <footer class="footer container">
      <button-audio></button-audio>
      <button-next :linkTo="'/registry-birthday'" :isDisabled="!canContinue"></button-next>
    </footer>
  </div>
</template>

<script>
import ButtonAudio from './parts/ButtonAudio'
import ButtonPrev from './parts/ButtonPrev'
import ButtonNext from './parts/ButtonNext'

export default {
  name: 'RegistryNames',
  components: {
    ButtonAudio,
    ButtonPrev,
    ButtonNext
  },
  data: function () {
    return {
      user: {
        name: '',
        lastname: ''
      }
    }
  },
  computed: {
    canContinue: function () {
      return this.user.name !== '' && this.user.lastname !== ''
    }
  }
}
</script>
