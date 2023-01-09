<script lang="ts">
  interface Feature {
    icon: string;
    iconAlt: string;
    title: string;
    content: string;
  }

  export let feature = Feature;
  export let index = number;
</script>

<div
  class={`flex flex-row p-6 rounded-md ${
    index !== feature.length - 1 ? 'mb-6' : 'mb-0'
  }`}
>
  <div class="w-1/2 flex justify-center items-center">
    <img
      src={feature.icon}
      alt={feature.iconAlt}
      class="w-3/5 h-5/6 object-contain"
    />
  </div>
  <div class="flex flex-col flex-1 ml-3">
    <h3
      class="font-open-sans font-semibold text-black dark:text-white text-lg leading-[20px] mb-1"
    >
      {feature.title}
    </h3>
    <p
      class="font-open-sans font-normal text-black dark:text-white text-base leading-[24px]"
    >
      {feature.content}
    </p>
  </div>
</div>
