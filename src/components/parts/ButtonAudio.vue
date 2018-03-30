<template>
  <div class="audio">
    <button v-bind:class="{ 'btn-audio' : isActive, 'btn-audio--playing' : isPlaying }">
      <svgicon name="audio" width="24" height="24" color="#fff"></svgicon>
    </button>
    <audio class="audio-player">
      <source v-bind:src="getSource">
    </audio>
  </div>
</template>

<script>
import '@/assets/icons/audio'
export default {
  name: 'ButtonAudio',
  props: ['getSource'],
  data () {
    return {
      isActive: true,
      isPlaying: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "./../../assets/sass/main.scss";

// Button
.btn-audio {
  @extend .btn;
  width: 80px;
  height: 80px;
  padding: 0;
  line-height: 100%;
  text-align: center;
  border-top-right-radius: 100%;
  background-color: $brand-orange;
}

// Default HTML Audio
.audio-player {
  display: none;
  width: 0;
  height: 0;
}

// Sólo cuando se muestra dentro de footer
.footer {
  .audio {
    float: left;
    margin-left: ($grid-gutter-width/2) * -1;
  }
  .btn-audio {
    .svg-icon {
      margin-left: -15px;
      margin-bottom: -10px;
    }
  }
}

// Sólo cuando se muestra dentro de .welcome-help
.welcome-help {
  .audio {
    width: 80px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: calc((1rem + 40px) * -1);
  }
  .btn-audio {
    border-radius: 50%;
  }
}
</style>
