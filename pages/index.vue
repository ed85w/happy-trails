<template>
  <div>
    <section class="container-fluid landing">
      <div class="row">
        <div class="col-12 p-0 welcome-text-div">
          <h1 class="m-0 welcome-text reenie-beenie">
            Welcome to
          </h1>
          <div class="welcome-inner">
            <h4 class="mb-0 reenie-beenie">
              Happy Trails Pet Services
            </h4>
            <p class="pb-2">
              Dog Walking & Pet Sitting for your Furry Friends
            </p>
          </div>
          <button class="btn btn btn-primary mt-3">
            Contact Me
          </button>
        </div>
      </div>
    </section>
    <section class="container-fluid about">
      <div class="row">
        <div class="col-12 col-md-6 order-md-2">
          <div class="polaroid">
            <img src="~static/img/happy-trails-zoe.jpeg">
            <div class="caption reenie-beenie">
              Hi, I'm Zoe, your fairy dog mother!
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 order-md-1">
          <h1>About me</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi consequatur harum, eius at qui ducimus accusantium numquam soluta sunt veritatis ab ut exercitationem amet. Aliquid architecto dignissimos mollitia temporibus nesciunt.Dolorem officiis, natus a culpa illum sunt laborum ab atque, rem necessitatibus quas? Totam aperiam illum laborum sit non voluptas perferendis assumenda, natus aliquid minima praesentium? Tenetur sint soluta numquam?
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

.landing {

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
        line-height: 0.7;
      }

      .welcome-inner {
        background: $site-blue;

        p {
          font-size: 0.7rem;
        }

      }

      .btn-primary {
        background: $site-blue;
        border: 2px solid white;
      }

    }

  }

}

.about {
  background: $site-blue;

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

}

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) {

}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {

.landing {

  .row {
    background-position: 20% 15%;

    .welcome-text-div {
      top: 65%;
    }
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
