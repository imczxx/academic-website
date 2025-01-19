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
	
	<div class="flex-1 flex flex-col min-h-screen">
		<main class="flex-1">
			<slot />
		</main>
	</div>
</div>
