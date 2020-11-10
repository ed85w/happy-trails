<template>
  <div>
    <section class="contact">
      <div class="container">
        <div class="row pb-3 pb-md-5">
          <div class="col-12 text-right contact-main pr-0">
            <h1 class="font-cursive get-in-touch pl-3 pr-3">
              Get in touch
            </h1>
          </div>
          <div class="col-12 col-md-8 offset-md-2">
            <ul class="socials pl-0">
              <li><a href="mailto:happytrailsservices@outlook.com"><fa :icon="['far','envelope']" /><span class="pl-2 d-none d-md-inline">Email me: </span><h5 class="d-inline pl-2">happytrailsservices@outlook.com</h5></a></li>
              <li><a href="tel:07753224909"><fa :icon="['fas','phone-alt']" /><span class="pl-2 d-none d-md-inline">Phone me: </span><h5 class="d-inline pl-2">07753 224909</h5></a></li>
              <li><a href="https://www.facebook.com/Happy-Trails-Pet-Services-1655627351125018"><fa :icon="['fab','facebook']" /><span class="pl-2 d-none d-md-inline">Like me on Facebook: </span><h5 class="d-inline pl-2">happytrailsservices</h5></a></li>
              <li><a href="https://www.instagram.com/happytrailspetservices"><fa :icon="['fab','instagram']" /><span class="pl-2 d-none d-md-inline">Follow me on Instagram: </span><h5 class="d-inline pl-2">happytrailsservices</h5></a></li>
            </ul>
          </div>
          <div class="col-12">
            <form method="POST" action="https://formspree.io/ed.walker@hotmail.co.uk">
              <div class="form-row">
                <div class="form-group col-12 col-md-6">
                  <label for="name">Name *</label>
                  <input id="adult_name" type="text" class="form-control" name="adult_name" required>
                </div>

                <div class="form-group col-12 col-md-6">
                  <label for="phone">Phone Number</label>
                  <input id="phone" type="text" class="form-control" name="phone">
                </div>

                <div class="form-group col-12">
                  <label for="email">Email address</label>
                  <input id="email" type="email" class="form-control" name="email">
                </div>

                <div class="form-group col-12">
                  <label for="message">Message *</label>
                  <textarea id="message" class="form-control" name="message" required />
                </div>

                <button type="btn" class="btn btn-secondary">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

section.contact {
    background: $site-blue;
    border-top: 30px solid white;
    margin-top: 82px;

    h1.get-in-touch {
        display: inline;
        position: relative;
        top: -50%;
        background: white;
        color: $site-blue;
    }

    ul.socials {
      list-style: none;

      li {

        padding-bottom: 1rem;

        a {
          color: white;
          font-size: 2rem;

          &:hover {
            text-decoration: none;
            color: $site-grey;
          }

          span {
            font-family: 'Ink Free', cursive;
          }

          h5 {
            font-size: 1.5rem;
          }

        }

      }

    }

    label {
        font-family: "Ink Free", cursive;
    }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {

  section.contact {
    margin-top: 120px;
  }

}

</style>
