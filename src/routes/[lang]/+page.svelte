<script lang="ts">
  import { onMount } from 'svelte';

  import { ScrollMagicPluginGsap } from 'scrollmagic-plugin-gsap';
  import { TweenMax, TimelineMax } from 'gsap';

  import { t } from '$lib/i18n';
  import {
    Hero,
    Introduction,
    Cultures,
    Natures,
    Problems,
    Solutions
  } from '$lib/components';

  let ScrollMagic;
  let slidesContainer;

  onMount(async () => {
    ScrollMagic = await import('scrollmagic');

    ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);
  });
</script>

<svelte:head>
  <meta
    name="description"
    content="Simple, informative, educational, easy to grasp contents about West Nusa Tenggara."
  />

  <title>{$t('home.common.title')}</title>
</svelte:head>

<div class="overflow-hidden" bind:this={slidesContainer}>
  <Hero />
  <Introduction />
  <Cultures />
  <Natures />
  <Problems />
  <Solutions />
</div>
