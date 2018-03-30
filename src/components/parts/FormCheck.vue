<!-- No logré hacerlo funcionar para obtener los datos desde un componente padre -->

<template>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" :name="name" :id="id" v-bind:checked="checked" v-on:change="$emit('change', $event.target.value)">
    <label :for="id" class="form-check-label"><slot></slot></label>
  </div>
</template>

<script>
export default {
  name: 'FormCheck',
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    checked: Array,
    id: String,
    name: String
  }
}
</script>
