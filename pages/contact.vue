<template>
  <div>
    <section class="contact">
      <div class="container">
        <div class="row">
          <div class="col-12 text-right contact-main pr-0">
            <h1 class="font-cursive get-in-touch pl-3 pr-3">
              Get in touch
            </h1>
          </div>
          <div class="col-12 pt-3 pb-3 pt-md-5 pb-md-5">
            <ul class="socials pl-0">
              <li><a href="mailto:happytrailsservices@outlook.com"><fa :icon="['far','envelope']" /><span class="pl-2 d-none d-md-inline">Email me: </span><h5 class="d-inline pl-2">happytrailsservices@outlook.com</h5></a></li>
              <li><a href="tel:07753224909"><fa :icon="['fas','phone-alt']" /><span class="pl-2 d-none d-md-inline">Phone me: </span><h5 class="d-inline pl-2">07753 224909</h5></a></li>
              <li><a href="https://www.facebook.com/Happy-Trails-Pet-Services-1655627351125018"><fa :icon="['fab','facebook']" /><span class="pl-2 d-none d-md-inline">Like me on Facebook: </span><h5 class="d-inline pl-2">Happy Trails Pet Services</h5></a></li>
              <li><a href="https://www.instagram.com/happytrailspetservices"><fa :icon="['fab','instagram']" /><span class="pl-2 d-none d-md-inline">Follow me on Instagram: </span><h5 class="d-inline pl-2">happytrailspetservices</h5></a></li>
            </ul>
          </div>
          <div class="col-12">
            <form method="POST" action="https://formspree.io/f/xleoleyl">
              <div class="form-row">
                <div class="form-group col-12 col-md-6">
                  <label for="name">Name</label>
                  <input id="name" type="text" class="form-control" name="name" required>
                </div>

                <div class="form-group col-12 col-md-6">
                  <label for="phone">Phone Number</label>
                  <input id="phone" type="text" class="form-control" name="phone" required>
                </div>

                <div class="form-group col-12">
                  <label for="email">Email address</label>
                  <input id="email" type="email" class="form-control" name="email" required>
                </div>

                <div class="form-group col-12">
                  <label for="message">Message</label>
                  <textarea id="message" class="form-control" name="message" required />
                </div>

                <button type="btn" class="btn btn-secondary mt-3 ml-1 pl-5 pr-5" aria-label="submit form">
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
  head () {
    return {
      title: 'Happy Trails Pet Services | Contact',
      meta: [
        {
          hid: 'description', // id
          name: 'description', // meta type
          content: 'How to get in touch with Happy Trails Pet Services - we\'d love to hear from you!' // meta content
        }
      ]
    }
  }
}
</script>

<style lang="scss">

section.contact {
    background: $site-blue;
    border-top: 30px solid white;
    margin-top: 82px;
    padding-bottom: 15vw;

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

        position: relative;
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
            position: absolute;
            top: 25%;
            font-size: 0.9rem;
          }

        }

      }

    }

    label {
      font-family: "Ink Free", cursive;
      font-size: 1.5rem;
      font-weight: bold;
      color: white;
    }
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {

  section.contact {
    margin-top: 120px;
    padding-bottom: 9vw;

    ul.socials li a h5 {
      position: static;
      font-size: 1.5rem;
    }
  }

}

</style>
