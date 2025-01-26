import { writable } from 'svelte/store';
import { browser } from '$app/environment';

// 检查系统主题偏好
function getSystemTheme() {
    if (browser) {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
}

function createThemeStore() {
    const { subscribe, set, update } = writable({
        darkMode: false,
        isSystemDark: false
    });

    let mediaQueryCleanup = null;

    // 监听系统主题变化
    function watchSystemTheme() {
        if (browser) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const handleChange = (e) => {
                if (!localStorage.getItem('theme')) {
                    update(state => ({
                        ...state,
                        darkMode: e.matches,
                        isSystemDark: e.matches
                    }));
                    updateThemeClass(e.matches);
                }
            };

            mediaQuery.addEventListener('change', handleChange);
            mediaQueryCleanup = () => mediaQuery.removeEventListener('change', handleChange);
        }
    }

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
                const savedTheme = localStorage.getItem('theme');
                const isSystemDark = getSystemTheme() === 'dark';
                const darkMode = savedTheme ? savedTheme === 'dark' : isSystemDark;
                
                set({ darkMode, isSystemDark });
                updateThemeClass(darkMode);
                watchSystemTheme();
            }
        },
        cleanup: () => {
            if (mediaQueryCleanup) {
                mediaQueryCleanup();
            }
        }
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