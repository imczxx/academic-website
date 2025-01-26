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
        isTransitioning: false
    });

    let mediaQueryCleanup = null;

    return {
        subscribe,
        
        initTheme: () => {
            if (browser) {
                const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
                const isSystemDark = mediaQuery.matches;
                const savedTheme = localStorage.getItem('theme');
                
                update(state => ({
                    ...state,
                    darkMode: savedTheme ? savedTheme === 'dark' : isSystemDark
                }));
                
                updateThemeClass();

                // 监听系统主题变化
                const handleChange = (e) => {
                    if (!localStorage.getItem('theme')) {
                        update(state => ({
                            ...state,
                            darkMode: e.matches
                        }));
                        updateThemeClass();
                    }
                };

                mediaQuery.addEventListener('change', handleChange);
                mediaQueryCleanup = () => mediaQuery.removeEventListener('change', handleChange);
            }
        },

        toggleTheme: () => {
            update(state => {
                const newDarkMode = !state.darkMode;
                if (browser) {
                    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
                    document.documentElement.classList.toggle('dark', newDarkMode);
                }
                return {
                    ...state,
                    darkMode: newDarkMode
                };
            });
        },

        cleanup: () => {
            if (mediaQueryCleanup) {
                mediaQueryCleanup();
            }
        }
    };
}

function updateThemeClass() {
    if (browser) {
        const state = get(themeStore);
        document.documentElement.classList.toggle('dark', state.darkMode);
    }
}

export const themeStore = createThemeStore(); 