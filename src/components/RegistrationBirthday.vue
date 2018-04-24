<template>
  <div class="screen bg-main">
    <header class="header container">
      <button-prev></button-prev>
    </header>
    <div class="main container">
      <h2>{{ title }}</h2>
      <form>
        <div class="form-group mb-3 mr-4">
          <label for="day">Día</label>
          <form-select :id="'day'" :options="days" :optionDefault="'Selecciona el día'" v-model="dayBirth" @input="dayChange"></form-select>
        </div>
        <div class="form-group mb-3 mr-4">
          <label for="month">Mes</label>
          <form-select :id="'month'" :options="months" :optionDefault="'Selecciona el mes'" v-model="monthBirth" @input="monthChange"></form-select>
        </div>
        <div class="form-group">
          <label for="ano">Año</label>
          <form-select :id="'year'" :options="years" :optionDefault="'Selecciona el año'" v-model="yearBirth" @input="yearChange"></form-select>
        </div>
      </form>
    </div>
    <footer class="footer container">
      <button-audio :text="textAudio"></button-audio>
      <button-next :linkTo="'/registration-sex'" :isDisabled="!canContinue"></button-next>
    </footer>
  </div>
</template>

<script>
import ButtonAudio from './parts/ButtonAudio'
import ButtonPrev from './parts/ButtonPrev'
import ButtonNext from './parts/ButtonNext'
import FormSelect from './parts/FormSelect'

export default {
  name: 'RegistrationBirthday',
  components: {
    ButtonAudio,
    ButtonPrev,
    ButtonNext,
    FormSelect
  },
  data () {
    return {
      title: 'Fecha de nacimiento',
      dayBirth: this.$store.state.user.dayBirth,
      monthBirth: this.$store.state.user.monthBirth,
      yearBirth: this.$store.state.user.yearBirth
    }
  },
  computed: {
    days () {
      return this.arrayInts(1, 31)
    },
    months () {
      return [
        { value: '01', text: 'Enero' },
        { value: '02', text: 'Febrero' },
        { value: '03', text: 'Marzo' },
        { value: '04', text: 'Abril' },
        { value: '05', text: 'Mayo' },
        { value: '06', text: 'Junio' },
        { value: '07', text: 'Julio' },
        { value: '08', text: 'Agosto' },
        { value: '09', text: 'Septiembre' },
        { value: '10', text: 'Octubre' },
        { value: '11', text: 'Noviembre' },
        { value: '12', text: 'Diciembre' }
      ]
    },
    years () {
      var end = new Date().getFullYear()
      return this.arrayInts(1930, end).reverse()
    },
    birthday () {
      if (this.yearBirth !== '' & this.monthBirth !== '' && this.dayBirth !== '') {
        return this.yearBirth + '-' + this.monthBirth + '-' + this.dayBirth
      }
      return ''
    },
    canContinue () {
      return this.dayBirth !== null && this.dayBirth !== null && this.yearBirth !== null
    },
    textAudio () {
      return this.title + '\n\n\n\n' + 'Día' + '\n\n\n\n' + 'Mes' + '\n\n\n\n' + 'Año'
    }
  },
  methods: {
    dayChange (value) {
      this.$store.commit('dayBirth', value)
      this.$store.commit('birthday', this.birthday)
    },
    monthChange (value) {
      this.$store.commit('monthBirth', value)
      this.$store.commit('birthday', this.birthday)
    },
    yearChange (value) {
      this.$store.commit('yearBirth', value)
      this.$store.commit('birthday', this.birthday)
    },
    pad (num, size) {
      let s = num + ''
      while (s.length < size) s = '0' + s
      return s
    },
    arrayInts (start, end) {
      var array = []
      for (var i = start; i <= end; i++) {
        array.push({ 'value': this.pad(i, 2), 'text': i })
      }
      return array
    }
  }
}
</script>
