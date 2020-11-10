<template>
  <section class="gallery">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 gallery-top-row">
          <div class="polaroid polaroid1">
            <img src="~static/img/dog-1.jpeg" alt="zoe from happy trails pet services with mylo the dog">
            <div class="caption font-cursive">
              "Zoe is fab with Mylo and he loves his walks and adventures with her. I can't recommend her enough."
            </div>
            <div class="testimonial">
              Kerri, Mylo's owner
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 gallery-top-row">
          <div class="polaroid polaroid2">
            <img src="~static/img/dog-2.jpeg" alt="zoe from happy trails pet services with 2 dogs">
            <div class="caption font-cursive">
              "I would highly recommend Zoe to anyone, she is easy going and would help anyone."
            </div>
            <div class="testimonial">
              Chez, xxxxx owner
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="polaroid polaroid3">
            <img src="~static/img/dog-3.jpeg" alt="zoe from happy trails pet services with 2 dogs">
            <div class="caption font-cursive">
              "Our pooch loves Zoe!!! She is so friendly and approachable. I would highly recommend Happy Trails Pet Services."
            </div>
            <div class="testimonial">
              Carly, xxxxx owner
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="polaroid polaroid4">
            <img src="~static/img/dog-4.png" alt="zoe from happy trails pet services with 2 dogs">
            <div class="caption font-cursive">
              "Zoe looks after our dog and goes above and beyond taking care of her. She also pet sits our cats. I can't recommend her enough."
            </div>
            <div class="testimonial">
              Jordan, Lyla's owner
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="polaroid polaroid5">
            <img src="~static/img/dog-5.png" alt="zoe from happy trails pet services with 2 dogs">
            <div class="caption font-cursive">
              "Zoe looks after our dog and goes above and beyond taking care of her. She also pet sits our cats. I can't recommend her enough."
            </div>
            <div class="testimonial">
              Jordan, Lyla's owner
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6">
          <div class="polaroid polaroid6">
            <img src="~static/img/dog-6.jpeg" alt="zoe from happy trails pet services with 2 dogs">
            <div class="caption font-cursive">
              "Zoe looks after our dog and goes above and beyond taking care of her. She also pet sits our cats. I can't recommend her enough."
            </div>
            <div class="testimonial">
              Jordan, Lyla's owner
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

    margin-top: 80px;
    background-image: url('~static/img/grey-paw.png');
    background-position: 50% 50%;
    background-size: 80%;

  .gallery-top-row {
    margin-top: 0;
  }

  .polaroid {
    position: relative;
    max-width: 70%;
    margin: 2rem auto;
    padding: 0.8rem;
    background: #fff;
    box-shadow: 0 4px 6px rgba(0, 0, 0, .3);
    transition: 0.5s ease;
    z-index: 5;

    &:hover {
        transform: rotate(0);
        transform: scale(1.3);
        z-index: 50 !important;
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
      font-size: 0.8rem;
      font-weight: bold;
      text-align: left;
  }

  .testimonial {
    font-size: 0.8rem;
    color: $site-blue;
  }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {

.gallery {

  background-size: 25%;

  .gallery-top-row {
    margin-top: 90px;
  }

  .polaroid {

    .caption,
    .testimonial {
      font-size: 1rem;
    }

  }

}

}

</style>
