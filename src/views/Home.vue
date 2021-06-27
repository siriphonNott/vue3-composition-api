<template>
  <h3 class="text-xl font-semibold">Options API, Composition API and Lifecycle Hooks</h3>
  <hr class="my-2" />
  <OptionAPIs />
  <RefAndReactive />
  <RefAndReactiveHook />
  <LifeCycleHook />
</template>

<script>
import OptionAPIs from '@/components/OptionAPIs.vue'
import RefAndReactiveHook from '@/components/RefAndReactiveHook'
import RefAndReactive from '@/components/RefAndReactive'
import LifeCycleHook from '@/components/LifeCycleHook'
export default {
  name: 'Home',
  components: {
    OptionAPIs,
    RefAndReactive,
    RefAndReactiveHook,
    LifeCycleHook,
  },
}
</script>

