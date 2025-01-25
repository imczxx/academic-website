<script>
	import { onMount } from 'svelte';

	let darkMode = false;
	let isTransitioning = false;

	// 初始化主题
	onMount(() => {
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
		const isSystemDark = mediaQuery.matches;
		const savedTheme = localStorage.getItem('theme');
		darkMode = savedTheme ? savedTheme === 'dark' : isSystemDark;
		updateTheme();

		mediaQuery.addEventListener('change', (e) => {
			if (!localStorage.getItem('theme')) {
				darkMode = e.matches;
				updateTheme();
			}
		});
	});

	function toggleDarkMode() {
		if (isTransitioning) return;

		isTransitioning = true;
		darkMode = !darkMode;
		localStorage.setItem('theme', darkMode ? 'dark' : 'light');

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

<button on:click={toggleDarkMode}>
	{darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
</button>

<style>
	:global(.transitioning-theme) {
		transition: background-color 200ms ease-in-out, color 200ms ease-in-out;
	}
</style> 