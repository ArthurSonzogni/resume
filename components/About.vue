<template>
  <section>
    <ul>
      <!--GitHub-->
      <li>
        <a href="https://github.com/ArthurSonzogni">
          <Icon name="uil:github"/>
          GitHub
        </a>
      </li>

      <!--Email-->
      <li>
        <a href="mailto:sonzogniarthur@gmail.com">
          <Icon name="uil:envelope" />
          sonzogniarthur@gmail.com
        </a>
      </li>



      <!--Twitter-->
      <li>
        <a href="https://twitter.com/ArthurSonzogni">
          <Icon name="uil:twitter" />
          Twitter
        </a>
      </li>

      <!--Personal Website-->
      <li>
        <a href="https://arthursonzogni.com">
        <Icon name="fluent-mdl2:web-environment"/>
        arthursonzogni.com
        </a>
      </li>

      <!--LinkedIn-->
      <li>
        <a href="https://www.linkedin.com/in/arthursonzogni/">
        <Icon name="uil:linkedin" />
        LinkedIn
        </a>
      </li>


      <!--Phone-->
      <li>
        <a href="tel:+33613556656">
          <Icon name="uil:phone" />
          +33613556656
        </a>
      </li>

    </ul>
    <Icon name="uil:map-marker" />
    Paris area, France
  </section>
</template>

<style scoped>

section {
  grid-area: about;
  align-self: end;
}

ul {
  display:grid;
  grid-template-columns: auto auto;
  grid-gap: 0 1em;
  list-style-type: none;
}

a {
  break-inside: avoid;
}

</style>
