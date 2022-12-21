<section id="home" class="flex md:flex-row flex-col sm:py-16 py-6">
  <div
    class="flex justify-center items-start flex-1 flex-col xl:px-0 sm:px-16 px-6"
  >
    <div class="flex flex-row justify-between items-center w-full">
      <h1
        class="flex-1 font-open-sans font-bold text-7xl text-white leading-[75px]"
      >
        Let's Explore <br class="sm:block hidden" />
        <span
          class="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500"
          >West Nusa Tenggara</span
        >
      </h1>
    </div>

    <p
      class="font-open-sans font-medium text-white text-lg leading-[25px] max-w-md mt-5"
    >
      Discover the <span
        class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-500"
        >enormous</span
      >
      amount of
      <span
        class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-500"
        >unique</span
      >
      and
      <span
        class="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-pink-500"
        >amazing</span
      > cultures, foods, and natural resources in West Nusa Tenggara
    </p>

    <div class="mt-5 flex items-end">
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
          d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
        />
      </svg>
      <p
        class="ml-2 font-open-sans font-normal text-white text-base leading-[25px] max-w-md mt-2"
      >
        This website is open source! Check out the <a
          href="https://github.com/rohfel/exploring-west-nusa-tenggara"
          class="font-semibold transition ease-in-out delay-100 duration-300 hover:font-bold hover:scale-100"
          >source code</a
        >!
      </p>
    </div>

    <a href="/explore">
      <button
        type="button"
        class={`mt-10 py-4 px-6 rounded-md bg-gradient-to-t from-yellow-400 to-yellow-500 font-open-sans font-semibold text-lg text-black outline-none`}
      >
        Let's Explore!
      </button>
    </a>
  </div>

  <div class="flex justify-center items-center flex-1 md:my-0 my-10 relative">
    <img
      src="/illustrations/home/nature.svg"
      alt="Nature SVG Illustration"
      class="w-3/4 h-3/4 relative z-[5]"
    />

    <div
      class="absolute z-0 w-[40%] h-[35%] top-0 bg-gradient-to-t from-purple-100 via-blue-200 to-blue-300 blur-[900px]"
    />
    <div
      class="absolute z-1 w-[80%] h-[80%] rounded-full bottom-40 bg-white blur-[750px]"
    />
    <div
      class="absolute z-0 w-[50%] h-[50%] right-30 bottom-20 bg-gradient-to-r from-sky-100 via-sky-200 to-sky-300 blur-[120px]"
    />
  </div>
</section>
