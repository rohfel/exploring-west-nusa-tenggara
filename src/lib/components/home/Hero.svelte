<script lang="ts">
  import { t } from '$lib/i18n';

  import '@fontsource/fredoka-one';
</script>

<section id="hero" class="m-0 p-0">
  <div
    class="w-screen h-screen bg-[url('/photos/home/mount-rinjani.jpg')] bg-cover bg-center"
  >
    <div class="w-screen h-screen" style="background: rgba(0, 0, 0, 0.75)">
      <div class="h-screen grid place-items-center">
        <div
          class="flex flex-col justify-center items-center max-w-xs md:max-w-lg"
        >
          <h1
            class="font-fredoka-one font-bold md:text-5xl text-3xl text-center text-white"
          >
            {$t('home.hero.title')}
          </h1>
          <button class="m-5 flex px-6 py-2 rounded-full bg-red-600">
            <a
              class="font-montserrat font-semibold text-white"
              href="#introduction"
            >
              {$t('home.hero.cta')}
            </a>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
