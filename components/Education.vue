<script setup lang="ts">

import humanizeDuration from 'humanize-duration'

/*
const work = [
  {
    company: "Ensimag - Grenoble Institute of Technology",
    location: "Grenoble",
    logo: "logo-google.jpeg",
    endDate: new Date(),
    startDate: new Date("2016-07-01"),
    description: "description",
  },
  {
    company: "Preparatory classes - Lycée Champollion",
    location: "Grenoble",
    logo: "logo-novitom.jpeg",
    endDate: new Date("2016-07-01"),
    startDate: new Date("2015-08-01"),
    description: ""
  }
];
 */

</script>

<template>
  <section>

    <h2>Education</h2>

    <div class="columns">
      <Element
        company="Engineering School"
        location="Grenoble"
        logo="logo-ensimag.png"
        :lang="['C', 'C++', 'Ada', 'Javascript','Java','Python']"
        :content="[
        {
        title: 'Ensimag',
        endDate: new Date('2015-07-02'),
        startDate: new Date('2012-07-01')
        }
        ]"
        >
        <div class="description">
          <p>
            Obtained highest distinction.
          </p>
          <p>
            Three years of studies leading to a master degree.
          </p>
          <ul>
            <li>Superior National School of Applied Mathematics and Computer Science.</li>
            <li>Mathematical modeling, imaging and simulation pathway (MMIS)</li>
          </ul>
        </div>
      </Element>

      <Element
        company="Preparatory classes"
        location="Grenoble"
        logo="logo-champo.jpg"
        :lang="['OCaml', 'Mathlab', 'C++']"
        :content="[
        {
        title: 'Lycée Champollion',
        endDate: new Date('2012-09-02'),
        startDate: new Date('2010-09-01')
        }
        ]"
        >
        <div class="description">
          <p>
            Intensive undergraduate classes in advanced scientific technologies,
            mathematics, computer science, and physics for the competitive entrance
            exams to the French engineering schools.
          </p>
        </div>
      </Element>

      <Element
        location="Ugine"
        logo="logo-rene-perrin.png"
        id="lycee"
        :content="[
          {
            title: 'René Perrin',
            endDate: new Date('2010-07-01'),
            startDate: new Date('2008-07-01')
          },
          {
            title: 'Ambroise Croizat',
            endDate: new Date('2008-07-01'),
            startDate: new Date('2007-07-01')
          }
        ]"
        >
        <div class="description">
          <p>
            Obtained with the highest honors.
            <br/>
            French Scientific Baccalaureate - equivalent of British A-levels - with
            specialization in mathematics and physics.
          </p>
        </div>
      </Element>

    </div>


  </section>
</template>

<style scoped>
img {
  width: 100%;
  height: auto;
}

section {
  grid-area: education;
}

.logo {
  width: 64px;
  height: 64px;
  border-radius: 10%;
  margin-right: 10px;
  float: left;
}

.job {
  clear: both;
  margin-bottom: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}


</style>
