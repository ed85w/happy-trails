<template>
  <div>
    <section class="contact">
      <div class="container">
        <div class="row pb-3 pb-md-5">
          <div class="col-12 text-right contact-main">
            <h1 class="font-cursive get-in-touch pl-3 pr-3">
              Get in touch
            </h1>
          </div>
          <div class="col-12">
            Socials
          </div>
          <div class="col-12">
            <form method="POST" action="https://formspree.io/ed.walker@hotmail.co.uk">
              <div class="form-group">
                <label for="name">Name *</label>
                <input id="adult_name" type="text" class="form-control" name="adult_name" required>
              </div>

              <div class="form-group">
                <label for="email">Email address</label>
                <input id="email" type="email" class="form-control" name="email">
              </div>

              <div class="form-group">
                <label for="phone">Phone Number</label>
                <input id="phone" type="text" class="form-control" name="phone">
              </div>

              <div class="form-group">
                <label for="message">Message *</label>
                <textarea id="message" class="form-control" name="message" required />
              </div>
              <button type="btn" class="btn btn-secondary">
                Send
              </button>
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

    .contact-main {
      margin-top: 95px;
    }

    h1.get-in-touch {
        display: inline;
        position: relative;
        top: -50%;
        background: white;
        color: $site-blue;
    }

    label {
        font-family: "Ink Free", cursive;
    }
}

</style>
