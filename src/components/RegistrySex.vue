<template>
  <div class="screen bg-main justify-content-between">
    <header class="header container">
      <button-prev></button-prev>
    </header>
    <div class="main container">
      <h2 class="mb-3">Indica tu sexo</h2>
      <form class="row">
        <div class="col-6 pr-2">
          <button-sex :name="'sex'" :defaultValue="'male'" :value="user.sex" @change="changeValue">Hombre</button-sex>
        </div>
        <div class="col-6 pl-2">
          <button-sex :name="'sex'" :defaultValue="'female'" :value="user.sex" @change="changeValue">Mujer</button-sex>
        </div>
      </form>
    </div>
    <footer class="footer container">
      <button-audio></button-audio>
      <button-next :linkTo="'/registry-job'" :isDisabled="!canContinue"></button-next>
    </footer>
  </div>
</template>

<script>
import ButtonAudio from './parts/ButtonAudio'
import ButtonPrev from './parts/ButtonPrev'
import ButtonNext from './parts/ButtonNext'
import ButtonSex from './parts/ButtonSex'

export default {
  name: 'RegistrySex',
  components: {
    ButtonAudio,
    ButtonPrev,
    ButtonNext,
    ButtonSex
  },
  data: function () {
    return {
      user: {
        sex: ''
      }
    }
  },
  methods: {
    changeValue: function (newValue) {
      this.user.sex = newValue
    }
  },
  computed: {
    canContinue: function () {
      return this.user.sex !== ''
    }
  }
}
</script>
