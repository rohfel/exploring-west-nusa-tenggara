<script lang="ts">
  import { t } from '$lib/i18n';
  import { Hero } from '$lib/components';
</script>

<svelte:head>
  <meta
    name="description"
    content="Simple, informative, educational, easy to grasp contents about West Nusa Tenggara."
  />

  <title>{$t('home.common.title')}</title>
</svelte:head>

<div class="xl:max-w-7xl w-full">
  <Hero />
</div>
