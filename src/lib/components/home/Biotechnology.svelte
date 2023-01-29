<script lang="ts">
  import { t } from '$lib/i18n';
</script>

<section id="biotechnology" class="flex md:flex-row flex-col sm:py-16 py-6">
  <div
    class="flex flex-col justify-center sm:items-start items-center flex-1 md:mr-10 mr-0 md:mt-0 mt-10 relative"
  >
    <img
      src="/illustrations/home/science.svg"
      alt={$t('home.biotechnology.illustrationAlt')}
      class="w-[90%] h-[90%] object-contain"
    />
  </div>

  <div class="flex flex-col justify-center items-start flex-1">
    <div>
      <h2
        class="font-open-sans font-semibold text-center sm:text-left sm:text-5xl text-4xl text-black dark:text-white leading-[50px] w-full"
      >
        <span
          class="font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500"
          >{$t('home.biotechnology.title.0')}</span
        >
        {$t('home.biotechnology.title.1')}
      </h2>
      <p
        class="font-open-sans font-normal text-center sm:text-left text-black dark:text-white text-base leading-[25px] max-w-lg mt-5"
      >
        {$t('home.biotechnology.description')}
      </p>

      <div class="flex justify-center sm:justify-start">
        <button
          type="button"
          class={`mt-10 py-4 px-6 rounded-md bg-gradient-to-t from-green-400 to-green-500 font-open-sans font-semibold text-lg text-black outline-none`}
        >
          {$t('home.biotechnology.cta')}
        </button>
      </div>
    </div>
  </div>
</section>
