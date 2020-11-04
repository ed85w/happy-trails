<template>
  <div>
    <section class="services">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <h1>Services</h1>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-md-6">
            <ul>
              <li>
                <h3>Dog Walking</h3>
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
                <h3>Dog Visits</h3>
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
                <h3>Dog Sitting in Owners Home Per Day</h3>
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
                <h3>Dog Sitting per day and night</h3>
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
                <h3>Cat Home Visits</h3>
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
                <h3>Small Animal Home Visits</h3>
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
            <p>
              We tailor the care of your pet to your needs. A free in home consultation will take place prior to your service so you can meet us and we can meet you! How exciting, why not get in contact to see how we can help you and your furry friends?
            </p>
            <button class="btn btn-primary">
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="faqs">
      <div class="container">
        <div class="row">
          <div class="col-12 test">
            <h1>FAQs</h1>
          </div>
          <div class="col-12 col-md-6 test">
            <p class="cursive">
              How many dogs do you walk at one time?
            </p>
            <p>
              Happy Trails Pet Services is happy to walk groups of 3 dogs in a local dog park. We have a secure field for up 5 dogs at a time. Your pet's safety and attention is paramount. We also offer solo walks for nervous dogs or if your dog is aggressive towards other dogs.
            </p>
            <p class="cursive">
              Can you do evening and weekend walks/care?
            </p>
            <p>
              Yes, this is something we can offer. This information is located in our services price list. We also offer full or half day pet sitting.
            </p>
          </div>
          <div class="col-12 col-md-6 test">
            <p class="cursive">
              Are you insured?
            </p>
            <p>
              Abolutely! We have public liaibility insurance for dog sitting, grooming and walking which I show at all consultations.
            </p>
            <p class="cursive">
              Which areas do you cover?
            </p>
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

}
</script>

<style lang="scss">

.services {
    background: $site-grey;
    border-bottom: 5px solid white;

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

</style>
