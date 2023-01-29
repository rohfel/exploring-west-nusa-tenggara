<script lang="ts">
  import { t } from '$lib/i18n';
</script>

<section id="geography" class="flex md:flex-row flex-col-reverse sm:py-16 py-6">
  <div class="flex flex-col flex-1">
    <h2
      class="font-open-sans font-semibold text-center sm:text-left sm:text-5xl text-4xl text-black dark:text-white leading-[50px] w-full"
    >
      {$t('home.geography.title.0')}
      <span
        class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-amber-600"
        >{$t('home.geography.title.1')}</span
      >
    </h2>
    <p
      class="font-open-sans font-normal text-center sm:text-left text-black dark:text-white text-base leading-[25px] max-w-lg mt-5"
    >
      {$t('home.geography.description.0')}<sup>2</sup>{$t(
        'home.geography.description.1'
      )}
    </p>

    <div class="flex justify-center sm:justify-start">
      <button
        type="button"
        class={`mt-10 py-4 px-6 rounded-md bg-gradient-to-t from-purple-400 to-purple-500 font-open-sans font-semibold text-lg text-black outline-none`}
      >
        {$t('home.geography.cta')}
      </button>
    </div>
  </div>

  <div
    class="flex flex-col justify-center sm:items-end items-center flex-1 md:ml-10 ml-0 md:mt-0 mt-10 relative"
  >
    <img
      src="/illustrations/home/mountain.svg"
      alt={$t('home.geography.illustrationAlt')}
      class="w-[90%] h-[90%] object-contain"
    />
  </div>
</section>
