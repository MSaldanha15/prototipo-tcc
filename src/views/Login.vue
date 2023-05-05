<template>
  <div class="login">
    <img
      class="login__logo"
      src="../assets/image/logos/unicarioca/logo_login.png"
      alt="Logo"
    />
    <div class="login__auth">
      <form id="login-form">
        <div class="login__image">
          <img
            src="../assets/image/icons/perfil.svg"
            alt="Avatar"
            class="login__avatar"
          />
        </div>
        <div class="login__container">
          <label for="email"><b>Email</b></label>
          <input
            class="login__input"
            type="text"
            placeholder="Coloque seu email aqui"
            id="email"
            v-model="email"
          />
          <label for="password"><b>Senha</b></label>
          <input
            class="login__input"
            type="password"
            placeholder="Coloque sua senha aqui"
            id="password"
            v-model="password"
          />
          <button
            class="login__login-button"
            type="submit"
            v-on:click.prevent="login()"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      output: "",
    };
  },
  methods: {
    async login() {
      const form = document.getElementById("login-form");

        const email = form.email.value;
        const password = form.password.value;

        const response = await fetch("http://localhost:8000/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
        console.log(JSON.stringify(data))

        if (data.success) {
          // Login válido, redirecionar para a página inicial do usuário
          window.location.href = "/home";
        } else {
          // Login inválido, exibir mensagem de erro
          alert("E-mail ou senha incorretos.");
        }
    },
  },
};
</script>
<style lang="scss">
.login {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: auto;

  &__logo {
    position: relative;
    width: 50%;
    height: 750px;
    background: #f9cece;
  }
  &__auth {
    margin: 0 auto;
    margin-bottom: 70px;
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 3px solid #f1f1f1;
  }
  &__avatar {
    width: 40%;
    border-radius: 50%;
  }
  &__container {
    padding: 16px;
    &__footer {
      background-color: #f1f1f1;
    }
  }
  &__input {
    width: 100%;
    padding: 12px 20px;
    border-radius: 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  &__login-button {
    background-color: #04aa6d;
    border-radius: 20px;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  }
  &__login-button:hover {
    opacity: 0.8;
  }
  &__home-button {
    width: auto;
    padding: 10px 18px;
    background-color: #f44336;
    border: none;
    cursor: pointer;
  }
  &__text {
    text-decoration: none;
    color: white;
  }
  &__image {
    text-align: center;
    margin: 24px 0 12px 0;
  }
}
</style>
