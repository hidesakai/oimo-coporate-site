<template>
  <div id="contact">
    <main class="primary">
      <section class="section">
        <div class="container is-fluid">
          <div class="columns is-centered">
            <div class="column is-half-desktop">
              <div class="content">
                <h2 class="title is-3 is-family-secondary has-text-weight-bold">Contact</h2>
                <!-- class, action, methodを変更しないでください -->
                <form class="formrun" action="https://form.run/api/v1/r/wi9mf2fvbsayw0dwuk3bqnur" method="post">
                  <!-- ↓自由に要素を追加・編集することができます -->
                  <div class="field">
                    <label class="label">お名前 [必須]</label>
                    <div class="control">
                      <input name="お名前" class="input" type="text" data-formrun-required data-formrun-class-if-error=" is-danger">
                    </div>
                    <div data-formrun-show-if-error="お名前" class="help is-danger">お名前を入力してください</div>
                  </div>

                  <div class="field">
                    <label class="label">メールアドレス [必須]</label>
                    <div class="control">
                      <input name="メールアドレス" class="input" type="text" data-formrun-type="email" data-formrun-required data-formrun-class-if-error=" is-danger">
                    </div>
                    <div data-formrun-show-if-error="メールアドレス" class="help is-danger">メールアドレスを正しく入力してください</div>
                  </div>

                  <div class="field">
                    <label class="label">お問い合わせ [必須]</label>
                    <div class="control">
                      <textarea name="お問い合わせ" class="textarea" data-formrun-required data-formrun-class-if-error=" is-danger"></textarea>
                    </div>
                    <div data-formrun-show-if-error="お問い合わせ" class="help is-danger">お問い合わせ内容を入力してください</div>
                  </div>

                  <div class="_formrun_gotcha">
                    <style media="screen">._formrun_gotcha {position:absolute!important;height:1px;width:1px;overflow:hidden;}</style>
                    <label for="_formrun_gotcha">If you are a human, ignore this field</label>
                    <input type="text" name="_formrun_gotcha" id="_formrun_gotcha" tabindex="-1">
                  </div>

                  <div class="field recaptcha">
                    <div class="g-recaptcha" data-sitekey="6Ld1nfgUAAAAAHbhQviDzpis8b8fF9IpdqknMVGB"></div>
                  </div>

                  <div class="field">
                    <div class="control">
                      <button type="submit" class="button is-primary" data-formrun-error-text="未入力の項目があります" data-formrun-submitting-text="送信中...">送信</button>
                    </div>
                  </div>
                </form>
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

declare global {
    interface Window {
        Formrun: any,
    }
}

export default Vue.extend({
  name: 'contact',
  layout: 'without-footer',
  head: {
    title: 'お問い合わせ | ' + process.env.titleBase,
    meta: [
      { hid: 'og:type', property: 'og:type', content: 'article' },
      { hid: 'og:title', property: 'og:title', content: 'お問い合わせ | ' + process.env.titleBase },
      { hid: 'og:url', property: 'og:url', content: process.env.baseUri + 'contact/' }
    ],
    script: [
      {
        src: 'https://www.google.com/recaptcha/api.js'
      }
    ]
  },
  async mounted() {
    this.$nextTick(() => {
      window.Formrun.init('.formrun')
    })
  }
})
</script>
