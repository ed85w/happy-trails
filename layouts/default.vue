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

<style lang="scss">

@font-face {
  font-family: 'Ink Free';
  src: url('~static/fonts/Inkfree.woff') format('woff'), /* Pretty Modern Browsers */
       url('~static/fonts/Inkfree.ttf')  format('truetype'), /* Safari, Android, iOS */
}

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

p,
td {
  font-size: 0.8rem;
}

h1 {
  font-size: 3rem;
}

.font-cursive {
  font-family: 'Ink Free', cursive;
}

.btn-primary {
  background: $site-blue;
  border: 2px solid white;
  font-family: 'Ink Free', cursive;
  font-weight: bold;

  &:hover {
    background: $site-grey;
    border: 2px solid white;
  }

}

.btn-secondary {
  background: $site-grey;
  border: 2px solid white;
  font-family: 'Ink Free', cursive;
  font-weight: bold;

  &:hover {
    background: $site-blue;
    border: 2px solid white;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {

h1 {
  font-size: 4rem;
}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {

  p,
  td {
    font-size: 1rem;
  }

}

}

</style>
