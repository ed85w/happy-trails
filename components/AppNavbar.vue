<template>
  <div>
    <nav class="container-fluid nav-container p-0">
      <div class="row">
        <div class="nav-logo col-12 col-md-3">
          <NuxtLink to="/">
            <img src="~static/img/happy-trails-logo.png" alt="" class="nav-logo-img p-1">
          </NuxtLink>
        </div>
        <div class="nav-links col-12 col-md-9 test" :class="{ menuActive : showMobileMenu }">
          <ul class="test">
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
            <li>Gallery</li>
          </ul>
        </div>
      </div>
      <button class="nav-button" :class="{ menuActive : showMobileMenu }" @click="showMobileMenu = !showMobileMenu">
        <div class="burger-line" />
        <div class="burger-line" />
        <div class="burger-line" />
      </button>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showMobileMenu: false
    }
  }
}
</script>

<style lang="scss">

.nav-container {
  padding-bottom: 5px;
  border-bottom: 5px solid $site-blue;
}

.nav-logo-img {
    width: auto;
    height: 80px;
}

.nav-links {

    position: absolute;
    top: -100%;
    height: 100vh;
    z-index: 500;
    background: $site-grey;
    transition: .3s ease-out;

    &.menuActive {
        top: 0;
    }

    ul {
        list-style: none;
        padding: 15px 0;
        text-align: center;

        li {
            padding: 10px 0;
            color: $site-blue;
            font-family: 'Caveat', cursive;
        }

    }

}

.nav-button {
  position: absolute;
  height: 60px;
  width: 60px;
  z-index: 501;
  top: 7px;
  right: 7px;
  border: none;
  background: transparent;

  &:focus {
    outline: none;
  }

  .burger-line {
      position: relative;
      width: 35px;
      height: 4px;
      margin: 7px auto;
      // border-radius: 2px;
      background: $site-blue;
      transition: ease 0.3s;
  }

  &.menuActive {

    .burger-line:first-child {
      transform: rotate(45deg);
      top: 11px;
    }

    .burger-line:nth-child(2){
      visibility: hidden;
      transition: 0s;
    }

    .burger-line:last-child {
      transform: rotate(-45deg);
      top: -11px;
    }
  }
}

/* // Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {

.nav-container {
  padding-bottom: 10px;
}

.nav-logo-img {
  height: 110px;
}

.nav-links {
  position: relative;
  height: auto;
  background: white;
  transition: 0s;

  ul {
    position: absolute;
    right: 0;
    bottom: 0;
    margin-bottom: 0;
    padding-right: 2rem;
    padding-bottom: 0;

    li {
      display: inline-block;
      font-size: 1.5rem;
      padding: 5px 20px;
      margin: 0 1rem;
      border-radius: 10px;

      &:hover {
        background: $site-blue;
        color: white;
      }

    }

  }
}

.nav-button {
  display: none;
}

}

</style>
