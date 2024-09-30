<template>
  <section>
    <h2>Work Experience </h2>

    <Element
      company="Game"
      location="Grenoble"
      logo="logo-novitom.jpeg"
      :lang="['C++','Cuda', 'OpenGl']"
      :content="
      [
      {
      title: 'Research & Development - Software Engineer',
      endDate: new Date('2016-07-01'),
      startDate: new Date('2015-08-01')
      },
      {
      title: 'Internship',
      endDate: new Date('2015-08-01'),
      startDate: new Date('2015-02-01')
      }
      ]"
      >
      <div class="description"> 
        <p>
          Novitom is a startup specialized in advanced analytical imaging powered
          by the Grenoble Synchrotron - A particle accelerator that produces X-rays.
          I develop simulators, 3D viewers, algorithms, and image processing
          tools:
        </p>
        <ul>
          <li> Interactive <strong>3D Viewers</strong> for large 3D images (meshes and volumic raytracing) </li>
          <li> Fast physical <strong>simulators</strong> (X-ray wave ...) </li>
          <li> High-performance algorithms (HPC) to process very large volumes of data. </li>
          <li> Image processing algorithms. </li>
          <li> Characterization of microscopic structures. </li>
        </ul>
      </div>

    </Element>

    <Element
      company="Atos Worldgrid"
      location="Grenoble"
      logo="logo-atos.jpeg"
      :lang="['C++','Javascript','Java','Python']"
      :content="
      [
      {
      title: 'Internship',
      endDate: new Date('2015-08-01'),
      startDate: new Date('2015-02-01')
      }
      ]"
      >

      <div class="description">
        <p>
          Created a visual programming tools, similar to scratch, but 
          Atos Worldgrid is a company specialized in software for the energy sector. I worked on a project to develop a web application to monitor the energy consumption of a building. The project was developed in Java and Javascript.
        </p>
    </div>
    </Element>

    <div class="columns">
    <Element
      company="BugBusters"
      location="Grenoble"
      logo="logo-education-nationale.jpeg"
      :content="
      [
      {
      title: 'BugBusters',
      endDate: new Date('2014-07-01'),
      startDate: new Date('2012-06-01')
      }
      ]"
      >
    </Element>

    <Element
      company="ESF"
      location="Méribel"
      logo="logo-esf-red.svg"
      :lang="['Skii','Snowboard']"
      :content="[
      {
      title: 'Ski Instructor',
      endDate: new Date('2013-10-01'),
      startDate: new Date('2010-10-01')
      }
      ]"
      >
    </Element>

    </div>

  </section>
</template>


<style scoped>
section {
  grid-area: opensource;
}

.columns {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.columns > * {
  width: 45%;
  margin-bottom: 1rem;
}

strong {
  font-weight: bold;
  padding-top: 1rem;
  display:block;
}

.highlight_list {
  column-count: 2;
  column-gap: 2rem;
  li {
    margin-bottom: 0.5rem;
    break-inside: avoid;
    line-height: 1.0rem;
  }
}

</style>
