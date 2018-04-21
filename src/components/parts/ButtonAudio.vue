<template>
  <button class="btn-audio" v-on:click="speak()">
    <svgicon name="audio" width="24" height="24" color="#fff"></svgicon>
  </button>
</template>

<script>
import '@/assets/icons/audio'
export default {
  name: 'ButtonAudio',
  props: ['text'],
  data () {
    return {
      isActive: true,
      isPlaying: false
    }
  },
  methods: {
    speak (event) {
      const synth = window.speechSynthesis
      const voices = synth.getVoices()
      let utterThis = new SpeechSynthesisUtterance(this.text)
      for (let i = 0; i < voices.length; i++) {
        if (voices[i].name === 'Paulina') {
          utterThis.voice = voices[i]
        }
      }
      utterThis.pitch = 1
      utterThis.rate = 0.9
      synth.speak(utterThis)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "./../../assets/sass/_custom.scss";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/buttons";

// Button
.btn-audio {
  @extend .btn;
  width: 80px;
  height: 80px;
  padding: 0;
  line-height: 100%;
  text-align: center;
  border-radius: 50%;
  background-color: $brand-orange;

  @include media-breakpoint-down(lg) {
    border-radius: 0;
    border-top-right-radius: 100%;
  }
}

// Default HTML Audio
.audio-player {
  display: none;
  width: 0;
  height: 0;
}

// Sólo cuando se muestra dentro de footer
.footer {
  .btn-audio {
    float: left;
    margin-left: ($grid-gutter-width/2) * -1;
  }
  @include media-breakpoint-down(lg) {
    .btn-audio {
      .svg-icon {
        margin-left: -15px;
        margin-bottom: -10px;
      }
    }
  }
}

// Sólo cuando se muestra dentro de .welcome-help
.welcome-help {
  .btn-audio {
    display: block;
    width: 80px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: calc((1rem + 40px) * -1);
    border-radius: 50%;
  }
}
</style>
