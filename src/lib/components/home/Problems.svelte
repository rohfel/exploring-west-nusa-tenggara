<script lang="ts">
  import { t, locale } from '$lib/i18n';
</script>

<section id="problems">
  <div
    class="w-screen h-screen bg-[url('/photos/home/cassava.jpg')] bg-cover bg-center"
  >
    <div class="w-screen h-screen" style="background: rgba(0, 0, 0, 0.75)">
      <div class="h-screen grid place-items-center">
        <div
          class="flex flex-col justify-center items-center gap-5 max-w-xs md:max-w-lg"
        >
          <h2
            class="font-fredoka-one font-semibold text-3xl text-center text-white"
          >
            {$t('home.problems.title')}
          </h2>

          <div class="w-screen grid grid-cols-2 gap-10 max-h-screen px-36">
            <div class="w-auto">
              <p
                class="font-montserrat font-medium text-lg text-justify text-white"
              >
                {$t('home.problems.description.0')}
              </p>
            </div>

            <div class="w-auto">
              <p
                class="font-montserrat font-medium text-lg text-justify text-white"
              >
                {$t('home.problems.description.1')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <p class="absolute bottom-5 left-4 text-white">
        Photo by <a
          href="https://unsplash.com/de/@cosmicwriter?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >Loren Biser</a
        >
        on
        <a
          href="https://unsplash.com/photos/vP5guwApg0g?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >Unsplash</a
        >
      </p>
    </div>
  </div>
</section>
