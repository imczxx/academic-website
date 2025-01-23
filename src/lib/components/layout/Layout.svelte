<script>
  import Header from './Header.svelte';
  import Footer from './Footer.svelte';
  import Sidebar from './Sidebar.svelte';
  import { theme } from '@theme';
  
  $: darkMode = $theme.darkMode;
</script>

<div class="layout" class:dark={darkMode}>
  <Sidebar />
  <div class="flex-1 flex flex-col min-h-screen">
    <Header />
    <main class="flex-1">
      <slot />
    </main>
    <Footer />
  </div>
</div> 