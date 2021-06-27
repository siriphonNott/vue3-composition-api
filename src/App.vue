<template>
  <Navbar />
  <div class="container mx-auto mt-5 mb-20 md:flex">
    <div class="p-4 rounded-lg shadow-xl mr-2 w-full md:w-72">
      <Sidebar />
    </div>
    <div class="p-4 rounded-lg shadow-xl w-full">
      <router-view />
    </div>
  </div>
  <Footer />
</template>

<script>
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
import Sidebar from './components/layouts/Sidebar'
export default {
  name: 'App',
  components: {
    Navbar,
    Footer,
    Sidebar,
  }
}
</script>
