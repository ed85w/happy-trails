<template>
  <div>
    <section class="services pb-3 pb-md-5">
      <div class="container">
        <div class="row">
          <div class="col-12 p-3 p-md-5 text-right services-main">
            <h1 class="font-cursive">
              Services
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6">
            <ul class="pl-0">
              <li>
                <h3 class="font-cursive">
                  Dog Walking
                </h3>
                <table>
                  <tbody>
                    <tr>
                      <td>45 minutes</td>
                      <td>£12</td>
                    </tr>
                    <tr>
                      <td>30 minutes</td>
                      <td>£10</td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>
                <h3 class="font-cursive">
                  Dog Visits
                </h3>
                <table>
                  <tbody>
                    <tr>
                      <td>30 minute visit</td>
                      <td>£8</td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>
                <h3 class="font-cursive">
                  Dog Sitting in Owners Home Per Day
                </h3>
                <table>
                  <tbody>
                    <tr>
                      <td>per day per dog</td>
                      <td>£35</td>
                    </tr>
                    <tr>
                      <td>additional dog</td>
                      <td>£17</td>
                    </tr>
                    <tr>
                      <td>duration varies</td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>
                <h3 class="font-cursive">
                  Dog Sitting per day and night
                </h3>
                <table>
                  <tbody>
                    <tr>
                      <td>per dog</td>
                      <td>£45</td>
                    </tr>
                    <tr>
                      <td>additional dog</td>
                      <td>£22</td>
                    </tr>
                    <tr>
                      <td>duration varies</td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ul>
          </div>
          <div class="col-12 col-md-6">
            <ul>
              <li>
                <h3 class="font-cursive">
                  Cat Home Visits
                </h3>
                <table>
                  <tbody>
                    <tr>
                      <td>30 minute visit (1 cat)</td>
                      <td>£7.50</td>
                    </tr>
                    <tr>
                      <td>30 minutes</td>
                      <td>£6</td>
                    </tr>
                  </tbody>
                </table>
              </li>
              <li>
                <h3 class="font-cursive">
                  Small Animal Home Visits
                </h3>
                <table>
                  <tbody>
                    <tr>
                      <td>30 minute visit (1 cat)</td>
                      <td>£6</td>
                    </tr>
                  </tbody>
                </table>
              </li>
            </ul>
            <p>
              Happy Trails Pet Services offers a wide range of pet care including dog walking and pet sitting for dogs, cats and small animals such as hamsters, guinea pigs and rabbits.
            </p>
            <p class="pb-3">
              We tailor the care of your pet to your needs. A free in home consultation will take place prior to your service so you can meet us and we can meet you! How exciting, why not get in contact to see how we can help you and your furry friends?
            </p>
            <nuxt-link to="/contact" class="btn btn-primary">
              Contact Me
            </nuxt-link>
          </div>
        </div>
      </div>
    </section>
    <section class="faqs">
      <div class="container">
        <div class="row pb-3 pb-md-5">
          <div class="col-12">
            <h1 class="font-cursive p-3 p-md-5">
              FAQs
            </h1>
          </div>
          <div class="col-12 col-md-6">
            <h5 class="font-cursive">
              How many dogs do you walk at one time?
            </h5>
            <p>
              Happy Trails Pet Services is happy to walk groups of 3 dogs in a local dog park. We have a secure field for up 5 dogs at a time. Your pet's safety and attention is paramount. We also offer solo walks for nervous dogs or if your dog is aggressive towards other dogs.
            </p>
            <h5 class="font-cursive">
              Can you do evening and weekend walks/care?
            </h5>
            <p>
              Yes, this is something we can offer. This information is located in our services price list. We also offer full or half day pet sitting.
            </p>
          </div>
          <div class="col-12 col-md-6">
            <h5 class="font-cursive">
              Are you insured?
            </h5>
            <p>
              Abolutely! We have public liaibility insurance for dog sitting, grooming and walking.
            </p>
            <h5 class="font-cursive">
              Which areas do you cover?
            </h5>
            <p>
              Happy Trails Pet Services is located in Linton on Ouse. We cover the following areas: Easingwold, Raskelf, Tollerton, Huby, Skelton, Alne, Linton on Ouse, Newton on Ouse, Tholthorpe, Sutton on the Forest and Stillington.
            </p>
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
      title: 'Happy Trails Pet Services | Services',
      meta: [
        {
          hid: 'description', // id
          name: 'description', // meta type
          content: 'A list of the services offered by Happy Trails Pet Services - these include dog walking and pet sitting services to customers in Linton on Ouse and the surrounding areas' // meta content
        }
      ]
    }
  }
}
</script>

<style lang="scss">

.services {
    background: $site-grey;
    background-image: url('~static/img/grey-paw.png');
    background-position: 135% 105%;
    background-repeat: no-repeat;
    background-size: 80%;
    border-bottom: 5px solid white;
    color: white;
    overflow: hidden;

    .services-main {
      margin-top: 82px;
    }

    ul {
      list-style-type: none;
      padding-left: 0;

      li {
        background: url(~static/img/white-paw.png);
        fill: white;
        background-size: 35px;
        background-repeat: no-repeat;
        margin-bottom: 10px;
        padding: 0 0 2rem 2.5rem;
      }

    }

    table {
        width: 100%;

        tr {
            td  {
                width: 80%;
            }
        }
    }

}

.faqs {
    background: $site-blue;
    padding-bottom: 50px;
}

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) {

  .services {
    background-position: 110% 110%;
    background-size: 40%;
  }

}

// Large devices (desktops, 992px and up)
@media (min-width: 992px) {

  .services {
    background-position: 110% 120%;
  }

}

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) {

  .services {
    background-position: 110% 130%;;
  }

}

</style>
