<script lang="ts">
  import { t } from '$lib/i18n';
</script>

<section id="cultures" class="flex md:flex-row flex-col sm:py-16 py-6">
  <div
    class="flex flex-col justify-center sm:items-start items-center flex-1 md:mr-10 mr-0 md:mt-0 mt-10 relative"
  >
    <img
      src="/illustrations/home/cultures.svg"
      alt={$t('home.cultures.illustrationAlt')}
      class="w-[90%] h-[90%] object-contain"
    />
  </div>

  <div class="flex flex-col flex-1">
    <div>
      <h2
        class="font-open-sans font-semibold text-center sm:text-left sm:text-5xl text-4xl text-black dark:text-white leading-[50px] w-full"
      >
        {$t('home.cultures.title.0')}
        <span
          class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600"
          >{$t('home.cultures.title.1')}</span
        >
      </h2>
      <p
        class="font-open-sans font-normal text-center sm:text-left text-black dark:text-white text-base leading-[25px] max-w-lg mt-5"
      >
        {$t('home.cultures.description')}
      </p>
    </div>

    <div class="flex justify-center sm:justify-start">
      <button
        type="button"
        class={`mt-10 py-4 px-6 rounded-md bg-gradient-to-t from-green-400 to-green-500 font-open-sans font-semibold text-lg text-black outline-none`}
      >
        {$t('home.cultures.cta')}
      </button>
    </div>
  </div>
</section>
