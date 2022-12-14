<script lang="ts">
	import { Navbar, Hero, Features, Cultures, Geography, Biotechnology } from '$lib/components';
</script>

<svelte:head>
	<title>Exploring West Nusa Tenggara</title>
</svelte:head>

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

	<div class="bg-[#121212] flex justify-center items-center sm:px-16 px-6">
		<div class="xl:max-w-7xl w-full">
			<Features />
			<Cultures />
			<Geography />
			<Biotechnology />
		</div>
	</div>
</div>
