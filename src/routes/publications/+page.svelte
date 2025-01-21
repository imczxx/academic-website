<script>
	const publications = [
		{
			title: 'Paper Title',
			authors: 'Author1, Author2, Author3',
			venue: 'Conference/Journal Name',
			year: '2024',
			link: '#'
		}
		// Add more publications...
	];
</script>

<h1 class="mb-8 text-3xl font-bold">Publications</h1>

<div class="space-y-6">
	{#each publications as pub}
		<div class="rounded-lg border p-4 shadow-sm">
			<h3 class="mb-2 text-xl font-semibold">
				<a href={pub.link} class="text-blue-600 hover:text-blue-800">{pub.title}</a>
			</h3>
			<p class="text-gray-600">{pub.authors}</p>
			<p class="text-gray-500">
				{pub.venue}, {pub.year}
			</p>
		</div>
	{/each}
</div>