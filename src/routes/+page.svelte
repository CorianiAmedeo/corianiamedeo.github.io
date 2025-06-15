<script>
  import Navbar from "$lib/Navbar.svelte";
</script>

<Navbar home={"true"} />

<section class="hero">
  <h1 class="text-8xl font-medium text-dark-primary">A product designer that speaks dev.</h1>
</section>
<section class="section background-dark">
</section>

<style>
  .hero {
    display: flex;
    height: 85vh;
  }

  .hero > h1 {
    align-self: flex-end;
    margin: var(--space-12);
    max-width: var(--section-xl);
  }

  .section {
    padding-top: var(--section-spacing);
    padding-bottom: var(--section-spacing);
  }
</style>
