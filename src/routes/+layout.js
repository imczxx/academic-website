import { afterNavigate } from '$app/navigation';

afterNavigate(() => {
    MathJax.typesetPromise();
});

export const prerender = true; 