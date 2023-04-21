<template>
  <div
    v-if="chat.isAi"
    class="chat"
  >
    <div class="chat__profile">
      <img
        class="chat__image"
        src="../assets/image/icons/bot.svg"
        alt="Bot"
      >
    </div>
    <div
      v-if="chat.isAi"
      ref="currentMessage"
      class="chat__content"
    >
      <div class="chat__message">
        {{ chat.value }}
      </div>
    </div>
  </div>
  <div
    v-if="!chat.isAi"
    class="chat"
  >
    <div
      ref="currentMessage"
      class="chat__content chat__content--user"
    >
      <div class="chat__message">
        {{ chat.value }}
      </div>
    </div>
    <div class="chat__profile chat__profile--user">
      <img
        class="chat__image"
        src="../assets/image/icons/user.svg"
        alt="Usuario"
      >
    </div>
  </div>
</template>

<script>
import { nextTick, onMounted, ref } from "vue";

export default {
  props: {
    chat: {
      type: Object || null,
      default: null,
    },
  },
  setup() {
    const currentMessage = ref(null);
    
    onMounted(async () => {
      await nextTick();
      const div = currentMessage.value;
      div.scrollIntoView({ behavior: "smooth" });
    });
    
    return {
      currentMessage,
    }
  }
}
</script>

<style lang="scss">
.chat {
  display: flex;
  flex-direction: row;
  align-items: center;

  &__content {
    max-width: 914px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 10px;
    background: #d3d2ff;
    border: 1px solid #b7baff;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 40px;
    &--user {
      margin-left: auto;
      margin-right: 0;
      align-items: flex-end;
      background: #ffd2d2;
      border: 1px solid #ffb7b7;
    }
  }
  &__profile {
    width: 116px;
    height: 116px;
    border-radius: 5px;
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    &--user{
      justify-content: flex-start;
    }
  }
  &__image {
    width: 90%;
    height: 90%;
    object-fit: contain;
  }
  &__message {
    flex: 1;
    margin-top: 10px;
    margin-left: 20px;
    margin-bottom: 10px;
    margin-right: 20px;
    color: #000000;
    font-size: 20px;
    max-width: 100%;
    overflow-x: scroll;
    white-space: pre-wrap;
    -ms-overflow-style: none;
    scrollbar-width: none;
    text-align: justify;
  }
  &__message::-webkit-scrollbar {
    display: none;
  }
}
</style>
