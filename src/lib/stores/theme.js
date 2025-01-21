import { writable } from 'svelte/store';

function createThemeStore() {
    const { subscribe, set, update } = writable({
        darkMode: false,
        isSystemDark: false,
        isTransitioning: false
    });

    return {
        subscribe,
        toggleTheme: () => {
            update(state => {
                if (state.isTransitioning) return state;
                
                const newDarkMode = !state.darkMode;
                localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
                
                document.documentElement.classList.add('transitioning-theme');
                if (newDarkMode) {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
                
                setTimeout(() => {
                    document.documentElement.classList.remove('transitioning-theme');
                    update(s => ({ ...s, isTransitioning: false }));
                }, 200);
                
                return {
                    ...state,
                    darkMode: newDarkMode,
                    isTransitioning: true
                };
            });
        },
        initTheme: () => {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const isSystemDark = mediaQuery.matches;
            const savedTheme = localStorage.getItem('theme');
            const darkMode = savedTheme ? savedTheme === 'dark' : isSystemDark;
            
            set({ darkMode, isSystemDark, isTransitioning: false });
            
            if (darkMode) {
                document.documentElement.classList.add('dark');
            }
            
            mediaQuery.addEventListener('change', (e) => {
                if (!localStorage.getItem('theme')) {
                    update(state => {
                        const darkMode = e.matches;
                        if (darkMode) {
                            document.documentElement.classList.add('dark');
                        } else {
                            document.documentElement.classList.remove('dark');
                        }
                        return { ...state, darkMode, isSystemDark: e.matches };
                    });
                }
            });
        }
    };
}

export const theme = createThemeStore(); 