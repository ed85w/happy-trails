<template>
  <div class="container-fluid pl-0 pr-0">
    <img src="~static/img/footer-grass.png" alt="">
    <div class="col-12 text-center footer">
      <h3 class="font-cursive pt-3">
        Happy Trails Pet Services
      </h3>
      <h5>happytrailsservices@outlook.com</h5>
      <h5 class="mb-0 pb-3">
        <a href="tel:07753224909">07753 224909</a>
      </h5>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">

.container-fluid {
    margin-top: -22px;
    overflow: hidden;

    img {
      width: 114%;
        max-height: 22px;
        position: relative;
        left: -6%;
        background-color: transparent;
    }

    .footer {
      background-color: $site-green;
      color: white;
    }

}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
    .container-fluid {
      margin-top: -60px;

      img {
        max-height: 60px;
      }

    }
}

</style>
