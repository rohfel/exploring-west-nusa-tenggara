<script lang="ts">
  import { t } from '$lib/i18n';
</script>

<section id="hero">
  <div
    class="w-screen h-screen bg-[url('/photos/home/lombok-sea.jpg')] bg-cover bg-top"
  >
    <div class="w-screen h-screen" style="background: rgba(0, 0, 0, 0.5)">
      <div class="h-screen grid place-items-center">
        <div
          class="flex flex-col justify-center items-center max-w-xs md:max-w-lg"
        >
          <h1
            class="font-fredoka-one font-bold md:text-5xl text-4xl text-center text-white"
          >
            {$t('home.hero.title')}
          </h1>

          <button
            class="m-5 flex px-6 py-2 rounded-full bg-gradient-to-tr from-cyan-600 to-sky-700"
          >
            <a
              href="#introduction"
              class="font-montserrat font-semibold text-white"
            >
              {$t('home.hero.cta')}
            </a>
          </button>
        </div>
      </div>

      <p class="absolute bottom-5 left-4 text-white">
        Photo by <a
          href="https://unsplash.com/@ag0yy_?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >Yoga Firmansah</a
        >
        on
        <a
          href="https://unsplash.com/photos/Loo56t3mgWs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >Unsplash</a
        >
      </p>
    </div>
  </div>
</section>
