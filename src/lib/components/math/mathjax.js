window.MathJax = {
	tex: {
		inlineMath: [['$', '$']],
		displayMath: [['$$', '$$']]
	},
	startup: {
		pageReady: () => {
			return MathJax.startup.defaultPageReady();
		}
	}
};

(function() {
	const script = document.createElement('script');
	script.type = 'text/javascript';
	script.id = 'MathJax-script';
	script.async = true;
	script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
	document.head.appendChild(script);
})(); 