<template>
  <section class="gallery">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 gallery-top-row" data-aos="flip-left">
          <div class="polaroid polaroid1">
            <img src="~static/img/dog-1.jpeg" alt="zoe from happy trails pet services with mylo the dog">
            <div class="caption font-cursive">
              "Zoe is fab with Mylo and he loves his walks and adventures with her. I can't recommend her enough."
            </div>
            <div class="testimonial">
              Kerri
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 gallery-top-row" data-aos="flip-right">
          <div class="polaroid polaroid2">
            <img src="~static/img/dog-2.jpeg" alt="zoe from happy trails pet services with 2 dogs">
            <div class="caption font-cursive">
              "I would highly recommend Zoe to anyone, she is easy going and would help anyone."
            </div>
            <div class="testimonial">
              Chez
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6" data-aos="flip-left">
          <div class="polaroid polaroid3">
            <img src="~static/img/dog-3.jpeg" alt="willow the dog with a birthday hat on">
            <div class="caption font-cursive">
              "Our pooch loves Zoe!!! She is so friendly and approachable. I would highly recommend Happy Trails Pet Services."
            </div>
            <div class="testimonial">
              Carly
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6" data-aos="flip-right">
          <div class="polaroid polaroid4">
            <img src="~static/img/dog-4.png" alt="zoe from happy trails pet services with 2 dogs">
            <div class="caption font-cursive">
              "Zoe treats Sid like her own, she has so much love for him. We are very spoilt having Zoe on hand to help look after our Sid."
            </div>
            <div class="testimonial">
              Holly
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6" data-aos="flip-left">
          <div class="polaroid polaroid5">
            <img src="~static/img/dog-5.png" alt="a satisfied happy trails pet services customer!">
            <div class="caption font-cursive">
              "Cannot recommend Happy Trails enough. Zoe is such a kind, caring lady. Will most definitely be using her services again."
            </div>
            <div class="testimonial">
              Michelle
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6" data-aos="flip-right">
          <div id="polaroid6" class="polaroid polaroid6">
            <img src="~static/img/dog-6.jpeg" alt="zoe from happy trails pet services cuddling a furry friend">
            <div class="caption font-cursive">
              "Zoe looks after our dog and goes above and beyond taking care of her. She also pet sits our cats. I can't recommend her enough."
            </div>
            <div class="testimonial">
              Jordan
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head () {
    return {
      title: 'Happy Trails Pet Services | Gallery',
      meta: [
        {
          hid: 'description', // id
          name: 'description', // meta type
          content: 'Photos and testimonials from happy clients of Happy Trails Pet Services' // meta content
        }
      ]
    }
  }
}
</script>

<style lang="scss">

.gallery {

    margin-top: 80px;
    padding: 30px 0 15vw 0;
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

    &:hover {
        transform: rotate(0);
        transform: scale(1.3);
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
      width: 100%;
      max-width: 100%;
      height: 100%;
      z-index: 1 !important;
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

  padding-bottom: 9vw;
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
