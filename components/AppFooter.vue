<template>
  <div class="container-fluid">
    <img src="~static/img/footer-grass.png" alt="">
    <div class="col-12 test">
      footer
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">

.container-fluid {
    margin-top: -15px;
    overflow: hidden;

    img {
        width: 114%;
        position: relative;
        left: -6%;
    }

}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
    .container-fluid {
        margin-top: -50px;
    }
}

</style>
