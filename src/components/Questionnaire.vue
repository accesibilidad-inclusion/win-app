<template>
  <div class="screen bg-main">
    <header class="header container">
      <button-prev></button-prev>
    </header>
    <div class="main container">
      <div :class="stagebarClasses">
        <span class="stagebar"></span>
        <span class="stagebar"></span>
        <span class="stagebar"></span>
        <span class="stagebar"></span>
      </div>
      <h2>{{ questionnaire.name }}</h2>
      <p>{{ questionnaire.description }}</p>
    </div>
    <footer class="footer container">
      <button-audio :text="textAudio"></button-audio>
      <button-next :linkTo="'/questionnaire/' + this.$route.params.questionnaire_id + '/question/' + questionnaire.questions[0].id" :isDisabled="false"></button-next>
    </footer>
  </div>
</template>

<script>
import ButtonAudio from './parts/ButtonAudio'
import ButtonPrev from './parts/ButtonPrev'
import ButtonNext from './parts/ButtonNext'
import ButtonOption from './parts/ButtonOption'

export default {
  name: 'RegistrationSuccess',
  data () {
    return {
      questionnaire: this.$store.getters.getQuestionnaire()
    }
  },
  components: {
    ButtonAudio,
    ButtonPrev,
    ButtonNext,
    ButtonOption
  },
  computed: {
    textAudio () {
      return this.questionnaire.name + '\n\n\n\n\n' + this.questionnaire.description
    },
    stagebarClasses (key) {
      const index = this.$store.state.questionnaire.indexOf(this.questionnaire)
      return ['stagebars', 'stagebars--' + (index + 1)]
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "./../assets/sass/_custom.scss";
@import "~bootstrap/scss/mixins";
@import "~bootstrap/scss/buttons";

.stagebars {
  display: block;
  width: 125px;
  height: 157px;
  margin: 0 auto 2rem auto;
  @include media-breakpoint-up(md) {
    margin-left: 0;
  }
}
.stagebar {
  float: left;
  width: 25px;
  height: 157px;
  margin-left: 8px;
  background-color: #09759b;
  border-bottom: 5px solid rgba(#000, .1);
}
.stagebar:nth-child(1) {
  margin-left: 0;
}
.stagebars--4 .stagebar:nth-child(1),
.stagebars--3 .stagebar:nth-child(1),
.stagebars--2 .stagebar:nth-child(1),
.stagebars--1 .stagebar:nth-child(1) {
  background-color: #ffe356;
}
.stagebars--4 .stagebar:nth-child(2),
.stagebars--3 .stagebar:nth-child(2),
.stagebars--2 .stagebar:nth-child(2) {
  background-color: #fb8460;
}
.stagebars--4 .stagebar:nth-child(2),
.stagebars--3 .stagebar:nth-child(2) {
  background-color: #86e2d5;
}
.stagebars--4 {
  background-color: #90ee90;
}
</style>
