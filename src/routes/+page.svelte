<script>
	import { fade } from 'svelte/transition';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	let darkMode = false;
	let isSystemDark = false;
	let isTransitioning = false;

	// Listen for system theme changes
	onMount(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		isSystemDark = mediaQuery.matches;
		
		// Prioritize saved theme settings
		const savedTheme = localStorage.getItem('theme');
		if (savedTheme) {
			darkMode = savedTheme === 'dark';
		} else {
			darkMode = isSystemDark;
		}
		
		updateTheme();

		mediaQuery.addEventListener('change', (e) => {
			if (!localStorage.getItem('theme')) {
				isSystemDark = e.matches;
				darkMode = isSystemDark;
				updateTheme();
			}
		});
	});

	function toggleDarkMode() {
		if (isTransitioning) return;
		
		isTransitioning = true;
		darkMode = !darkMode;
		localStorage.setItem('theme', darkMode ? 'dark' : 'light');
		
		// Add transition animation
		document.documentElement.classList.add('transitioning-theme');
		updateTheme();
		
		setTimeout(() => {
			document.documentElement.classList.remove('transitioning-theme');
			isTransitioning = false;
		}, 200);
	}

	function updateTheme() {
		if (darkMode) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	}
</script>

<div class="mx-auto max-w-4xl px-4 py-8" in:fade>
	<header class="mb-12 text-center">
		<h1 class="mb-4 text-4xl font-bold dark:text-gray-50 transition-colors duration-200">About Me</h1>
		<p class="text-xl text-gray-600 dark:text-gray-400 transition-colors duration-200">Position · Institution</p>
	</header>

	<section class="prose prose-lg mx-auto mb-8 dark:prose-invert transition-colors duration-200">
		<p>
			Brief introduction about yourself. For example: I am a Ph.D. student at University Name,
			conducting research in artificial intelligence. My research interests include machine learning,
			computer vision, and related fields.
		</p>
		<p>
			Brief introduction about yourself. For example: I am a Ph.D. student at University Name,
			conducting research in artificial intelligence. My research interests include machine learning,
			computer vision, and related fields.
		</p>
		<p>
			Brief introduction about yourself. For example: I am a Ph.D. student at University Name,
			conducting research in artificial intelligence. My research interests include machine learning,
			computer vision, and related fields.
		</p>
		<p>
			Brief introduction about yourself. For example: I am a Ph.D. student at University Name,
			conducting research in artificial intelligence. My research interests include machine learning,
			computer vision, and related fields.
		</p>
		<p>
			Brief introduction about yourself. For example: I am a Ph.D. student at University Name,
			conducting research in artificial intelligence. My research interests include machine learning,
			computer vision, and related fields.
		</p>
		<p>
			Brief introduction about yourself. For example: I am a Ph.D. student at University Name,
			conducting research in artificial intelligence. My research interests include machine learning,
			computer vision, and related fields.
		</p>
		<p>
			Brief introduction about yourself. For example: I am a Ph.D. student at University Name,
			conducting research in artificial intelligence. My research interests include machine learning,
			computer vision, and related fields.
		</p>
		<p>
			Brief introduction about yourself. For example: I am a Ph.D. student at University Name,
			conducting research in artificial intelligence. My research interests include machine learning,
			computer vision, and related fields.
		</p>
		<p>
			Brief introduction about yourself. For example: I am a Ph.D. student at University Name,
			conducting research in artificial intelligence. My research interests include machine learning,
			computer vision, and related fields.
		</p>
	</section>

</div>

<style>
	:global(.dark) {
		@apply bg-gray-900;
		color-scheme: dark;
	}

	:global(.transitioning-theme) {
		transition: background-color 200ms ease-in-out, color 200ms ease-in-out;
	}

	:global(::selection) {
		@apply bg-gray-200 text-gray-900 dark:bg-gray-700 dark:text-gray-50;
	}

	:global(.dark .prose) {
		--tw-prose-body: theme('colors.gray.300');
		--tw-prose-headings: theme('colors.gray.100');
		--tw-prose-links: theme('colors.blue.400');
		--tw-prose-bold: theme('colors.gray.100');
		--tw-prose-counters: theme('colors.gray.400');
		--tw-prose-bullets: theme('colors.gray.400');
		--tw-prose-quotes: theme('colors.gray.100');
		--tw-prose-quote-borders: theme('colors.gray.700');
		--tw-prose-captions: theme('colors.gray.400');
		--tw-prose-code: theme('colors.gray.100');
		--tw-prose-pre-code: theme('colors.gray.300');
		--tw-prose-pre-bg: theme('colors.gray.800');
	}
</style>
