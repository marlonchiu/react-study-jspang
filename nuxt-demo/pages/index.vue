<template>
  <section class="container">
    <img src="~static/images/rocket-illustration-full.png" alt="rocket">
    <div>
      <app-logo/>
      <ul>
        <li><nuxt-link :to="{name:'index'}">HOME</nuxt-link></li>
        <li><nuxt-link :to="{name:'about'}">ABOUT</nuxt-link></li>
        <li><nuxt-link :to="{name:'news', params:{newsId:2235}}">NEWS</nuxt-link></li>
        <li><nuxt-link :to="{name:'async'}">异步获取数据</nuxt-link></li>
      </ul>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
          <a href="/about" class="button--grey">ABOUT</a>
          <a href="/news" class="button--grey">NEWS</a>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

