<script lang="ts">
  import FeaturesCard from './FeaturesCard.svelte';

  import { t } from '$lib/i18n';

  interface Features {
    icon: string;
    iconAlt: string;
    title: string;
    description: string;
  }

  const features: Features[] = [
    {
      icon: '/illustrations/home/informative.svg',
      iconAlt: $t('home.features.featuresList.0.iconAlt'),
      title: $t('home.features.featuresList.0.title'),
      description: $t('home.features.featuresList.0.description')
    },
    {
      icon: '/illustrations/home/education.svg',
      iconAlt: $t('home.features.featuresList.1.iconAlt'),
      title: $t('home.features.featuresList.1.title'),
      description: $t('home.features.featuresList.1.description')
    },
    {
      icon: '/illustrations/home/checklist.svg',
      iconAlt: $t('home.features.featuresList.2.iconAlt'),
      title: $t('home.features.featuresList.2.title'),
      description: $t('home.features.featuresList.2.description')
    }
  ];
</script>

<section id="features" class="flex md:flex-row flex-col sm:py-16 py-6">
  <div class="flex flex-col justify-center items-start flex-1">
    <h2
      class="font-open-sans font-semibold sm:text-5xl text-4xl text-black dark:text-white leading-[50px] w-full"
    >
      {$t('home.features.title.0')} <br class="sm:block hidden" />
      <span
        class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500"
        >{$t('home.features.title.1')}</span
      >
      {$t('home.features.title.2')} <br class="sm:block hidden" />
      {$t('home.features.title.3')}
    </h2>
    <p
      class="font-open-sans font-normal text-black dark:text-white text-base leading-[25px] max-w-lg mt-5"
    >
      {$t('home.features.description')}
    </p>

    <a href="/explore">
      <button
        type="button"
        class={`mt-10 py-4 px-6 rounded-md bg-gradient-to-t from-pink-400 to-pink-500 font-open-sans font-semibold text-lg text-black outline-none`}
      >
        {$t('home.common.cta')}
      </button>
    </a>
  </div>

  <div
    class="flex flex-col justify-center items-center flex-1 md:ml-10 ml-0 md:mt-0 mt-10 relative"
  >
    {#each features as feature, index}
      <FeaturesCard {feature} {index} />
    {/each}
  </div>
</section>
