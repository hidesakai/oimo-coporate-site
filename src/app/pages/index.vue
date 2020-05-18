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
                    株式会社 OIMO(オイモ)は、PHPでのWebシステム・Webサービス開発を取り扱っています。新規開発から保守・運用サポートなど、様々な形でのサービスをご提携させていただいております。<br>
                    OIMOは、Web開発を「スモールスタート」「最小構成」で実現することを心がけています。ご相談内容によっては、プログラミング言語を扱わないノーコード・ローコード開発をご提案させていただくこともございます。
                  </p>
                  <p>
                    PHP開発以外でのご相談も受け付けておりますので、お気軽にご相談ください。
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
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'index',
  head: {
    title: process.env.titleBase,
    meta: [
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: String(process.env.titleBase) },
      { hid: 'og:url', property: 'og:url', content: String(process.env.baseUri) },
    ]
  }
})
</script>
