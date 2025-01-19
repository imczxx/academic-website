// 自动导入所有博客文件
const blogFiles = import.meta.glob('/src/routes/blog/**/*.svx', { eager: true });

// 处理博客数据
export const posts = Object.entries(blogFiles).map(([path, post]) => {
	// 从路径中提取 slug
	const slug = path.match(/\/blog\/(.+?)\/\+page\.svx$/)[1];
	
	// 从文件的 frontmatter 中获取元数据
	const { title, date, excerpt = '' } = post.metadata;
	
	return {
		slug,
		title,
		date,
		excerpt
	};
}).sort((a, b) => new Date(b.date) - new Date(a.date)); // 按日期排序

// 获取所有博客文章
export function getAllPosts() {
	return posts;
}

// 通过 slug 获取单篇文章
export function getPostBySlug(slug) {
	return posts.find(post => post.slug === slug);
} 