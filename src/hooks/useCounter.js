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

