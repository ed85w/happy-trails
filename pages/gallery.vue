<template>
  <section class="gallery">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6">
          <div class="polaroid polaroid1">
            <img src="~static/img/dog-1.jpeg">
            <div class="caption font-cursive">
              Hi, I'm Zoe, your fairy dog mother!
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="polaroid polaroid2">
            <img src="~static/img/happy-trails-zoe.jpeg">
            <div class="caption font-cursive">
              Hi, I'm Zoe, your fairy dog mother!
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="polaroid polaroid3">
            <img src="~static/img/happy-trails-zoe.jpeg">
            <div class="caption font-cursive">
              Hi, I'm Zoe, your fairy dog mother!
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="polaroid polaroid4">
            <img src="~static/img/happy-trails-zoe.jpeg">
            <div class="caption font-cursive">
              Hi, I'm Zoe, your fairy dog mother!
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="polaroid polaroid5">
            <img src="~static/img/happy-trails-zoe.jpeg">
            <div class="caption font-cursive">
              Hi, I'm Zoe, your fairy dog mother!
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="polaroid polaroid6">
            <img src="~static/img/happy-trails-zoe.jpeg">
            <div class="caption font-cursive">
              Hi, I'm Zoe, your fairy dog mother!
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.gallery {

    .polaroid {
        max-width: 70%;
        margin: 2rem auto;
        padding: 0.8rem;
        background: #fff;
        box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
        transition: 0.5s ease;

        &:hover {
            transform: rotate(0);
            transform: scale(1.2);
        }
    }

    .polaroid1 {
        transform: rotate(-15deg);
    }

    .polaroid2 {
        transform: rotate(20deg);
    }

    .polaroid3 {
        transform: rotate(-18deg);
    }

    .polaroid4 {
        transform: rotate(15deg);
    }

    .polaroid5 {
        transform: rotate(-5deg);
    }

    .polaroid6 {
        transform: rotate(18deg);
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
}

</style>
