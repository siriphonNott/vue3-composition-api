<template>
  <div class="my-4">
    <h4 class="font-semibold mb-3">Mapping between Options API Lifecycle Options and Composition API</h4>
    <ul class="list-disc pl-10">
      <li><code class="line-through">beforeCreate</code> -> use <code>setup()</code></li>
      <li><code class="line-through">created</code> -> use <code>setup()</code></li>
      <li><code>beforeMount</code> -> <code>onBeforeMount</code></li>
      <li><code>mounted</code> -> <code>onMounted</code></li>
      <li><code>beforeUpdate</code> -> <code>onBeforeUpdate</code></li>
      <li><code>updated</code> -> <code>onUpdated</code></li>
      <li><code>beforeUnmount</code> -> <code>onBeforeUnmount</code></li>
      <li><code>unmounted</code> -> <code>onUnmounted</code></li>
      <li><code>errorCaptured</code> -> <code>onErrorCaptured</code></li>
      <li><code>renderTracked</code> -> <code>onRenderTracked</code></li>
      <li><code>renderTriggered</code> -> <code>onRenderTriggered</code></li>
      <li><code>activated</code> -> <code>onActivated</code></li>
      <li><code>deactivated</code> -> <code>onDeactivated</code></li>
    </ul>
    <h1 class="mt-3">components/LifeCycleHook.vue</h1>
    <div v-highlight>
      <pre class="language-javascript">
        <code>
        import { onMounted, onUpdated, onUnmounted } from 'vue'

        const MyComponent = {
          setup() {
            onMounted(() => {
              console.log('mounted!')
            })
            onUpdated(() => {
              console.log('updated!')
            })
            onUnmounted(() => {
              console.log('unmounted!')
            })
          }
        }
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
import { onMounted, onUpdated, onUnmounted } from 'vue'
export default {
  setup() {
    onMounted(() => {
      console.log('mounted1')
    })
    onMounted(() => {
      console.log('mounted2!')
    })
    onUpdated(() => {
      console.log('updated!')
    })
    onUnmounted(() => {
      console.log('unmounted!')
    })
  },
  mounted() {
    console.log('mounted')
  },
}
</script>

<style scoped>
ul li {
  margin-bottom: 3px;
}
</style>
