<script>
	import '../app.css';
	import '$lib/styles/layout.css';
	import { navigation } from '$lib/navigation';
	import { base } from '$app/paths';
	import { afterNavigate } from '$app/navigation';

	afterNavigate(() => {
		if (typeof MathJax !== 'undefined') {
			MathJax.typesetPromise();
		}
	});
</script>

<div class="layout">
	<nav>
		<div class="nav-header">
			<a href="{base}/" class="text-xl font-bold">Your Name</a>
		</div>
		<ul>
			{#each navigation.sort((a, b) => a.order - b.order) as { path, name }}
				<li>
					<a href="{base}{path}">{name}</a>
				</li>
			{/each}
		</ul>
	</nav>
	
	<main>
		<slot />
	</main>
</div>

<footer class="mt-12 border-t bg-gray-50 py-8 text-center text-gray-600">
	<p>© {new Date().getFullYear()} Your Name. All rights reserved.</p>
</footer>
