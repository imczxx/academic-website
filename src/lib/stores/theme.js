import { writable } from 'svelte/store';
import { browser } from '$app/environment';

function createThemeStore() {
    const { subscribe, set, update } = writable({
        darkMode: false,
        isSystemDark: false
    });

    return {
        subscribe,
        toggleDarkMode: () => update(state => {
            const newDarkMode = !state.darkMode;
            if (browser) {
                localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
                updateThemeClass(newDarkMode);
            }
            return { ...state, darkMode: newDarkMode };
        }),
        initTheme: () => {
            if (browser) {
                const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
                const isSystemDark = mediaQuery.matches;
                const savedTheme = localStorage.getItem('theme');
                const darkMode = savedTheme ? savedTheme === 'dark' : isSystemDark;
                
                set({ darkMode, isSystemDark });
                updateThemeClass(darkMode);
            }
        },
        setSystemTheme: (isDark) => update(state => {
            if (!localStorage.getItem('theme')) {
                const darkMode = isDark;
                updateThemeClass(darkMode);
                return { ...state, isSystemDark: isDark, darkMode };
            }
            return state;
        })
    };
}

function updateThemeClass(darkMode) {
    if (darkMode) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
}

export const themeStore = createThemeStore(); 