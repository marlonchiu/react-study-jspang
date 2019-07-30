<template>
  <div>
      <h2>News-Content [{{$route.params.id}}]</h2>
      <ul>
        <li><nuxt-link :to="{name:'index'}">HOME</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
      </ul>
  </div>
</template>
<script>
export default {
  validate({params}) {
    // 验证 必须为 number
    return /^\d+$/.test(params.id)
  },
  data () {
    return {
      title: this.$route.params.title
    }
  },
  // 独立设置head 信息
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid:'description',
          name:'news',
          content:'This is news page'
        }
      ]
    }
  }
}
</script>
