<template>
  <router-link v-bind:to="linkTo" class="btn-prev">
    <svgicon name="chevron-left" width="18" height="18" color="#fff"></svgicon>
  </router-link>
</template>

<script>
import '@/assets/icons/chevron-left'
export default {
  name: 'ButtonPrev',
  props: ['linkTo']
}
</script>
