<template>
  <div>
    <section class="container-fluid landing-section">
      <div class="row">
        <div class="col-12 p-0 welcome-text-div">
          <h1 class="m-0 welcome-text font-cursive">
            Welcome to
          </h1>
          <div class="welcome-inner">
            <h2 class="mb-0 pt-1 font-cursive">
              Happy Trails Pet Services
            </h2>
            <p class="pb-3">
              Dog Walking & Pet Sitting for your Furry Friends
            </p>
          </div>
          <button class="btn btn btn-primary mt-3">
            Contact Me
          </button>
        </div>
      </div>
    </section>
    <section id="about" class="container-fluid about-section">
      <div class="row">
        <div class="col-12 col-md-6 order-md-2">
          <div class="polaroid">
            <img src="~static/img/happy-trails-zoe.jpeg">
            <div class="caption font-cursive">
              Hi, I'm Zoe, your fairy dog mother!
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 order-md-1 pl-2 about-me-div">
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
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">

.landing-section {

  .row {
    height: 90vh;
    background: url("~static/img/happy-trails-pet-services.png");
    background-position: center;
    background-size: cover;
    border-bottom: 5px solid white;
    color: white;
    text-align: center;

    .welcome-text-div {
      position: absolute;
      top: 70%;

      .welcome-text {
        font-size: 4rem;
        // font-weight: bold;
        line-height: 0.7;
        text-shadow:
   -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
     1px 1px 0 #000;
      }

      .welcome-inner {
        background: $site-blue;

        p {
          font-size: 0.8rem;
        }

      }

    }

  }

}

.about-section {
  padding-top: 40px;
  padding-bottom: 40px;
  background: $site-blue;

  h1 {
    font-size: 4rem;
  }

  .polaroid {
    max-width: 70%;
    margin: 2rem auto;
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
    background-position: 20% 15%;

    .welcome-text-div {
      top: 65%;

      .welcome-text {
        font-size: 7rem;
      }

      .welcome-inner {

        p {
          font-size: 1.2rem;
        }

      }

    }

  }

}

.about-section {
  padding-top: 100px;
  padding-bottom: 100px;
}

}
// Large devices (desktops, 992px and up)
@media (min-width: 992px) {

}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {

}

</style>
