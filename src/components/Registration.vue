<template>
  <div class="screen bg-main">
    <header class="header container">
      <button-prev></button-prev>
    </header>
    <div class="main container">
      <h2 class="mb-3">{{ title }}</h2>
      <p>{{ description }}</p>
      <form>
        <div class="form-group mb-4">
          <label for="id">RUT o DNI</label>
          <input type="text" class="form-control" name="id" v-model="personalId" @keyup="changeValue" placeholder="Escribe tu Rut o DNI">
        </div>
      </form>
    </div>
    <footer class="footer container">
      <button-audio :text="textAudio"></button-audio>
      <button-next :linkTo="'/registration-names'" :isDisabled="!canContinue"></button-next>
    </footer>
  </div>
</template>

<script>
import ButtonAudio from './parts/ButtonAudio'
import ButtonPrev from './parts/ButtonPrev'
import ButtonNext from './parts/ButtonNext'

export default {
  name: 'Registration',
  components: {
    ButtonAudio,
    ButtonPrev,
    ButtonNext
  },
  data () {
    return {
      title: 'Registro',
      description: 'Debes crear una cuenta ingresando tu Rut o DNI',
      personalId: this.$store.state.user.personal_id
    }
  },
  methods: {
    changeValue (event) {
      const value = event.target.value
      this.personalId = value
      this.$store.commit('personalId', value)
    }
  },
  computed: {
    canContinue () {
      return this.personalId !== ''
    },
    textAudio () {
      return this.title + '\n\n\n\n' + this.description
    }
  }
}
</script>
