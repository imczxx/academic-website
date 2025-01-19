<script>
	import '../app.css';
	let { children } = $props();
</script>

<nav class="bg-gray-800 p-4 text-white">
	<div class="mx-auto max-w-4xl">
		<div class="flex items-center justify-between">
			<a href="/" class="text-xl font-bold">Your Name</a>
			<div class="flex gap-6">
				<a href="/research" class="hover:text-gray-300">Research</a>
				<a href="/publications" class="hover:text-gray-300">Publications</a>
				<a href="/contact" class="hover:text-gray-300">Contact</a>
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
