<template>
  <div class="my-4">
    <h3 class="font-semibold">Ref and Reactive with Hooks</h3>
    <hr class="mb-2" />
    <div>
      <div class="bg-gray-800 rounded-lg text-white py-2 px-3 mr-2 inline-block w-36">
        Counter Ref: {{ counterRef }}
      </div>
      <button
        class="rounded-lg text-white py-2 mr-2 px-3 bg-green-400 hover:bg-green-500 focus:outline-none"
        @click="onIncreaseRef"
      >
        + Increase
      </button>
      <button
        class="rounded-lg text-white py-2 px-3 md:mt-0 mt-2 bg-red-400 hover:bg-red-500 focus:outline-none"
        @click="onDecreaseRef"
      >
        - Decrease
      </button>
    </div>
    <div>
      <div
        class="bg-gray-800 rounded-lg text-white py-2 px-3 mr-2 inline-block w-36 mt-2"
      >
        Counter Rt: {{ counterRt.counter }}
      </div>
      <button
        class="rounded-lg text-white py-2 px-3 mr-2  bg-green-400 hover:bg-green-500 focus:outline-none"
        @click="onIncreaseRt"
      >
        + Increase
      </button>
      <button
        class="rounded-lg text-white py-2 md:mt-0 mt-2 px-3 bg-red-400 hover:bg-red-500 focus:outline-none"
        @click="onDecreaseRt"
      >
        - Decrease
      </button>
    </div>
    <h1 class="mt-3">components/RefAndReactiveHook.vue</h1>
    <div v-highlight>
      <pre class="language-javascript">
        <code>
  import useCounter from '@/hooks/useCounter'
  export default {
    setup() {
      const { 
        counterRef, 
        onIncreaseRef, 
        onDecreaseRef
      } = useCounter.useCounterRef(0)
      const { 
        counterRt, 
        onIncreaseRt, 
        onDecreaseRt 
      } = useCounter.useCounterRt(0)
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
    <h1 class="mt-3">hooks/useCounter.js</h1>
    <div v-highlight>
      <pre class="language-javascript">
        <code>
  import { ref, reactive } from 'vue'

  function useCounterRef(initail) {
    // ref compositiom api
    const counterRef = ref(initail) // Number, String, Boolean
    const onIncreaseRef = () => counterRef.value++
    const onDecreaseRef = () => counterRef.value--
    return {
      counterRef,
      onIncreaseRef,
      onDecreaseRef,
    }
  }

  function useCounterRt(initail) {
    // reactive compositiom api
    const counterRt = reactive({ counter: initail })
    const onIncreaseRt = () => counterRt.counter++
    const onDecreaseRt = () => counterRt.counter--
    return {
      counterRt,
      onIncreaseRt,
      onDecreaseRt,
    }
  }

  export default {
    useCounterRef,
    useCounterRt,
  }
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
import useCounter from '@/hooks/useCounter'
export default {
  setup() {
    const { 
      counterRef, 
      onIncreaseRef, 
      onDecreaseRef
    } = useCounter.useCounterRef(0)
    const { 
      counterRt, 
      onIncreaseRt, 
      onDecreaseRt 
    } = useCounter.useCounterRt(0)
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
