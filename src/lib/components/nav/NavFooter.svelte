<script>
    import { Github, Mail } from 'lucide-svelte';
    
    export let darkMode;
    export let toggleDarkMode;
</script>

<div class="nav-section-padding border-t dark:border-gray-700">
    <ul class="space-y-2">
        <!-- GitHub -->
        <li>
            <a href="https://github.com/yourusername" 
               target="_blank" 
               rel="noopener noreferrer" 
               class="nav-link">
                <span class="flex items-center gap-2">
                    <Github class="nav-icon" />
                    <span class="font-medium">GitHub</span>
                </span>
            </a>
        </li>
        
        <!-- Email -->
        <li>
            <a href="mailto:your.email@example.com" 
               class="nav-link">
                <span class="flex items-center gap-2">
                    <Mail class="nav-icon" />
                    <span class="font-medium">Email</span>
                </span>
            </a>
        </li>
    </ul>
</div>

<!-- Dark mode button -->
<div class="p-4">
    <button
        on:click={toggleDarkMode}
        class="nav-link w-full"
        aria-label={darkMode ? 'switch to light mode' : 'switch to dark mode'}>
        <div class="relative w-5 h-5">
            <div class="theme-icon-base"
                 class:opacity-0={darkMode}
                 class:opacity-100={!darkMode}>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-700 group-hover:text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
            </div>
            <div class="theme-icon-base"
                 class:opacity-0={!darkMode}
                 class:opacity-100={darkMode}>
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-yellow-300 group-hover:text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
                </svg>
            </div>
        </div>
        <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
    </button>
</div> 