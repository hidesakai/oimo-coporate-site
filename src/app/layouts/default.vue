<template>
  <div>
    <nuxt />
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Footer from '@/components/footer.vue'
export default Vue.extend({
  components: {
    Footer
  }
})
</script>
