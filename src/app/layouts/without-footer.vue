<template>
  <div>
    <nuxt />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  head () {
    return {
      bodyAttrs: {
        class: 'without-footer'
      }
    }
  }
})
</script>
