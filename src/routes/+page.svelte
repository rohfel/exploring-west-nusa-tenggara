<script lang="ts">
    import { Navbar, Hero } from '$lib/components'
</script>

<div class="bg-[#121212] w-full overflow-hidden">
    <div class="sm:px-16 px-6 flex justify-center items-center">
        <div class="xl:max-w-7xl w-full">
            <Navbar />
        </div>
    </div>

    <div class="bg-[#121212] flex justify-center items-start">
        <div class="xl:max-w-7xl w-full">
            <Hero />
        </div>
    </div>
</div>