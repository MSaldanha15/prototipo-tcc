<template>
  <main class="home">
    <painel />
    <div class="home__chat">
      <div class="home__container">
        <div
          v-for="(chat, i) in wrapper"
          :key="i"
          class="home__wrapper"
          :class="{ home__ai: chat.isAi }"
        >
          <Chat
            :key="i"
            :chat="chat"
          />
        </div>
      </div>
      <form
        class="home__question"
        @submit.prevent="fetchAnswer"
      >
        <textarea
          v-model="question"
          class="home__textarea"
          rows="1"
          cols="1"
          placeholder="Faça sua pergunta aqui..."
          @keydown.enter.prevent="fetchAnswer"
        />
        <button
          class="home__button"
          type="submit"
        >
          <img
            class="home__button__image"
            src="../assets/image/icons/send.svg"
            alt="enviar"
          >
        </button>
      </form>
      <div id="bar_buttom" />
    </div>
  </main>
</template>
<script>
import { ref } from "vue";
import Chat from "../components/Chat.vue";
import painel from "../components/Painel.vue";

export default {
  components: {
    Chat,
    painel
  },
  data() {
    return {
      question: ref(""),
      wrapper: ref([]),
      loading: ref(false),
    };
  },
  methods: {
    async fetchAnswer() {
      try {
        this.loading = true;
        this.wrapper.push({
          isAi: false,
          value: this.question,
        });
        this.wrapper.push({
          isAi: true,
          value: "Carregando...",
        });
        const res = await fetch("http://localhost:8000", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question: this.question,
            filter: 'Computer',
          }),
        });
        const data = await res.json();
        const parsedData = data.bot.trim();
        this.wrapper.pop();
        this.wrapper.push({
          isAi: true,
          value: parsedData,
        });
      } finally {
        this.loading = false;
        this.question = "";
      }
    }
  }
};
</script>
<style lang="scss">
.home {
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
  flex-direction: row;
  background: radial-gradient(
        44.14% 96.28% at 94.14% 89.47%,
        rgba(53, 37, 231, 0.578125) 0%,
        #9ca0ff 0.01%,
        rgba(242, 244, 255, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
    radial-gradient(
        46.53% 91.47% at 3.47% 8.53%,
        #ecc2c2 0%,
        rgba(225, 222, 255, 0) 100%
      )
      /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;

  &__chat {
    width: 100%;
    margin-bottom: 96px;
  }

  &__container {
    flex: 1;
    width: 100%;
    height: 100%;
    overflow-y: scroll;

    display: flex;
    flex-direction: column;
    gap: 10px;

    -ms-overflow-style: none;
    scrollbar-width: none;

    padding-bottom: 20px;
    scroll-behavior: smooth;
  }

  /* hides scrollbar */
  &__container::-webkit-scrollbar {
    display: none;
  }

  &__wrapper {
    width: 100%;
    padding: 15px;
  }

  &__ai {
    background: transparent;
  }

  &__question {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 10px;
    background: #f57373;
    color: #fff;
    display: flex;
    flex-direction: row;
    gap: 10px;
    border-radius: 20px;
    border: 2px solid #ffffff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  &__textarea {
    width: 100%;

    color: #fff;
    font-size: 18px;
    resize: none;
    padding: 10px;
    background: transparent;
    border-radius: 5px;
    border: none;
    outline: none;
  }
  &__textarea::placeholder {
    color: #fff;
  }
  &__button {
    outline: 0;
    border: 0;
    cursor: pointer;
    background: transparent;

    &__image {
      width: 30px;
      height: 30px;
    }
  }
}
</style>
