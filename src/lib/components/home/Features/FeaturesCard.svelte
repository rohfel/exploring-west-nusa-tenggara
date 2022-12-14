<script lang="ts">
    interface Feature {
        icon: string
        title: string
        content: string
    }

    export let feature = Feature
    export let index = number
</script>

<div class={`flex flex-row p-6 rounded-md ${index !== feature.length - 1 ? 'mb-6' : 'mb-0'}`}>
    <div class="w-1/2 flex justify-center items-center">
        <img src={feature.icon} alt="Icon" class="w-1/2 h-1/2 object-contain">
    </div>
    <div class="flex flex-col flex-1 ml-3">
        <h4 class="font-open-sans font-semibold text-white text-lg leading-[20px] mb-1">
            {feature.title}
        </h4>
        <p class="font-open-sans font-normal text-white text-base leading-[24px]">
            {feature.content}
        </p>
    </div>
</div>