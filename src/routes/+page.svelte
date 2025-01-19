<script>
	import { fade } from 'svelte/transition';
	import { base } from '$app/paths';
	import { onMount } from 'svelte';

	let darkMode = false;
	let isSystemDark = false;
	let isTransitioning = false;

	// 监听系统主题变化
	onMount(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		isSystemDark = mediaQuery.matches;
		
		// 优先使用保存的主题设置
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
		
		// 添加过渡动画
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
		<div class="flex justify-end mb-4">
			<button
				on:click={toggleDarkMode}
				class="p-2 rounded-full hover:ring-2 hover:ring-offset-2 dark:hover:ring-offset-gray-800 
					   hover:ring-gray-300 dark:hover:ring-gray-600 transition-all duration-200
					   bg-gray-100 dark:bg-gray-800 group relative"
				aria-label={darkMode ? '切换到亮色模式' : '切换到暗色模式'}
			>
				<div class="relative w-6 h-6">
					<div class="absolute inset-0 transition-opacity duration-200"
						 class:opacity-0={darkMode}
						 class:opacity-100={!darkMode}>
						<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-gray-700 group-hover:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
						</svg>
					</div>
					<div class="absolute inset-0 transition-opacity duration-200"
						 class:opacity-0={!darkMode}
						 class:opacity-100={darkMode}>
						<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-yellow-300 group-hover:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
						</svg>
					</div>
				</div>
			</button>
		</div>
		<h1 class="mb-4 text-4xl font-bold dark:text-gray-50 transition-colors duration-200">Your Name</h1>
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
