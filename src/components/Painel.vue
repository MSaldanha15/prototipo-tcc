<template>
  <div class="painel">
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
        Curso
      </h3>
      <h3 class="painel__text">
        Matricula
      </h3>
    </div>
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

  background: #ff7070;

  &__image {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__img{
    margin-top: 21px;
  }
  &__content {
    margin-top: 35px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  &__text{
    margin-bottom:35px;
  }
}
</style>
