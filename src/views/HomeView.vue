<template>
  <main>
    <painel />
    <div class="conversa">
      <div id="chat_container">
        <div
          v-for="(chat, i) in wrapper"
          :key="i"
          class="wrapper"
          :class="{ ai: chat.isAi }"
        >
          <Chat
            :key="i"
            :chat="chat"
          />
        </div>
      </div>
      <form @submit.prevent="fetchAnswer">
        <textarea
          v-model="question"
          rows="1"
          cols="1"
          placeholder="Faça sua pergunta aqui..."
        />
        <button type="submit">
          <img
            src="../assets/image/icons/send.svg"
            alt="enviar"
          >
        </button>
      </form>
      <div id="bar_buttom" />
    </div>
  </main>
</template>
<script setup>
import { ref } from "vue";
import Chat from "../components/Chat.vue";
import painel from "../components/Painel.vue";

const question = ref("");
const wrapper = ref([]);
const loading = ref(false);

const fetchAnswer = async () => {
  try {
    loading.value = true;
    wrapper.value.push({
      isAi: false,
      value: question.value,
    });
    wrapper.value.push({
      isAi: true,
      value: "Carregando...",
    });
    const res = await fetch("http://localhost:8000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        question: question.value,
      }),
    });
    const data = await res.json();
    const parsedData = data.bot.trim();
    wrapper.value.pop();
    wrapper.value.push({
      isAi: true,
      value: parsedData,
    });
  } catch (error) {
  } finally {
    loading.value = false;
    question.value = "";
  }
};
</script>
<style lang="scss">
.conversa {
  width: 100%;
  margin-bottom: 96px;
}
</style>
