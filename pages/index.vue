<template>
  <div>
    <section class="container-fluid landing-section">
      <div class="row">
        <div class="col-12 landing-main">
          <div class="row">
            <div class="col-12 p-0 welcome-text-div">
              <h1 class="m-0 welcome-text font-cursive">
                Welcome to
              </h1>
              <div class="welcome-inner">
                <h2 class="mb-0 pt-3 font-cursive">
                  Happy Trails Pet Services
                </h2>
                <p class="pb-3">
                  Dog Walking & Pet Sitting for your Furry Friends
                </p>
              </div>
              <nuxt-link to="/contact" class="btn btn btn-primary mt-3 pl-5 pr-5" aria-label="contact page">
                Contact Me
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="about" class="container-fluid about-section">
      <div class="row">
        <div class="col-12 col-md-6 order-md-2 pt-md-5" data-aos="flip-up">
          <div class="polaroid">
            <img src="~static/img/happy-trails-zoe.jpeg" alt="happy trails pet services with a furry friend!">
            <div class="caption font-cursive">
              Hi, I'm Zoe, your fairy dog mother!
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 order-md-1 p-3 p-lg-5 about-me-div">
          <h1 class="font-cursive">
            About me
          </h1>
          <p>
            First of all I would love to introduce myself, my name is Zoe and I am qualified in home pet sitting, dog walking and first aid training. I have adored and have been around pets my entire life.
          </p>
          <p>
            I am so passionate about them and have spent so much time looking after my friends and family's pets and a dog of my own called Harvey.
          </p>
          <p>
            I love walking and meeting new people and I would love you all to have a look at the services I offer and if you have any questions please don't hesitate to contact me.
          </p>
          <p>
            I am more than happy to help each and every one of you. My goal is to care and love your pets as much as you do and take them on fun adventures day in day out.
          </p>
          <nuxt-link to="/contact" type="btn" class="btn btn-secondary pl-5 pr-5" aria-label="contact page">
            Contact Me
          </nuxt-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Happy Trails Pet Services',
      meta: [
        {
          hid: 'description', // id
          name: 'description', // meta type
          content: 'Happy Trails Pet Services offers dog walking and pet sitting services to Linton on Ouse and the surrounding areas' // meta content
        }
      ]
    }
  }
}
</script>

<style lang="scss">

.landing-section {

  .row {

    .col-12.landing-main {
      position: relative;
      margin-top: 82px;
      height: 90vh;
      min-height: 560px;
      background: url("~static/img/happy-trails.jpeg");
      background-position: center;
      background-size: cover;
      border-bottom: 5px solid white;
      color: white;
      text-align: center;
    }

    .welcome-text-div {
      position: absolute;
      top: 55%;

      .welcome-text {
        font-size: 4rem;
        line-height: 0.7;
      }

      .welcome-inner {
        background: $site-blue;

        h2 {
          font-size: 1.6rem;
        }

      }

    }

  }

}

.about-section {
  padding-top: 40px;
  padding-bottom: 40px;
  background: $site-blue;
  overflow: hidden;

  .polaroid {
    max-width: 76%;
    margin: auto auto;
    padding: 0.8rem;
    background: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
    transform: rotate(15deg);
  }

  .polaroid > img{
    max-width: 100%;
    height: auto;
  }

  .caption {
    font-size: 1.2rem;
    font-weight: bold;
    text-align: center;
    line-height: 2em;
  }

  .about-me-div {
    color: white;
  }

}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {

}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {

.landing-section {

  .row {

    .col-12.landing-main {
      margin-top: 95px;
      background: url("~static/img/happy-trails-large.jpeg");
      background-size: cover;
      background-position: 50% 5%;
      background-repeat: no-repeat;

      .welcome-text-div {
        top: 50%;

        .welcome-text {
          font-size: 7rem;
        }

        .welcome-inner {

          h2 {
            font-size: 2.5rem;
          }

          p {
            font-size: 1.2rem;
          }

        }
      }
    }

  }

}

.about-section {
  padding-bottom: 9vw;

  .polaroid {
    max-width: 70%;
  }
}

}
// Large devices (desktops, 992px and up)
@media (min-width: 992px) {

}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {

}

</style>
