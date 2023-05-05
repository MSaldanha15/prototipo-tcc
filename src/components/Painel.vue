<template>
  <div class="painel">
    <div>
      <div class="painel__image">
        <img
          class="painel__img"
          src="../assets/image/icons/perfil.svg"
        >
      </div>
      <div class="painel__content">
        <h3 class="painel__text">
          Nome completo
        </h3>
        <h3 class="painel__text">
          Matricula
        </h3>
      </div>
    </div>
    <RouterLink to="/">
      <button class="painel__config-buttom">
        Logout
      </button>
    </RouterLink>
  </div>
</template>
<script>
export default {
  name: "Painel",
};
</script>
<style lang="scss">
.painel {
  position: static;
  width: 286px;
  height: 751px;
  left: 0px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background: #ff7070;

  &__image {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__img {
    margin-top: 21px;
  }
  &__content {
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__text {
    margin-bottom: 35px;
  }
  &__config-buttom {
    width: 100%;
    padding: 10px 18px;
    background-color: indianred;
    border: none;
    cursor: pointer;
  }
}
</style>
