<template>
  <div class="screen bg-main">
    <header class="header container">
      <button-prev></button-prev>
    </header>
    <div class="main container">
      <h2>Tus datos</h2>
      <p class="mb-3">Vayamos conociéndonos<br>¿Cómo te llamas?</p>
      <form>
        <div class="form-group mb-4">
          <label for="name">Nombre</label>
          <input type="text" id="name" name="name" class="form-control" v-model="name" @keyup="changeName" placeholder="Escribe tu nombre">
        </div>
        <div class="form-group">
          <label for="lastname">Apellido</label>
          <input type="text" id="lastname" name="lastname" class="form-control" v-model="familyName" @keyup="changeFamilyName" placeholder="Escribe tu apellido">
        </div>
      </form>
    </div>
    <footer class="footer container">
      <button-audio></button-audio>
      <button-next :linkTo="'/registration-birthday'" :isDisabled="!canContinue"></button-next>
    </footer>
  </div>
</template>

<script>
import ButtonAudio from './parts/ButtonAudio'
import ButtonPrev from './parts/ButtonPrev'
import ButtonNext from './parts/ButtonNext'

export default {
  name: 'RegistrationNames',
  components: {
    ButtonAudio,
    ButtonPrev,
    ButtonNext
  },
  data () {
    return {
      name: this.$store.state.user.given_name,
      familyName: this.$store.state.user.family_name
    }
  },
  methods: {
    changeName (event) {
      const value = event.target.value
      this.name = value
      this.$store.commit('givenName', value)
    },
    changeFamilyName (event) {
      const value = event.target.value
      this.familyName = value
      this.$store.commit('familyName', value)
    }
  },
  computed: {
    canContinue () {
      return this.name !== '' && this.familyName !== ''
    }
  }
}
</script>
