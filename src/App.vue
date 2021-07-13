<template>
  <div id="app">
    <Header />
    <!-- chamando a page Home -->
    <router-view path="$router.key" />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/global.css';

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
