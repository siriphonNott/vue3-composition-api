<template>
  <div class="my-4">
    <h3 class="font-semibold">Ref and Reactive</h3>
    <hr class="mb-2" />
    <div>
      <div class="bg-gray-800 rounded-lg text-white py-2 px-3 inline-block w-36">
        Counter Ref: {{ counterRef }}
      </div>
      <button
        class="rounded-lg text-white py-2 px-4 ml-2 bg-green-400 hover:bg-green-500 focus:outline-none"
        @click="onIncreaseRef"
      >
        + Increase
      </button>
      <button
        class="rounded-lg text-white py-2 px-4 ml-2 bg-red-400 hover:bg-red-500 focus:outline-none"
        @click="onDecreaseRef"
      >
        - Decrease
      </button>
    </div>
    <div>
      <div
        class="bg-gray-800 rounded-lg text-white py-2 px-3 inline-block w-36 mt-2"
      >
        Counter Rt: {{ counterRt.counter }}
      </div>
      <button
        class="rounded-lg text-white py-2 px-4 ml-2 bg-green-400 hover:bg-green-500 focus:outline-none"
        @click="onIncreaseRt"
      >
        + Increase
      </button>
      <button
        class="rounded-lg text-white py-2 px-4 ml-2 bg-red-400 hover:bg-red-500 focus:outline-none"
        @click="onDecreaseRt"
      >
        - Decrease
      </button>
    </div>
    <h1 class="mt-3">components/RefAndReactive.vue</h1>
    <div v-highlight>
      <pre class="language-javascript">
        <code>
  export default {
    setup() {
      // ref compositiom api
      const counterRef = ref(0) // Number, String, Boolean
      const onIncreaseRef = () => counterRef.value++
      const onDecreaseRef = () => counterRef.value--

      // reactive compositiom api
      const counterRt = reactive({ counter: 0 })  // Object, Array
      const onIncreaseRt = () => counterRt.counter++
      const onDecreaseRt = () => counterRt.counter--

      return {
        counterRef,
        onIncreaseRef,
        onDecreaseRef,
        counterRt,
        onIncreaseRt,
        onDecreaseRt,
      }
    },
  }
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
import { ref, reactive } from 'vue'
export default {
  setup() {
    // ref compositiom api
    const counterRef = ref(0) // Number, String, Boolean
    const onIncreaseRef = () => counterRef.value++
    const onDecreaseRef = () => counterRef.value--

    // reactive compositiom api
    const counterRt = reactive({ counter: 0 }) // Object, Array
    const onIncreaseRt = () => counterRt.counter++
    const onDecreaseRt = () => counterRt.counter--

    return {
      counterRef,
      onIncreaseRef,
      onDecreaseRef,
      counterRt,
      onIncreaseRt,
      onDecreaseRt,
    }
  },
}
</script>

<style></style>
