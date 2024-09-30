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
          startDate: new Date('2016-07-01')
        },
      ]"
      >

      <div class="description">
        <p>Contributing to multiple areas of the <Icon name="uil:chrome" /> Chrome browser with a focus on security, web platform security, the multi-process architecture and navigations.</p>

        <strong>Highlights:</strong>
        <ul class="highlight_list">
          <li>
            <a href="https://chrome-commit-tracker.arthursonzogni.com/repositories?repositories=angle,chromeos,chromium,dawn,devtool-frontend,gn,pdfium,perfetto,swiftshader,v8,webrtc&what=per_contributor&grouping=yearly&display=someone_rank&kind=both&percentile=0.7071&individual=300&developers=arthursonzogni&min_contributions=0">
              47 most active contributor
            </a> (Top 1.55%).
            <br/>
            Out of ~1900 Googlers + 500 external contributors.
          </li>

          <li>Created the <a
          href="https://chromium.googlesource.com/chromium/src.git/+/main/docs/dangling_ptr.md">DanglingPointerDetector</a>. <br/>I lead the team.
          </li>
          <li>Initiated, prototyped, built and shipped <a
              href="https://developer.chrome.com/blog/back-forward-cache">BackForwardCache</a>
            feature.
          </li>
          <li>Critical refactoring: 
          <a
            href="https://docs.google.com/document/d/1jK50LDDHodStsXlTb6k_cFlIBochkaNWcSOI5M-sVLo/edit">BrowserSideNavigation</a>,
          <a
            href="https://docs.google.com/document/d/1C2VKkFRSc0kdmqjKan1G4NlNlxWZqE4Wam41FNMgnmA/edit">RenderDocument</a>,
          <a
            href="https://bugs.chromium.org/p/chromium/issues/detail?id=705744">NavigationMojoResponse</a>,
          <a
            href="https://docs.google.com/document/d/1PechV73KKMF8leh7uTlyGkR32kD5qILvu3ZeG8TYGfk/edit">OutOfBlinkSandbox</a>, etc...
          </li>

          <li>Web platform launch review, security review</li>
          <li>Create and specified <a
            href="https://developer.chrome.com/blog/coep-credentialless-origin-trial">Cross-origin-embedder-policy:
            credentialless</a> and <a
                                     href="https://developer.chrome.com/blog/iframe-credentialless">Iframe credentialless</a>
          </li>
          <li>Built/Extended or maintained: ContentSecurityPolicy, Sandbox,
            COOP, COEP, Upgrade-Insecure-Request, etc...
          </li>
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
          Worked in a Synchrotron, a particle accelerator that produces X-rays.
          I developed:
        </p>
        <ul>
          <li> <em>3D visualizer</em> for very large meshes and <em>volumic
              raytracing</em> </li>
          <li> Fast physical simulators: X-ray wave with interference, etc... </li>
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
          Created a visual programming tools, similar to scratch, but in 3D
          using Web technologies.
          <br/>
          Used by the energy sector.
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
          title: 'Repair Student\'s linux computer',
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
