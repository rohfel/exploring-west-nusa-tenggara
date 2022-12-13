<script lang="ts">
    interface NavLinks {
        title: string;
        id: string;
    }

    const navLinks: NavLinks[] = [
        {
            title: 'Home',
            id: 'home'
        },
        {
            title: 'Explore',
            id: 'explore'
        },
        {
            title: 'About',
            id: 'about'
        }
    ]

    let menuToggle = false
</script>

<nav class="w-full flex py-6 justify-between items-center">
    <ul class="list-none sm:flex hidden justify-end items-center flex-1">
        {#each navLinks as navLink, i}
            <li id={navLink.id} class={`font-open-sans font-normal cursor-pointer text-md text-white ${i == navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
                <a href={`#${navLink.id}`}>{navLink.title}</a>
            </li>
        {/each}
    </ul>

    <div class="sm:hidden flex flex-1 justify-end items-center">
        {#if menuToggle}
            <svg on:click={e => menuToggle = !menuToggle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        {:else}
            <svg on:click={e => menuToggle = !menuToggle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
        {/if}

        <div class={`${menuToggle ? 'flex' : 'hidden'} p-6 bg-[#121212] absolute top-16 right-0 my-2 min-w-[140px]`}>
            <ul class="list-none flex flex-col justify-end items-center flex-1">
                {#each navLinks as navLink, i}
                    <li id={navLink.id} class={`font-open-sans font-normal cursor-pointer text-md text-white ${i == navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}>
                        <a href={`#${navLink.id}`}>{navLink.title}</a>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</nav>