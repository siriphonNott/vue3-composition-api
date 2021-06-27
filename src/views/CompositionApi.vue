<template>
  <div class="flex items-end">
    <h3 class="text-xl font-semibold">Composition API</h3>
    <a href="https://v3.vuejs.org/api/composition-api.html" target="_blank" rel="noopener noreferrer" class="ml-2 text-sm text-blue-400 underline mb-1">Link</a>
  </div>
  <hr class="my-2" />
  <RefAndReactive />
  <RefAndReactiveHook />
</template>

<script>
import RefAndReactiveHook from '@/components/RefAndReactiveHook'
import RefAndReactive from '@/components/RefAndReactive'
export default {
  name: 'CompositionAPI',
  components: {
    RefAndReactive,
    RefAndReactiveHook,
  },
}
</script>
