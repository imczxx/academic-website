<script>

	import About from './about/+page.svelte';
	import Research from './research/+page.svelte';
	import Publications from './publications/+page.svelte';
</script>

<div class="mx-auto max-w-4xl px-4 py-8" in:fade>
	<!-- About Section -->
	<section id="about" class="mb-16">
		<About />
	</section>

	<!-- Add divider -->
	<hr class="my-16 border-t border-gray-200 dark:border-gray-700" />

	<!-- Research Section -->
	<section id="research" class="mb-16">
		<Research />
	</section>

	<!-- Add divider -->
	<hr class="my-16 border-t border-gray-200 dark:border-gray-700" />

	<!-- Publications Section -->
	<section id="publications" class="mb-16">
		<Publications />
	</section>
</div>
