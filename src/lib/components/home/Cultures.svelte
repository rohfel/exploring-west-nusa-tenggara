<script lang="ts">
  import { t, locale } from '$lib/i18n';
</script>

<section id="cultures">
  <div
    class="w-screen h-screen bg-[url('/photos/home/lombok-peresean-1.jpg')] bg-cover bg-top"
  >
    <div class="w-screen h-screen" style="background: rgba(0, 0, 0, 0.75)">
      <div class="h-screen grid place-items-center">
        <div
          class="flex flex-col justify-center items-center gap-5 max-w-xs md:max-w-lg"
        >
          <h2
            class="font-fredoka-one font-semibold text-3xl text-center text-white"
          >
            {$t('home.cultures.title')}
          </h2>

          <p class="font-montserrat font-medium text-lg text-center text-white">
            {$t('home.cultures.description')}
          </p>

          <div class="flex justify-center items-center max-h-screen">
            <div
              class={`flex flex-col justify-center items-center ${
                $locale === 'en' ? 'max-w-sm' : 'max-w-md'
              } p-5 border-2 border-white transition-all  backdrop-blur-sm hover:border-4 hover:backdrop-blur-lg`}
            >
              <img
                src="/photos/home/lombok-peresean-2.jpg"
                alt="Peresean"
                class="h-44"
              />

              <h3 class="font-fredoka-one font-medium text-xl text-white">
                <a href={`/${$locale}/cultures/peresean`}
                  >{$t('home.cultures.peresean.title')}</a
                >
              </h3>

              <p
                class="font-montserrat font-medium text-lg text-justify text-white"
              >
                {$t('home.cultures.peresean.description')}
              </p>
            </div>
          </div>
        </div>
      </div>

      <p class="absolute bottom-5 left-4 text-white">
        <a
          href="https://commons.wikimedia.org/wiki/File:Peresean_ritual_of_Sasak_people_of_Lombok.jpg"
          >Ketut Mardita</a
        >,
        <a href="https://creativecommons.org/licenses/by-sa/4.0">CC BY-SA 4.0</a
        >, via Wikimedia Commons
      </p>
    </div>
  </div>
</section>
