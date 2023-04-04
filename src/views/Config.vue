<template>
  <div>
    <div>
      <div>
        <h2>123</h2>
        <h3>Turma</h3>
      </div>
      <div>
        <p>Biologia</p>
        <button
          class="button"
          @click="disciplineBio"
        />
      </div>
      <div>
        <p>Fisica</p>
        <button
          class="button"
          @click="disciplineFis"
        />
      </div>
      <div>
        <p>TI</p>
        <button
          class="button"
          @click="disciplineTI"
        />
      </div>
    </div>
    <div />
    <div />
  </div>
</template>
<script>
export default {
  name: "ConfigView",
  data: function() {
return {
    discipline: [],
    class: [],
  };
},
  computed: {
    // configuration() {},
  },
  method: {
    disciplineBio() {},
    disciplineFis() {},
    disciplineTI() {},
  },
};
</script>
<style>
.button {
  background-color: red;
}
.button :active {
  background-color: green;
}
</style>
