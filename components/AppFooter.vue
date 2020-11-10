<template>
  <div class="container-fluid pr-0 pl-0">
    <img src="~static/img/footer-grass.png" alt="grassy footer">
    <div class="col-12 pt-3 pb-3 text-center footer">
      <h3 class="font-cursive pt-3">
        Happy Trails Pet Services
      </h3>
      <div class="col-12 text-center">
        <ul class="footer-socials pl-0">
          <li><a href="mailto:happytrailsservices@outlook.com"><fa :icon="['far','envelope']" /></a></li>
          <li><a href="tel:07753224909"><fa :icon="['fas','phone-alt']" /></a></li>
          <li><a href="https://www.facebook.com/Happy-Trails-Pet-Services-1655627351125018"><fa :icon="['fab','facebook']" /></a></li>
          <li><a href="https://www.instagram.com/happytrailspetservices"><fa :icon="['fab','instagram']" /></a></li>
        </ul>
      </div>
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

    ul.footer-socials {
      list-style: none;

      li {
        display: inline-block;

        a {
          font-size: 2rem;
          padding: 15px;
          color: white;

          &:hover {
            color: $site-grey;
          }
        }
      }

    }

}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {
    .container-fluid {
      margin-top: -60px;

      img {
        max-height: 60px;
      }

      ul.footer-socials li a {
        padding: 1.8rem;
      }

    }
}

</style>
