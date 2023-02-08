<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  import { t, locale } from '$lib/i18n';

  onMount(() => {
    const pathname = document.location.pathname;
    const lang = `${pathname.match(/[^/]+?(?=\/|$)/) || ''}`;

    if (lang === 'en') {
      return goto('/id/diversities/poteng-jaje-tujak');
    }
  });
</script>

<svelte:head>
  <title>Poteng Jaje Tujak</title>
</svelte:head>

<div class="overflow-hidden">
  <div class="bg-[url('/photos/home/poteng-jaje-tujak.jpg')] bg-cover bg-fixed">
    <section id="definition" class="backdrop-blur-sm">
      <div
        class="w-screen h-fit md:h-screen py-10"
        style="background: rgba(0, 0, 0, 0.8)"
      >
        <div class="h-fit md:h-screen grid place-items-center">
          <div
            class="flex flex-col justify-center items-center gap-5 max-w-xs md:max-w-lg"
          >
            <h1
              class="pb-10 font-fredoka-one font-bold md:text-5xl text-4xl text-center text-white"
            >
              Si Poteng dan Si Jaje Tujak
            </h1>

            <div
              class="w-screen grid grid-cols-1 md:grid-cols-2 gap-10 md:max-h-screen px-10 md:px-36"
            >
              <div>
                <h4
                  class="font-fredoka-one font-medium text-2xl text-left text-white"
                >
                  {$t('diversities.poteng-jaje-tujak.definition.title')}
                </h4>

                <p
                  class="font-montserrat font-regular text-lg text-justify text-white"
                >
                  {$t('diversities.poteng-jaje-tujak.definition.description')}
                </p>
              </div>

              <div>
                <img
                  src="/photos/home/poteng-jaje-tujak.jpg"
                  alt="Poteng Jaje Tujak"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="background">
      <div class="w-screen h-fit md:h-screen py-10 bg-black">
        <div class="h-fit md:h-screen grid place-items-center">
          <div
            class="flex flex-col justify-center items-center gap-5 max-w-xs md:max-w-lg"
          >
            <div
              class="w-screen grid md:grid-rows-2 grid-cols-1 md:grid-cols-2 gap-10 gap-y-20 md:max-h-screen px-10 md:px-36 pb-10"
            >
              <div>
                <h4
                  class="font-fredoka-one font-medium text-2xl text-left text-white"
                >
                  {$t('diversities.poteng-jaje-tujak.problems.title')}
                </h4>

                <p
                  class="font-montserrat font-regular text-lg text-justify text-white"
                >
                  {$t('diversities.poteng-jaje-tujak.problems.description')}
                </p>
              </div>

              <div>
                <h4
                  class="font-fredoka-one font-medium text-2xl text-left text-white"
                >
                  {$t('diversities.poteng-jaje-tujak.goals.title')}
                </h4>

                <p
                  class="font-montserrat font-regular text-lg text-justify text-white"
                >
                  {$t('diversities.poteng-jaje-tujak.goals.description')}
                </p>
              </div>

              <div class="md:col-span-2">
                <h4
                  class="font-fredoka-one font-medium text-2xl text-left text-white"
                >
                  {$t('diversities.poteng-jaje-tujak.benefits.title')}
                </h4>

                <p
                  class="font-montserrat font-regular text-lg text-justify text-white"
                >
                  {$t('diversities.poteng-jaje-tujak.benefits.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="facts" class="backdrop-blur-sm">
      <div
        class="w-screen h-fit md:h-screen py-10"
        style="background: rgba(0, 0, 0, 0.8)"
      >
        <div class="h-fit md:h-screen grid place-items-center">
          <div
            class="flex flex-col justify-center items-center gap-5 max-w-xs md:max-w-lg"
          />
          <div
            class="w-screen h-fit md:h-screen grid grid-cols-1 md:grid-cols-2 gap-10 place-items-center md:max-h-screen px-10 md:px-36"
          >
            <div>
              <h4
                class="font-fredoka-one font-medium text-2xl text-left text-white"
              >
                {$t('diversities.poteng-jaje-tujak.facts.0.title')}
              </h4>

              <p
                class="font-montserrat font-regular text-lg text-justify text-white"
              >
                {$t('diversities.poteng-jaje-tujak.facts.0.description')}
              </p>
            </div>

            <div>
              <img src="/photos/pounding.jpg" alt="Pounding" />
            </div>
          </div>
        </div>
      </div>

      <div class="w-screen h-fit py-10 bg-black">
        <div class="h-fit grid place-items-center">
          <div
            class="flex flex-col justify-center items-center gap-5 max-w-xs md:max-w-lg"
          >
            <div
              class="w-screen grid grid-col-1 md:grid-cols-2 gap-10 md:max-h-screen px-10 md:px-36"
            >
              <div>
                <h4
                  class="font-fredoka-one font-medium text-2xl text-left text-white"
                >
                  {$t('diversities.poteng-jaje-tujak.facts.1.title')}
                </h4>

                <p
                  class="font-montserrat font-regular text-lg text-justify text-white"
                >
                  {$t('diversities.poteng-jaje-tujak.facts.1.description')}
                </p>
              </div>

              <div>
                <h4
                  class="font-fredoka-one font-medium text-2xl text-left text-white"
                >
                  {$t('diversities.poteng-jaje-tujak.facts.2.title')}
                </h4>

                <p
                  class="font-montserrat font-regular text-lg text-justify text-white"
                >
                  {$t('diversities.poteng-jaje-tujak.facts.1.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div class="bg-[url('/photos/home/cassava.jpg')] bg-cover bg-fixed">
    <section id="how-to-make" class="backdrop-blur-sm">
      <div
        class="w-screen h-fit md:h-screen py-10"
        style="background: rgba(0, 0, 0, 0.8)"
      >
        <div class="h-fit md:h-screen grid place-items-center">
          <div
            class="flex flex-col justify-center items-center gap-5 max-w-xs md:max-w-lg"
          >
            <h2
              class="font-fredoka-one font-semibold text-3xl text-center text-white"
            >
              {@html $t('diversities.poteng-jaje-tujak.howToMake.title')}
            </h2>

            <p
              class="font-montserrat font-regular text-lg text-justify text-white"
            >
              {$t('diversities.poteng-jaje-tujak.howToMake.description')}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="ingredients" class="backdrop-blur-sm">
      <div
        class="w-screen h-fit md:h-screen py-10"
        style="background: rgba(0, 0, 0, 0.8)"
      >
        <div class="h-fit md:h-screen grid place-items-center">
          <div
            class="flex flex-col justify-center items-center gap-5 max-w-xs md:max-w-lg"
          >
            <h4
              class="font-fredoka-one font-medium text-2xl text-center text-white"
            >
              {$t('diversities.poteng-jaje-tujak.howToMake.ingredients.title')}
            </h4>

            <p
              class="font-montserrat font-regular text-lg text-justify text-white"
            >
              {$t(
                'diversities.poteng-jaje-tujak.howToMake.ingredients.description'
              )}
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="steps" class="backdrop-blur-sm">
      <div
        class="w-screen h-fit md:h-screen py-10"
        style="background: rgba(0, 0, 0, 0.8)"
      >
        <div class="h-fit md:h-screen grid place-items-center">
          <div
            class="flex flex-col justify-center items-center gap-5 max-w-xs md:max-w-lg"
          >
            <h4
              class="font-fredoka-one font-medium text-2xl text-center text-white"
            >
              {$t('diversities.poteng-jaje-tujak.howToMake.steps.title')}
            </h4>

            <p
              class="font-montserrat font-regular text-lg text-justify text-white"
            >
              {$t('diversities.poteng-jaje-tujak.howToMake.steps.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>

  <section id="conclusion">
    <div class="w-screen h-fit md:h-screen py-10 bg-black">
      <div class="h-fit md:h-screen grid place-items-center">
        <div
          class="flex flex-col justify-center items-center gap-5 max-w-xs md:max-w-lg"
        >
          <h4
            class="font-fredoka-one font-medium text-2xl text-center text-white"
          >
            {$t('diversities.poteng-jaje-tujak.conclusion.title')}
          </h4>

          <p
            class="font-montserrat font-regular text-lg text-justify text-white"
          >
            {$t('diversities.poteng-jaje-tujak.conclusion.description')}
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="references">
    <div class="w-screen h-fit md:h-screen py-10 bg-black">
      <div class="h-fit md:h-screen grid place-items-center">
        <div
          class="flex flex-col justify-center items-center gap-5 max-w-xs md:max-w-lg"
        >
          <h2
            class="font-fredoka-one font-semibold text-3xl text-center text-white"
          >
            {@html $t('diversities.poteng-jaje-tujak.references.title')}
          </h2>

          <p
            class="font-montserrat font-regular text-sm text-justify text-white"
          >
            {@html $t('diversities.poteng-jaje-tujak.references.list.0')}
          </p>

          <p
            class="font-montserrat font-regular text-sm text-justify text-white"
          >
            {@html $t('diversities.poteng-jaje-tujak.references.list.1')}
          </p>

          <p
            class="font-montserrat font-regular text-sm text-justify text-white"
          >
            {@html $t('diversities.poteng-jaje-tujak.references.list.2')}
          </p>

          <p
            class="font-montserrat font-regular text-sm text-justify text-white"
          >
            {@html $t('diversities.poteng-jaje-tujak.references.list.3')}
          </p>

          <p
            class="font-montserrat font-regular text-sm text-justify text-white"
          >
            {@html $t('diversities.poteng-jaje-tujak.references.list.4')}
          </p>

          <p
            class="font-montserrat font-regular text-sm text-justify text-white"
          >
            {@html $t('diversities.poteng-jaje-tujak.references.list.5')}
          </p>
        </div>
      </div>
    </div>
  </section>
</div>
