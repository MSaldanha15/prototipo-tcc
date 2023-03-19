<template>
  <main>
    <div id="chat_container"></div>
    <form @submit.prevent="fetchAnswer">
      <textarea
        rows="1"
        cols="1"
        placeholder="Faça sua pergunta aqui..."
        v-model="question"
      ></textarea>
      <button type="submit">
        <img src="../assets/send.svg" alt="enviar" />
      </button>
    </form>
  </main>
</template>
<script setup>
import { ref } from "vue";

const question = ref("");

const fetchAnswer = () => {
  console.log(question.value);
};
</script>
