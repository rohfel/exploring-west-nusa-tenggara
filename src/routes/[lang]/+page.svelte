<script lang="ts">
  import {
    Navbar,
    Hero,
    Features,
    Cultures,
    Geography,
    Biotechnology
  } from '$lib/components';
</script>

<svelte:head>
  <meta
    name="description"
    content="Simple, informative, educational, easy to grasp contents about West Nusa Tenggara."
  />

  <title>Exploring West Nusa Tenggara</title>
</svelte:head>

<div
  class="bg-[#EDEDED] dark:bg-[#121212] flex justify-center items-start sm:px-16 px-6"
>
  <div class="xl:max-w-7xl w-full">
    <Hero />
  </div>
</div>

<div
  class="bg-[#EDEDED] dark:bg-[#121212] flex justify-center items-center sm:px-16 px-6"
>
  <div class="xl:max-w-7xl w-full">
    <Features />
    <Cultures />
    <Geography />
    <Biotechnology />
  </div>
</div>
