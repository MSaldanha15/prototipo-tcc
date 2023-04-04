<template>
  <div
    v-if="chat.isAi"
    ref="currentMessage"
    class="chat"
  >
    <div
      
      class="profile"
    >
      <img
        src="../assets/image/icons/bot.svg"
        alt="Bot"
      >
    </div>
    <div class="message">
      {{ chat.value }}
    </div>
  </div>
  <div
    v-else
    ref="currentMessage"
    class="chat__user"
  >
    <div class="profile">
      <img
        src="../assets/image/icons/user.svg"
        alt="Usuario"
      >
    </div>
    <div class="message">
      {{ chat.value }}
    </div>
  </div>
</template>

<script setup>
import { nextTick, onMounted, ref, watch } from "vue";
defineProps({
  chat: {
    type: Object || null,
  },
});
const currentMessage = ref(null);
onMounted(async () => {
  await nextTick();
  const div = currentMessage.value;
  div.scrollIntoView({ behavior: "smooth" });
});
</script>

<style lang="scss" scoped></style>
