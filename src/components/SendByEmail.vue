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
      <form :class="formClasses">
        <div class="form-group mb-2">
          <label for="name">{{ description }}</label>
          <input type="email" id="email" name="email" class="form-control" v-model="email" @keyup="changeEmail" placeholder="Ingresa un correo electrónico">
        </div>
      </form>
      <div class="wrapper-loading">
        <clip-loader :loading="loading" :color="'#fff'" :size="'34px'"></clip-loader>
      </div>
    </div>
    <footer class="footer container">
      <button-audio :text="textAudio"></button-audio>
      <button :class="buttonClasses" @click="sendEmail">
        <svgicon name="email" width="18" height="12" color="#34C595"></svgicon>
        Enviar correo
      </button>
    </footer>
  </div>
</template>

<script>
import ButtonAudio from './parts/ButtonAudio'
import ButtonPrev from './parts/ButtonPrev'
import Dimension from './parts/Dimension'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
import '@/assets/icons/email'

export default {
  name: 'FinalResult',
  components: {
    ButtonAudio,
    ButtonPrev,
    Dimension,
    ClipLoader
  },
  data () {
    return {
      title: '¡Gracias!',
      description: 'Enviar por correo electrónico.',
      email: '',
      loading: false,
      wasSent: false
    }
  },
  methods: {
    changeEmail (event) {
      const value = event.target.value
      this.email = value
    },
    isValidEmail (email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(email).toLowerCase())
    },
    sendEmail () {
      this.loading = true
      if (this.isValidEmail(this.email) === true) {
        this.$store
          .dispatch('sendByEmail', this.email)
          .then(
            response => {
              this.loading = false
              this.wasSent = true
            },
            response => {
              this.loading = false
              console.log(response)
            })
      }
    }
  },
  computed: {
    formClasses () {
      return [(this.loading ? 'form--loading' : ''), (this.wasSent ? 'hide' : '')].join(' ')
    },
    buttonClasses () {
      return ['btn-email', (!this.isValidEmail(this.email) ? 'disabled' : ''), (this.wasSent ? 'hide' : '')].join(' ')
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
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/buttons";

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
    // padding-top: 100%;
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
.btn-email {
  @extend .btn;
  @extend .btn-light;
  margin-bottom: $grid-gutter-width / 2;
  padding-left: $spacer;
  padding-right: $spacer;
  box-shadow: $input-btn-focus-box-shadow;
  transition: $transition-base;
  &:hover {
    background-color: $white;
  }
}
.wrapper-loading {
  position: relative;
}
.v-spinner {
  position: absolute;
  top: 0;
  left: 50%;
  margin-left: -17px;
}
.hide {
  display: none;
}
</style>
