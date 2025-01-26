<script>
	import { base } from '$app/paths';
	import { navigation } from '$lib/components/nav/navigation';
	import { Github, Mail } from 'lucide-svelte';
	import NavHeader from '$lib/components/nav/NavHeader.svelte';
	import NavLinks from '$lib/components/nav/NavLinks.svelte';
	import NavFooter from '$lib/components/nav/NavFooter.svelte';

	export let isMobile = false;
	export let activeSection = 'about';
	export let toggleDrawer;
	export let isDrawerOpen = false;
	export let darkMode = false;
	export let toggleTheme;

	let selectedPath = '';

	function handleNavigationClick(path) {
		const target = document.querySelector(path);
		if (target) {
			target.scrollIntoView({ behavior: 'smooth' });
			if (isMobile) {
				toggleDrawer();
			}
		}
	}
</script>

<!-- 将导航分成三个主要组件 -->
<nav class="flex flex-col justify-between {darkMode ? 'dark' : ''}">
	<NavHeader />
	<NavLinks {activeSection} {selectedPath} {handleNavigationClick} />
	<NavFooter {darkMode} {toggleTheme} />
</nav> 