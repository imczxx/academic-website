// 检查系统主题偏好
export function getSystemTheme() {
    if (typeof window !== 'undefined') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
}

// 监听系统主题变化
export function watchSystemTheme(callback) {
    if (typeof window !== 'undefined') {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', (e) => {
            callback(e.matches ? 'dark' : 'light');
        });
        return () => mediaQuery.removeEventListener('change', callback);
    }
} 