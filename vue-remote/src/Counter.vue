<template>
  <div>
    <p>Counter: {{ counter }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  name: "Counter",
  data() {
    return {
      counter: 0, // Аналог useState(0)
    };
  },
  methods: {
    increment() {
      this.counter += 1;
    },
  },
};
</script>

<style>
button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
</style>
