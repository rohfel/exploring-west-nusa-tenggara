<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  import { t, locale } from '$lib/i18n';
  import { theme, isDarkTheme, language } from '$lib/utils';

  import 'flag-icons/css/flag-icons.min.css';

  onMount(() => {
    const existingTheme = localStorage.getItem('theme');

    if (existingTheme) {
      theme.set(existingTheme);
    } else {
      theme.set('system');

      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        isDarkTheme.set(true);
      } else {
        isDarkTheme.set(false);
      }
    }

    const existingLanguage = localStorage.getItem('language');

    if (existingLanguage) {
      language.set(existingLanguage);
    } else {
      language.set($locale);
    }

    goto(`/${$language}`, {
      replaceState: true
    });
  });

  const navLinks: { title: string; href: string }[] = [
    {
      title: $t('nav.home'),
      href: `/${$locale}`
    },
    {
      title: $t('nav.explore'),
      href: `/${$locale}/explore`
    }
  ];

  const changeTheme = () => {
    if ($theme === 'system') {
      document.documentElement.classList.remove('dark');
      theme.set('light');
      isDarkTheme.set(false);
    } else if ($theme === 'light') {
      document.documentElement.classList.add('dark');
      theme.set('dark');
      isDarkTheme.set(true);
    } else if ($theme === 'dark') {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
        isDarkTheme.set(true);
      } else {
        document.documentElement.classList.remove('dark');
        isDarkTheme.set(false);
      }

      theme.set('system');
    }

    localStorage.setItem('theme', $theme);
  };

  const changeLanguage = () => {
    if ($language === 'en') {
      language.set('id');
    } else if ($language === 'id') {
      language.set('en');
    }

    localStorage.setItem('language', $language);
  };

  let menuToggle = false;
</script>

<svelte:head>
  <script lang="ts">
    const existingThemeInit = localStorage.getItem('theme');

    if (!existingThemeInit) {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    } else {
      if (existingThemeInit === 'light') {
        document.documentElement.classList.remove('dark');
      } else {
        document.documentElement.classList.add('dark');
      }
    }
  </script>
</svelte:head>

<nav class="w-full flex py-6 justify-between items-center">
  <ul class="list-none sm:flex hidden justify-end items-center flex-1">
    {#each navLinks as navLink, i}
      <li
        class={`font-open-sans font-bold text-md cursor-pointer text-black dark:text-white hover:font-bold hover:text-red-500 hover:dark:text-red-500 ${
          i == navLinks.length - 1 ? 'mr-0' : 'mr-10'
        }`}
      >
        <a href={`${navLink.href}`}>{navLink.title}</a>
      </li>
    {/each}

    <button
      class={`${$theme === 'system' ? 'inline-block' : 'hidden'} ml-10`}
      on:click={changeTheme}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke={`${$isDarkTheme ? 'white' : 'black'}`}
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
        />
      </svg>
    </button>

    <button
      class={`${$theme === 'light' ? 'inline-block' : 'hidden'} ml-10`}
      on:click={changeTheme}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="black"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
      </svg>
    </button>

    <button
      class={`${$theme === 'dark' ? 'inline-block' : 'hidden'} ml-10`}
      on:click={changeTheme}
    >
      <svg
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
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    </button>

    <button
      class={`${$language === 'en' ? 'inline-block' : 'hidden'} ml-10`}
      on:click={changeLanguage}
    >
      <a href={`/${$language}`}>
        <span class="text-white fi fi-id" />
      </a>
    </button>

    <button
      class={`${$language === 'id' ? 'inline-block' : 'hidden'} ml-10`}
      on:click={changeLanguage}
    >
      <a href={`/${$language}`}>
        <span class="text-white fi fi-us" />
      </a>
    </button>
  </ul>

  <div
    class={`sm:hidden flex flex-1 bg-[#EDEDED] dark:bg-[#121212] justify-end items-center`}
  >
    <button
      class={`${$theme === 'system' ? 'inline-block' : 'hidden'} mr-5`}
      on:click={changeTheme}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke={`${$isDarkTheme ? 'white' : 'black'}`}
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
        />
      </svg>
    </button>

    <button
      class={`${$theme === 'light' ? 'inline-block' : 'hidden'} mr-5`}
      on:click={changeTheme}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="black"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
        />
      </svg>
    </button>

    <button
      class={`${$theme === 'dark' ? 'inline-block' : 'hidden'} mr-5`}
      on:click={changeTheme}
    >
      <svg
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
          d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
        />
      </svg>
    </button>

    <button
      class={`${$language === 'en' ? 'inline-block' : 'hidden'} mr-5`}
      on:click={changeLanguage}
    >
      <a href={`/${$language}`}>
        <span class="text-white fi fi-id" />
      </a>
    </button>

    <button
      class={`${$language === 'id' ? 'inline-block' : 'hidden'} mr-5`}
      on:click={changeLanguage}
    >
      <a href={`/${$language}`}>
        <span class="text-white fi fi-us" />
      </a>
    </button>

    {#if menuToggle}
      <button class="w-6 h-6 z-20" on:click={(e) => (menuToggle = !menuToggle)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke={`${$theme === 'light' ? 'black' : 'white'}`}
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    {:else}
      <button class="w-6 h-6 z-20" on:click={(e) => (menuToggle = !menuToggle)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke={`${$theme === 'light' ? 'black' : 'white'}`}
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
    {/if}
  </div>

  <div
    class={`${
      menuToggle ? 'fixed top-0 left-0 z-10 flex w-screen h-screen' : 'hidden'
    } bg-[#EDEDED] dark:bg-[#121212]`}
  >
    <ul class="list-none flex flex-col justify-center items-center flex-1">
      {#each navLinks as navLink, i}
        <li
          class={`font-open-sans font-bold cursor-pointer text-md text-black dark:text-white ${
            i == navLinks.length - 1 ? 'mb-0' : 'mb-4'
          }`}
        >
          <a href={`${navLink.href}`}>{navLink.title}</a>
        </li>
      {/each}
    </ul>
  </div>
</nav>
