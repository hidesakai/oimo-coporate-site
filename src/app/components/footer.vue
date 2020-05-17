<template>
  <footer id="footer" class="section secondary">
    <div class="container is-fluid">
      <div class="is-flex-desktop">
        <div class="contact">
          <a href="/contact/" target="_blank" rel="noopener" class="button is-primary is-family-secondary">Contact</a>
        </div>
        <div class="address">
          <h2 class="subtitle is-4 is-family-secondary has-text-weight-bold">Address</h2>
          <div class="num">104-0031</div>
          <div>東京都中央区京橋１丁目１−５ セントラルビル２階</div>
        </div>
        <div class="phone">
          <h2 class="subtitle is-4 is-family-secondary has-text-weight-bold">Phone</h2>
          <div class="num"><a href="tel:03-6822-3324">03-6822-3324</a></div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Footer'
})
</script>
