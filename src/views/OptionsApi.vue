<template>
  <div class="flex items-end">
    <h3 class="text-xl font-semibold">Options API</h3>
    <a href="https://v3.vuejs.org/api/options-api.html" target="_blank" rel="noopener noreferrer" class="ml-2 text-sm text-blue-400 underline">Link</a>
  </div>
  <hr class="my-2" />
  <OptionAPIs />
</template>

<script>
import OptionAPIs from '@/components/OptionAPIs'
export default {
  name: 'OptionsAPI',
  components: {
    OptionAPIs,
  },
}
</script>

