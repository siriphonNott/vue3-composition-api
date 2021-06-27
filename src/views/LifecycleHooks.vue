<template>
  <div class="flex items-end">
    <h3 class="text-xl font-semibold">Lifecycle Hooks</h3>
    <a href="https://v3.vuejs.org/api/composition-api.html#lifecycle-hooks" target="_blank" rel="noopener noreferrer" class="ml-2 text-sm text-blue-400 underline mb-1">Link</a>
  </div>
  <hr class="my-2" />
  <LifeCycleHook />
</template>

<script>
import LifeCycleHook from '@/components/LifeCycleHook'
export default {
  name: 'LifecycleHooks',
  components: {
    LifeCycleHook,
  },
}
</script>

