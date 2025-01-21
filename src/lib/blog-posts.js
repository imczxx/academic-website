// Auto import all blog files
const blogFiles = import.meta.glob('/src/routes/blog/**/*.svx', { eager: true });

// Process blog data
export const posts = Object.entries(blogFiles).map(([path, post]) => {
	// Extract slug from path
	const slug = path.match(/\/blog\/(.+?)\/\+page\.svx$/)[1];
	
	// Get metadata from file's frontmatter
	const { title, date, excerpt = '' } = post.metadata;
	
	return {
		slug,
		title,
		date,
		excerpt
	};
}).sort((a, b) => new Date(b.date) - new Date(a.date)); // Sort by date

// Get all blog posts
export function getAllPosts() {
	return posts;
}

// Get single post by slug
export function getPostBySlug(slug) {
	return posts.find(post => post.slug === slug);
} 