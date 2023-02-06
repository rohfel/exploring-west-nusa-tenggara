<script lang="ts">
  import { t, locale } from '$lib/i18n';
</script>

<section id="solutions">
  <div
    class="w-screen h-screen bg-[url('/photos/home/poteng-jaje-tujak.jpg')] bg-cover bg-center"
  >
    <div class="w-screen h-screen" style="background: rgba(0, 0, 0, 0.75)">
      <div class="h-screen grid place-items-center">
        <div
          class="flex flex-col justify-center items-center gap-5 max-w-xs md:max-w-lg"
        >
          <h2
            class="font-fredoka-one font-semibold text-3xl text-center text-white"
          >
            {$t('home.solutions.title')}
          </h2>

          <p class="font-montserrat font-medium text-lg text-center text-white">
            {$t('home.solutions.description')}
          </p>

          <button
            class="m-5 flex px-6 py-2 rounded-full bg-gradient-to-tr from-cyan-600 to-sky-700"
          >
            <a
              href={`/${$locale}/poteng-jaje-tujak`}
              class="font-montserrat font-semibold text-white"
            >
              {$t('home.solutions.learnMore')}
            </a>
          </button>
        </div>
      </div>

      <p class="absolute bottom-5 left-4 text-white">
        Photo by <a href="https://id.pinterest.com/widyahalim/">Widya</a> on
        <a href="https://pin.it/6dwZ50z">Pinterest</a>
      </p>
    </div>
  </div>
</section>
