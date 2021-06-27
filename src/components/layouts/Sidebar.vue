<template>
  <router-link :to="menu.route" v-for="(menu, index) in menus" :key="index">
    <div
      class="cursor-pointer text-white rounded-lg mb-2 py-2 px-3 md:mr-0 mr-2 md:block inline-block"
      :class="[
        { 'font-semibold bg-gray-700 hover:bg-gray-800': $route.path === menu.route }, 
        { 'bg-green-500 hover:bg-green-600': $route.path !== menu.route }
      ]"
    >
      {{ menu.name }}
    </div>
  </router-link>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      menus: [
        { name: 'Options API', route: '/options-api' },
        { name: 'Composition API', route: '/composition-api' },
        { name: 'LifeCycle Hooks', route: '/lifecycle-hooks' },
      ],
    }
  },
}
</script>