<script lang="ts">
  const navLinks: { title: string; href: string }[] = [
    {
      title: 'Home',
      href: '/'
    },
    {
      title: 'Explore',
      href: '/explore'
    },
    {
      title: 'About',
      href: '/about'
    }
  ];

  let menuToggle = false;
</script>

<nav class="w-full flex py-6 justify-between items-center">
  <ul class="list-none sm:flex hidden justify-end items-center flex-1">
    {#each navLinks as navLink, i}
      <li
        class={`font-open-sans font-normal cursor-pointer text-md text-white ${
          i == navLinks.length - 1 ? 'mr-0' : 'mr-10'
        }`}
      >
        <a href={`${navLink.href}`}>{navLink.title}</a>
      </li>
    {/each}
  </ul>

  <div class={`sm:hidden flex flex-1 bg-[#121212] justify-end items-center`}>
    {#if menuToggle}
      <svg
        on:click={(e) => (menuToggle = !menuToggle)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="white"
        class="w-6 h-6 z-20"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    {:else}
      <svg
        on:click={(e) => (menuToggle = !menuToggle)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="white"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>
    {/if}
  </div>

  <div
    class={`${
      menuToggle ? 'fixed top-0 left-0 z-10 flex w-screen h-screen' : 'hidden'
    } bg-[#121212]`}
  >
    <ul class="list-none flex flex-col justify-center items-center flex-1">
      {#each navLinks as navLink, i}
        <li
          class={`font-open-sans font-normal cursor-pointer text-md text-white ${
            i == navLinks.length - 1 ? 'mb-0' : 'mb-4'
          }`}
        >
          <a href={`${navLink.href}`}>{navLink.title}</a>
        </li>
      {/each}
    </ul>
  </div>
</nav>
