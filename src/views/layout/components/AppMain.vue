/*
 * @Author: FT.FE.Bolin
 * @Date: 2018-04-11 17:21:54
 * @Last Modified by: FT.FE.Bolin
 * @Last Modified time: 2018-09-13 11:01:49
 */

<template>
  <section class="app-main">
    <transition
      name="fade"
      mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>
<script>
export default {
  name: 'AppMain',
  computed: {
    key () {
      return this.$route.name !== undefined ? this.$route.name + +new Date() : this.$route + +new Date()
    }
  }
}
</script>
