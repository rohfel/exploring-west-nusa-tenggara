<script lang="ts">
  export let data;
</script>

<svelte:head>
  <title>{data.title}</title>
</svelte:head>

<article
  class="bg-[#121212] flex flex-col justify-center items-center sm:py-16 py-6 sm:px-16 px-6"
>
  <h1
    class="font-open-sans font-bold text-7xl text-white leading-[75px] text-center"
  >
    {data.title}
  </h1>
  <h4
    class="font-open-sans font-medium text-white text-2xl leading-[20px] mt-5"
  >
    {data.desc}
  </h4>
  <p
    class="font-open-sans font-medium text-lg text-white text-left leading-[25px] mt-5"
  >
    Published: {data.date}
  </p>
  <div
    class="mt-5 prose prose-h1:font-semibold prose-h2:font-medium prose-h3:font-normal prose-h4:font-normal prose-p:text-justify dark:prose-invert min-w-fit"
  >
    <svelte:component this={data.content} />
  </div>
</article>
