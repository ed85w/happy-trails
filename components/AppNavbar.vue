<template>
  <div>
    <nav class="container-fluid nav-container" :class="{ scrolled : scrolled }">
      <div class="row">
        <div class="nav-logo col-12 col-md-3">
          <NuxtLink to="/">
            <img src="~static/img/happy-trails-logo.png" alt="" class="nav-logo-img p-1 pl-md-4" :class="{ scrolled : scrolled }">
          </NuxtLink>
        </div>
        <div class="nav-links col-12 col-md-9" :class="{ menuActive : showMobileMenu }">
          <ul>
            <li class="d-md-none mt-4" :class="{ toggle: showMobileMenu }" @click="showMobileMenu = !showMobileMenu">
              <NuxtLink to="/">
                Home
              </NuxtLink>
            </li>
            <li :class="{ toggle: showMobileMenu }" @click="showMobileMenu = !showMobileMenu">
              <NuxtLink to="/#about">
                About
              </NuxtLink>
            </li>
            <li :class="{ toggle: showMobileMenu }" @click="showMobileMenu = !showMobileMenu">
              <NuxtLink to="services">
                Services
              </NuxtLink>
            </li>
            <li :class="{ toggle: showMobileMenu }" @click="showMobileMenu = !showMobileMenu">
              <NuxtLink to="gallery">
                Gallery
              </NuxtLink>
            </li>
            <li :class="{ toggle: showMobileMenu }" @click="showMobileMenu = !showMobileMenu">
              <NuxtLink to="contact">
                Contact
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      <button class="nav-button mr-2" :class="{ menuActive : showMobileMenu }" @click="showMobileMenu = !showMobileMenu">
        <div class="burger-line" />
        <div class="burger-line" />
        <div class="burger-line" />
      </button>
    </nav>
  </div>
</template>

<script>
/* eslint-disable */ 
export default {
  data () {
    return {
      showMobileMenu: false,
      scrolled: false
    }
  },
  methods: {
    handleScroll () {
      if(window.scrollY > 30) {
        this.scrolled = true
      } else {
        this.scrolled = false
      }
    }
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  }
}
</script>

<style lang="scss">

.nav-container {
  position: fixed;
  top:0;
  background: white;
  border-bottom: 5px solid $site-blue;
  transition: 1s ease-in-out;
  z-index: 9999;
}

.nav-logo-img {
  width: auto;
  height: 80px;
  transition: 1s ease-in-out;
}

.nav-links {
    position: absolute;
    top: -100vh;
    left: 0;
    height: 0;
    background: white;
    transition: .5s cubic-bezier(0.52, 0.16, 0.24, 1);
    overflow: hidden;

    &.menuActive {
        top: 0;
        height: 100vh;
    }

    ul {
        list-style: none;
        padding: 15px 0;
        text-align: center;

        li {
            padding: 10px 0;

            a {
              font-size: 2rem;
              color: $site-blue;

              &:hover {
                color: $site-grey;
                text-decoration: none;
              }
              
            }
        }

    }

}

.nav-button {
  position: absolute;
  height: 60px;
  width: 60px;
  // z-index: 501;
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

  .nav-logo-img {
    height: 110px;

    &.scrolled {
      height: 90px;
    }

  }

  .nav-links {
    position: relative;
    top: 0;
    height: auto;
    background: white;
    transition: 0s;
    min-height: 30px;

    &.menuActive {
      height: auto;
    }

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
        margin: 0;
        border-radius: 10px;

        a {
          font-size: 1.5rem;
        }

      }

    }
  }

  .nav-button {
    display: none;
  }

}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {

  .nav-links ul li {
    margin: 0 1rem;
  }

}

</style>
