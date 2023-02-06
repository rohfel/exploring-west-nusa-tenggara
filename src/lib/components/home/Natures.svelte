<script lang="ts">
  import { t } from '$lib/i18n';
</script>

<section id="natures">
  <div
    class="w-screen h-screen bg-[url('/photos/home/lombok-hill-and-sea.jpg')] bg-cover bg-center"
  >
    <div class="w-screen h-screen" style="background: rgba(0, 0, 0, 0.75)">
      <div class="h-screen grid place-items-center">
        <div
          class="flex flex-col justify-center items-center gap-5 max-w-xs md:max-w-lg"
        >
          <h2
            class="font-fredoka-one font-semibold text-3xl text-center text-white"
          >
            {$t('home.natures.title')}
          </h2>

          <p class="font-montserrat font-medium text-lg text-center text-white">
            {$t('home.natures.description')}
          </p>
        </div>
      </div>

      <p class="absolute bottom-5 left-4 text-white">
        Photo by <a
          href="https://unsplash.com/@mfrazi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >Fahrul Razi</a
        >
        on
        <a
          href="https://unsplash.com/photos/ThCKp9NpwY0?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >Unsplash</a
        >
      </p>
    </div>
  </div>
</section>
