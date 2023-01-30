<script lang="ts">
  import { t } from '$lib/i18n';

  export let data;
</script>

<svelte:head>
  <title>{$t('explore.title')}</title>
</svelte:head>

<section id="articles" class="bg-[#EDEDED] dark:bg-[#121212] sm:py-16 py-6">
  <h1
    class="font-open-sans font-bold text-7xl text-black dark:text-white text-center leading-[75px]"
  >
    {$t('explore.title')}
  </h1>

  <div
    class="sm:px-16 px-6 sm:py-16 py-6 grid md:grid-cols-4 grid-rows-4 gap-4"
  >
    {#each data.posts as post}
      <div class="bg-[#d3d3d3] dark:bg-[#2C2C2C] w-full rounded-md p-6">
        <a href={post.path}>
          <h4
            class="font-open-sans font-bold text-black dark:text-white text-2xl leading-[24px] mb-1"
          >
            {post.meta.title}
          </h4>
        </a>
        <p
          class="font-open-sans font-normal text-black dark:text-white text-sm leading-[20px]"
        >
          {post.meta.desc}
        </p>
      </div>
    {/each}
  </div>
</section>
