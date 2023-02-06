<script lang="ts">
  import { onMount } from 'svelte';
  import ScrollMagic from 'scrollmagic';
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

  let slidesContainer;

  onMount(() => {
    ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

    const controller = new ScrollMagic.Controller({
      globalSceneOptions: {
        triggerHook: 'onLeave',
        duration: '100%'
      }
    });

    const slides = slidesContainer.querySelectorAll('section');

    for (let i = 0; i < slides.length; i++) {
      new ScrollMagic.Scene({
        triggerElement: slides[i]
      })
        .setPin(slides[i], { pushFollowers: false })
        .addTo(controller);
    }
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
