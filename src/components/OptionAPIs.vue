<template>
  <div class="my-4">
    <div class="bg-gray-800 rounded-lg text-white py-2 px-3 inline-block w-36">
      Counter: {{ counter }}
    </div>
    <button
      class="rounded-lg text-white py-2 px-4 ml-2 bg-green-400 hover:bg-green-500 focus:outline-none"
      @click="onIncrease"
    >
      + Increase
    </button>
    <button
      class="rounded-lg text-white py-2 px-4 ml-2 bg-red-400 hover:bg-red-500 focus:outline-none"
      @click="onDecrease"
    >
      - Decrease
    </button>
  
    <h1 class="mt-3">components/OptionAPIs.vue</h1>
    <div v-highlight>
      <pre class="language-javascript">
        <code>
  export default {
    data() {
      return {
        counter: 0,
      }
    },
    methods: {
      onIncrease() {
        this.counter++
      },
      onDecrease() {
        this.counter--
      },
    },
  }
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0,
    }
  },
  methods: {
    onIncrease() {
      this.counter++
    },
    onDecrease() {
      this.counter--
    },
  },
}
</script>

<style></style>
