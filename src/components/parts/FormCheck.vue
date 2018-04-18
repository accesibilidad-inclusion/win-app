<template>
  <div class="custom-control custom-checkbox">
    <input
      type="checkbox"
      class="custom-control-input"
      :value="realValue"
      :id="id"
      :name="name"
      v-model="checkValue">
    <label :for="id" class="custom-control-label"><slot></slot></label>
  </div>
</template>

<script>
export default {
  name: 'FormCheck',
  props: ['name', 'id', 'value', 'realValue'],
  computed: {
    checkValue: {
      get: function () {
        return this.value.indexOf(this.id) !== -1
      },
      set: function () {
        this.$emit('change', this.realValue)
      }
    },
    classes: function () {
      return ['btn', (this.isLarge ? 'btn-lg' : '')].join(' ')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/functions";
@import "./../../assets/sass/_custom.scss";

.custom-checkbox {
  margin-bottom: 5px;
  padding: 0 !important;

  & .custom-control-input ~ .custom-control-label {
    position: relative;
    width: 100%;
    padding: $spacer*.5 $spacer*.5 $spacer*.5 $spacer*3;
    font-size: $lead-font-size;
    line-height: 1.35;
    background-color: rgba($white, .2);
    transition: $transition-base;
  }
  & .custom-control-input:checked ~.custom-control-label {
    color: $gray;
    background-color: $white;
    box-shadow: inset -5px 0 0 $brand-green;
  }
  & .custom-control-input ~ .custom-control-label::before,
  & .custom-control-input ~ .custom-control-label::after {
    top: $spacer * .5;
    left: $spacer * .5;
    width: $spacer * 1.5625;
    height: $spacer * 1.5625;
  }
  & .custom-control-input ~ .custom-control-label::before {
    background-color: $white;
  }
  & .custom-control-input:checked ~ .custom-control-label::before {
    box-shadow: 0 0 0 3px $brand-green;
  }
}

@media screen and ( min-height: 530px ) {
  .custom-checkbox {
    & .custom-control-input ~ .custom-control-label {
      padding: $spacer*.625 $spacer*.625 $spacer*.625 $spacer*3;
      font-size: $lead-font-size;
      line-height: 1.35;
    }
    & .custom-control-input ~ .custom-control-label::before,
    & .custom-control-input ~ .custom-control-label::after {
      top: $spacer * .625;
      left: $spacer * .625;
      width: $spacer * 1.5625;
      height: $spacer * 1.5625;
    }
  }
}
</style>
