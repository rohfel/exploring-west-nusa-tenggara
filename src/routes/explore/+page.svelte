<script lang="ts">
    export let data
</script>

<section id="articles" class="bg-[#121212] sm:py-16 py-6">
    <h1 class="font-open-sans font-bold text-7xl text-white text-center leading-[75px]">Articles</h1>

    <div class="sm:px-16 px-6 sm:py-16 py-6 grid grid-cols-4 gap-4">
        <div class="bg-[#2C2C2C] rounded-md p-6">
            {#each data.posts as post}
            <a href={post.path}>
                <h4 class="font-open-sans font-bold text-white text-2xl leading-[20px] mb-1">
                    {post.meta.title}
                </h4>
            </a>
                <p class="font-open-sans font-normal text-white text-sm leading-[24px]">{post.meta.desc}</p>
            {/each}
        </div>
    </div>
</section>