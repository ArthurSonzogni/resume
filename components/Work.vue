<template>
  <section>
    <h2>Work Experience </h2>

    <Element
      company="Google"
      location="Paris"
      logo="logo-google.jpeg"
      :lang="['C++','Magic', 'Java', 'Javascript', 'Python']"
      :content="
      [
        {
          title: 'Senior Software Engineer',
          endDate: new Date(),
          startDate: new Date('2020-07-01')
        },
        {
          title: 'Software Engineer - L4',
          endDate: new Date('2020-07-02'),
          startDate: new Date('2018-07-01')
        },
        {
          title: 'Software Engineer - L3',
          endDate: new Date('2018-07-02'),
          startDate: new Date('2016-07-01')
        }
      ]"
      >

      <div class="description">
        <p>Contributing to multiple areas of the <Icon name="uil:chrome" /> Chrome browser with a focus on security, web platform security, the multi-process architecture and navigations.</p>

        <strong>Top contributor:</strong>
        <ul>
          <li>
            <a href="https://chrome-commit-tracker.arthursonzogni.com/repositories?repositories=angle,chromeos,chromium,dawn,devtool-frontend,gn,pdfium,perfetto,swiftshader,v8,webrtc&what=per_contributor&grouping=yearly&display=someone_rank&kind=both&percentile=0.7071&individual=300&developers=arthursonzogni&min_contributions=0">
              47 most active contributor
            </a>
            (Top 1.55%) . Out of ~1900 Googlers + 500 external contributors.
          </li>
        </ul>


        <strong>Highlights:</strong>
        <ul>
          <li>Created the <a href="https://chromium.googlesource.com/chromium/src.git/+/main/docs/dangling_ptr.md">DanglingPointerDetector</a></li>
          <li>Initiated <a href="https://developer.chrome.com/blog/back-forward-cache">BackForwardCache</a></li>
        </ul>

        <strong>Other projects:</strong>
        <ul style="column-count: 4">
          <li><a href="https://docs.google.com/document/d/1jK50LDDHodStsXlTb6k_cFlIBochkaNWcSOI5M-sVLo/edit">BrowserSideNavigation</a></li>
          <li><a href="https://docs.google.com/document/d/1C2VKkFRSc0kdmqjKan1G4NlNlxWZqE4Wam41FNMgnmA/edit">RenderDocument</a></li>
          <li><a href="https://bugs.chromium.org/p/chromium/issues/detail?id=705744">NavigationMojoResponse</a></li>
          <li><a href="https://docs.google.com/document/d/1PechV73KKMF8leh7uTlyGkR32kD5qILvu3ZeG8TYGfk/edit">OutOfBlinkSandbox</a></li>
          <li>Web features:
            <a href="https://developer.mozilla.org/en-US/docs/Web/Security/IFrame_credentialless">Iframe credentialless</a>,
            CSP, COOP, COEP, Sandbox, Upgrade-Insecure-Request, etc...</li>
        </ul>


        <strong>Blog posts:</strong>
        <ul>
          <li><a href="https://developer.chrome.com/blog/iframe-credentialless">Iframe credentialless</a></li>
          <li><a
            href="https://developer.chrome.com/blog/anonymous-iframe-origin-trial">Anonymous
            iframe Origin Trial</a></li>
          <li><a
            href="https://developer.chrome.com/blog/back-forward-cache">Exploring
            a Back/Forward cache for Chrome</a></li>
          <li><a href="https://web.dev/articles/http-cache-security">Improve
              security and privacy by updating HTTP Cache</a></li>
        </ul>


      </div>

    </Element>

    <Element
      company="Novitom"
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
          Atos Worldgrid is a company specialized in software for the energy sector. I worked on a project to develop a web application to monitor the energy consumption of a building. The project was developed in Java and Javascript.
        </p>
      </div>
    </Element>

    <div class="columns">
    <Element
      company="BugBusters"
      location="Grenoble"
      logo="logo-education-nationale.jpeg"
      :lang="['C++','Javascript','Java','Python']"
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
  grid-area: work;
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

</style>
