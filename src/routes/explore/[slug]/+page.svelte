<script lang="ts">
    export let data
</script>

<article class="text-white">
    <h1 class="text-7xl text-center">{data.title}</h1>
    <p class="text-lg text-left">Published: {data.date}</p>
    <svelte:component this={data.content} />
</article>