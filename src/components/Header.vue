<template>
  <div class="header">
    <img
      src="../assets/image/logos/unicarioca/logo.svg"
      alt="Unicarioca Logo"
    >
    <img
      src="../assets/image/logos/educai/educai.svg"
      alt="Educai Logo"
    >
  </div>
</template>
<script>
import isProfessor from "../views/Login.vue";

export default {
  name: "Header",
  data: function () {
    return {
      isProfessor,
    };
  },
};
</script>
<style lang="scss">
.header {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100px;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
}
</style>
