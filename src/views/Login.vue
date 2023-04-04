<template>
  <div class="Type">
    <button>Aluno</button>
    <button>Professor</button>
  </div>
  <div>
    <input
      v-model="email"
      type="email"
      placeholder="Email"
    >
    <input
      v-model="senha"
      type="password"
      placeholder="Senha"
    >
  </div>
  <button
    class="button"
    @click="identifyProfessor"
  >
    Acessar
  </button>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      isProfessor: false,
      email: "",
      senha: "",
    };
  },
  computed: {
    // validation() {
    //   if (this.email === "dalbuquerque@unicarioca.edu.br" || "aluno@unicarioca.edu.br"){
        
    //   }
    },
    identifyProfessor() {
      return this.email === "dalbuquerque@unicarioca.edu.br"
        ? (this.isProfessor = true)
        : (this.isProfessor = false);
    },
  }
</script>
<style>
.Type {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.button {
  background: #e53935;
  border: 1px solid #e02c2c;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-block;
  font-family: nunito, sans-serif;
  font-size: 16px;
  font-weight: 800;
  line-height: 16px;
  min-height: 40px;
  outline: 0;
  padding: 12px 14px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
}

.button:active {
  background-color: initial;
  background-position: 0 0;
  color: #ff4742;
}

.button:active {
  opacity: 0.5;
}
</style>
