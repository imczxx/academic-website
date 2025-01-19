<script>
	import { fade } from 'svelte/transition';
	import { posts } from '$lib/blog-posts';
	import { base } from '$app/paths';
</script>

<div class="mx-auto max-w-4xl px-4 py-8" in:fade>
	<h1 class="mb-8 text-3xl font-bold">Blog Posts</h1>

	<div class="space-y-8">
		{#each posts as post}
			<article class="prose prose-lg">
				<h2 class="mb-2">
					<a href="{base}/blog/{post.slug}" class="text-blue-600 hover:text-blue-800 no-underline">
						{post.title}
					</a>
				</h2>
				<div class="text-gray-600 text-sm mb-2">{post.date}</div>
				<p>{post.excerpt}</p>
			</article>
		{/each}
	</div>
</div> 