<script lang="ts">
    import FeaturesCard from './FeaturesCard.svelte'

    interface Features {
        icon: string
        iconAlt: string
        title: string
        content: string
    }

    const features: Features[] = [
        {
            icon: '/illustrations/home/informative.svg',
            iconAlt: 'Informative Illustration',
            title: 'Simple and Informative',
            content: 'A simple and informative website to discover the enormous unique cultures in West Nusa Tenggara.'
        },
        {
            icon: '/illustrations/home/education.svg',
            iconAlt: 'Education Illustration',
            title: 'Educational',
            content: 'Our mission is to educate people about West Nusa Tenggara'
        },
        {
            icon: '/illustrations/home/checklist.svg',
            iconAlt: 'Checklist Illustration',
            title: 'Easy to Grasp',
            content: 'Learning something new doesn\'t have to be difficult. With our easy to grasp contents, you will be able to learn new things about West Nusa Tenggara easily.'
        }
    ]
</script>

<section id="features" class="flex md:flex-row flex-col sm:py-16 py-6">
    <div class="flex flex-col justify-center items-start flex-1">
        <h2 class="font-open-sans font-semibold sm:text-5xl text-4xl text-white leading-[50px] w-full">Discover the enormous diversity <br class="sm:block hidden" /> in West Nusa Tenggara</h2>
        <p class="font-open-sans font-normal text-white text-base leading-[25px] max-w-lg mt-5">This website will provide you a bunch of informative contents that will help you to explore deeper into West Nusa Tenggara</p>

        <button type="button" class={`mt-10 py-4 px-6 rounded-md bg-gradient-to-tr from-purple-400 via-purple-500 to-purple-600 font-open-sans font-medium text-lg text-black outline-none`}>
            Let's Explore!
        </button>
    </div>

    <div class="flex flex-col justify-center items-center flex-1 md:ml-10 ml-0 md:mt-0 mt-10 relative">
        {#each features as feature, index}
            <FeaturesCard feature={feature} index={index} />
        {/each}
    </div>
</section>