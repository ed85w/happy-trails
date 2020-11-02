<template>
  <div>
    <AppNavbar />
    <Nuxt />
    <AppFooter />
  </div>
</template>

<script>

import AppNavbar from '../components/AppNavbar'
import AppFooter from '../components/AppFooter'

export default {
  components: {
    AppNavbar,
    AppFooter
  }

}
</script>

<style>
.test {
  border: 2px solid red;
  /* height: 200px; */
}

html {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
}

.font-cursive {
  font-family: 'Caveat', cursive;
}
</style>
