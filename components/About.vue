<template>
  <section>
    <Icon name="uil:map-marker" style="float:left; margin-right: 0.2rem;
    margin-bottom:1rem"/>
    <p>
      3 Résidence du Pont de Conflans,</p>
    <p>78570 Andrésy, France</p>

    <div style="margin-top: 1rem"/>

    <ul>
      <!--Personal Website-->
      <li>
        <a href="https://arthursonzogni.com">
        <Icon name="fluent-mdl2:web-environment"/>
        arthursonzogni.com
        </a>
      </li>

      <!--Email-->
      <li>
        <a href="mailto:sonzogniarthur@gmail.com">
          <Icon name="uil:envelope" />
          sonzogniarthur@gmail.com
        </a>
      </li>

      <!--Phone-->
      <li>
        <a href="tel:+33613556656">
          <Icon name="uil:phone" />
          +33613556656
        </a>
      </li>

      <!--GitHub-->
      <li>
        <a href="https://github.com/ArthurSonzogni">
          <Icon name="uil:github"/>
          GitHub
        </a>
      </li>

      <!--Twitter-->
      <li>
        <a href="https://twitter.com/ArthurSonzogni">
          <Icon name="uil:twitter" />
          Twitter
        </a>
      </li>

      <!--LinkedIn-->
      <li>
        <a href="https://www.linkedin.com/in/arthursonzogni/">
        <Icon name="uil:linkedin" />
        LinkedIn
        </a>
      </li>

    </ul>
  </section>
</template>

<style scoped>

section {
  grid-area: about;
  align-self: end;
}

ul {
  column-count: 2;
  column-rule: 1px solid rgba(0, 0, 0, 0.3);
  column-width: min-content;
  list-style-type: none;
}


</style>
