<template>
  <div class="screen bg-main justify-content-center">
    <div class="container">
      <div class="mb-5 text-center">
        <img src="@/assets/img/logo-win.svg" alt="WIN">
      </div>
      <clip-loader :loading="loading" :color="color" :size="size"></clip-loader>
    </div>
  </div>
</template>

<script>
// Se utilzan spinners desde https://github.com/greyby/vue-spinner
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'

// Acá se debe hacer la consulta inicial y configurar la aplicación
export default {
  name: 'Splash',
  components: {
    ClipLoader
  },
  data () {
    return {
      loading: true,
      color: '#fff',
      size: '35px'
    }
  }
}
</script>
