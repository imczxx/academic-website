<script>
	import '../app.css';
	import { navigation } from '$lib/navigation';
	import { base } from '$app/paths';
	import { afterNavigate } from '$app/navigation';
	let { children } = $props();

	afterNavigate(() => {
		if (typeof MathJax !== 'undefined') {
			MathJax.typesetPromise();
		}
	});
</script>

<nav class="bg-gray-800 p-4 text-white">
	<div class="mx-auto max-w-4xl">
		<div class="flex items-center justify-between">
			<a href="{base}/" class="text-xl font-bold">Your Name</a>
			<div class="flex gap-6">
				{#each navigation.sort((a, b) => a.order - b.order) as { path, name }}
					<a href="{base}{path}" class="hover:text-gray-300">{name}</a>
				{/each}
			</div>
		</div>
	</div>
</nav>

<main>
	{@render children()}
</main>

<footer class="mt-12 border-t bg-gray-50 py-8 text-center text-gray-600">
	<p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
</footer>
