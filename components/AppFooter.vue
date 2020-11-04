<template>
  <div class="container-fluid pl-0 pr-0">
    <img src="~static/img/footer-grass.png" alt="">
    <div class="col-12 text-center footer">
      <h3 class="cursive">
        Happy Trails Pet Services
      </h3>
      <h3>happytrailsservices@outlook.com</h3>
      <h3 class="mb-0 pb-3">
        07753 224909
      </h3>
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
