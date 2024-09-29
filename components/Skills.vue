<template>
  <section>
    <h3>Competitions</h3>
    <ul>
      <li>Ranked 3<sup>rd</sup>. French national computer science contest <a href="https://prologin.org/archives/2013/final/report">Prologin</a></li>
    </ul>

    <h3>Languages</h3>
    <ul>
      <li>C++</li>
      <li>C</li>
      <li>Cuda</li>
      <li>Java</li>
      <li>Python</li>
      <li>Ocaml</li>
      <li>Ada</li>
      <li>GLSL</li>
    </ul>

    <h3>Web</h3>
    <ul>
      <li>Javascript</li>
      <li>HTML</li>
      <li>CSS</li>
      <li>Vuejs</li>
      <li>D3.js</li>
    </ul>

    <h3>Software</h3>
    <ul>
      <li>Git</li>
      <li>CMake</li>
      <li>Scilab</li>
      <li>R</li>
      <li>LaTeX</li>
    </ul>

    <h3>Speciality</h3>
    <ul>
    <li>3D computer graphics</li>
    <li>Image analysis</li>
    <li>GPU programming</li>
    <li>Computer vision</li>
    <li>Parallel programming</li>
    <li>Numerical optimisation</li>
    <li>Statistical inference</li>
    </ul>

    <h3>Languages</h3>
    <ul>
      <li>
        <Icon name="emojione-v1:flag-for-france" />
        French - Native
      </li>
      <li> 
        <Icon name="twemoji:flag-united-states" />
        English - Fluent
      </li>
      <li>
        <Icon name="twemoji:flag-germany" />
        German - Basic
      </li>
    </ul>
  </section>
</template>

<style scoped>

section {
  grid-area: skills;
  background-color: var(--side-bg-color);
  color: var(--side-text-color);

  h1, h2, h3 {
    color: var(--side-text-color);
  }

  a {
    color: var(--side-text-color);
  }

  padding: 0;
  margin: 0;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3) inset;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 1rem;
  margin-left: 2em;
}

h3 {
  color:red;
  background-color: color-mix(
    in hsl, 
    var(--side-bg-color) 80%,
    var(--side-text-color) 20%
  );
  margin: 0;
  padding-left: 2em;
  padding-right: 2em;
  padding-top: 1em;
  padding-bottom: 1em;
  display:block;
  font-size: 1.2em;
}

h3:not(:first-child) {
  margin-top: 1.4rem;
}


</style>
