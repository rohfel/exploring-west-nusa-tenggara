<script lang="ts">
  import { Navbar } from '$lib/components';

  import '../app.css';
</script>

<div class="bg-[#EDEDED] dark:bg-[#121212] w-full overflow-hidden">
  <div class="sm:px-16 px-6 flex justify-center items-center">
    <div class="xl:max-w-7xl w-full">
      <Navbar />
    </div>
  </div>

  <slot />
</div>
