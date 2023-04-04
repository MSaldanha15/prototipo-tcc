<template>
  <div class="footer">
    <img
      class="logo"
      src="../assets/image/logos/unicarioca/logo_main_unicarioca.svg"
    >
    <div class="footer__alguma">
      <div class="footer__autores">
        <div class="footer__content">
          <img
            class="footer__image"
            src="../assets/image/socialmedia/email.svg"
            alt="Icone de Email"
          >
          <p>matheussaldanhacoelho@gmail.com</p>
        </div>
        <div class="footer__content">
          <img
            class="footer__image"
            src="../assets/image/socialmedia/email.svg"
            alt="Icone de Email"
          >
          <p>carlos.bionde@outlook.com</p>
        </div>
        <div class="footer__content">
          <img
            class="footer__image"
            src="../assets/image/socialmedia/email.svg"
            alt="Icone de Email"
          >
          <p>dalbuquerque@unicarioca.edu.br</p>
        </div>
      </div>
      <div class="footer__autores">
        <div class="footer__content">
          <img
            class="footer__image"
            src="../assets/image/socialmedia/github_icon.png"
            alt="Icone de Email"
          >
          <p>github.com/chbionde</p>
        </div>
        <div class="footer__content">
          <img
            class="footer__image"
            src="../assets/image/socialmedia/linkedin_icon.png"
            alt="Icone de Email"
          >
          <p>linkedin.com/in/carlosbionde/</p>
        </div>
      </div>
      <div class="footer__autores">
        <div class="footer__content">
          <img
            class="footer__image"
            src="../assets/image/socialmedia/github_icon.png"
            alt="Icone de Email"
          >
          <p>github.com/MSaldanha15</p>
        </div>
        <div class="footer__content">
          <img
            class="footer__image"
            src="../assets/image/socialmedia/linkedin_icon.png"
            alt="Icone de Email"
          >
          <p>linkedin.com/in/matheussaldanhacoelho/</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Footer",
};
</script>
<style lang="scss">
.footer {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 180px;
  top: 10px;
  background: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  &__alguma {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  &__autores {
    display: flex;
    flex-direction: column;
    margin-right:74px;
  }
  &__content {
    display: flex;
    flex-direction: row;
    margin-top: 13px;
    flex-wrap: wrap;
    align-items: center;
  }
  &__image {
    width: 35px;
    height: 35px;
    margin-right: 7px;
  }
}

.logo {
  margin-bottom: 10px;
  margin-left: 10px;
}
</style>
