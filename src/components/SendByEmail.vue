<template>
  <div class="screen bg-main">
    <header class="header container header--result">
      <button-prev></button-prev>
    </header>
    <div class="main container">
      <div class="dimensions-graph mb-3">
        <span v-for="item in this.$store.state.results" :key="item.id">
          <dimension :classes="['dimension', 'dimension-' + item.id, item.level].join(' ')"></dimension>
        </span>
      </div>
      <h2 class="mb-3 text-center">{{ title }}</h2>
      <form>
        <div class="form-group mb-4">
          <label for="name">{{ description }}</label>
          <input type="email" id="email" name="email" class="form-control" v-model="email" @keyup="changeEmail" placeholder="Ingresa un correo electrónico">
        </div>
      </form>
    </div>
    <footer class="footer container">
      <button-audio :text="textAudio"></button-audio>
      <button-next :linkTo="linkTo"></button-next>
    </footer>
  </div>
</template>

<script>
import ButtonAudio from './parts/ButtonAudio'
import ButtonPrev from './parts/ButtonPrev'
import ButtonNext from './parts/ButtonNext'
import Dimension from './parts/Dimension'

export default {
  name: 'FinalResult',
  components: {
    ButtonAudio,
    ButtonPrev,
    ButtonNext,
    Dimension
  },
  data () {
    return {
      title: '¡Gracias!',
      description: 'Enviar a tu email electrónico.',
      email: ''
    }
  },
  methods: {
    changeEmail (event) {
      const value = event.target.value
      this.email = value
      this.$store.dispatch('sendByEmail', value)
    }
  },
  computed: {
    linkTo () {
      return this.$store.state.results.length > 0 ? '/result/' + this.$store.state.results[0].id : ''
    },
    textAudio () {
      return this.title + '\n\n\n\n\n\n' + this.description
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "./../assets/sass/_custom.scss";

.header--result {
  position: relative;
  display: flex;
  background-color: rgba($white, .2);
}
.dimension-control {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-top: 7px;
  font-size: $font-size-base * $font-size-adjust * (13/16);
}
.dimension-name {
  margin-left: $spacer;
  margin-top: 2px;
}
.dimensions-graph {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  max-width: 150px;
  margin: 0 auto;
  &::before {
    padding-top: 100%;
    content: ''
  }
  span {
    display: flex;
    width: 50%;
    height: 50%;
  }
}
.result-description {
  max-width: 500px;
  margin: 1rem auto 0 auto;
  line-height: 1.4;
}
</style>
