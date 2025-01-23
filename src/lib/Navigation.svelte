<script>
	import { base } from '$app/paths';
	import { navigation } from '$lib/navigation';
	import { Github, Mail } from 'lucide-svelte';
	import NavHeader from './components/nav/NavHeader.svelte';
	import NavLinks from './components/nav/NavLinks.svelte';
	import NavFooter from './components/nav/NavFooter.svelte';

	export let isMobile = false;
	export let activeSection = 'about';
	export let toggleDrawer;
	export let isDrawerOpen = false;
	export let darkMode = false;
	export let toggleDarkMode;

	let selectedPath = '';

	function handleNavigationClick(path) {
		const target = document.querySelector(path);
		if (target) {
			target.scrollIntoView({ behavior: 'smooth' });
			selectedPath = path;
			if (isMobile) {
				toggleDrawer();
			}
		}
	}
</script>

<!-- 将导航分成三个主要组件 -->
<nav class="flex flex-col justify-between">
	<NavHeader />
	<NavLinks {activeSection} {selectedPath} {handleNavigationClick} />
	<NavFooter {darkMode} {toggleDarkMode} />
</nav> 