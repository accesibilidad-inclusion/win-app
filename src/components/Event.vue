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
import router from '@/router'
import ClipLoader from 'vue-spinner/src/ClipLoader.vue'
export default {
  name: 'Event',
  components: {
    ClipLoader
  },
  data () {
    return {
      loading: true,
      color: '#fff',
      size: '35px'
    }
  },
  beforeRouteEnter (to, from, next) {
    if (to.params.hash) {
      next(vm => {
        vm.$store
          .dispatch('getEvent', to.params.hash)
          .then(() => {
            router.push({ path: '/' })
          })
      })
    }
  }
}
</script>
