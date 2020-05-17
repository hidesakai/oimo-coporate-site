<template>
  <div id="index">
    <main class="primary">
      <section class="section">
        <div class="container is-fluid">
          <div class="columns">
            <div class="column is-three-fifths-fullhd">
              <h1 class="logo"><figure><img src="~/assets/img/logo.svg" alt="OIMO"></figure></h1>
              <div class="content">
                <h2 class="title is-3 is-family-secondary has-text-weight-bold">About OIMO</h2>
                <div class="lead">
                  <p>
                    FITはブランディング・Webサイト制作を主とする、フリーランスのデザインスタジオです。<br>
                    FITはいわゆる企業のDesign・Webの制作会社ではありません。 少数精鋭で、Design &amp; Directionの両軸から、新しい視点と発想力で、企画提案、要件定義からディレクション・デザイン・Web実装までを行います。
                  </p>
                  <p>
                    制作協力・制作依頼などは、<br>
                    hello@fitd.jpまでお気軽にご相談ください
                  </p>
                </div>
                <div class="sign">
                  <div class="position">代表取締役</div>
                  <div class="name">酒井 秀暢</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Footer from '@/components/footer.vue'

export default Vue.extend({
  head() {
    return {
      title: 'OIMO Inc.',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'ディスクリプションディスクリプションディスクリプションディスクリプション'
        }
      ]
    }
  },
  components: {
    Footer
  }
})
</script>
