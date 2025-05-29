import { dev } from '$app/environment';

export interface BlogPost {
	title: string;
	slug: string;
	excerpt: string;
	publishedAt: string;
	author: string;
	tags: string[];
	featured: boolean;
}

// Get all blog post files
const allPostFiles = import.meta.glob('$lib/posts/*.md');

// Parse frontmatter and extract metadata only
const parsePostMetadata = async (filename: string, module: any): Promise<BlogPost> => {
	const postModule = await module();
	const { metadata } = postModule;
	
	// Extract slug from filename if not provided in frontmatter
	const slug = metadata.slug || filename.split('/').pop()?.replace('.md', '') || '';
	
	return {
		title: metadata.title || 'Untitled',
		slug,
		excerpt: metadata.excerpt || '',
		publishedAt: metadata.publishedAt || new Date().toISOString().split('T')[0],
		author: metadata.author || 'Anonymous',
		tags: metadata.tags || [],
		featured: metadata.featured || false
	};
};

// Get all posts metadata only
export const getAllPosts = async (): Promise<BlogPost[]> => {
	const posts: BlogPost[] = [];
	
	for (const [filename, module] of Object.entries(allPostFiles)) {
		try {
			const post = await parsePostMetadata(filename, module);
			// Only include posts with valid publish dates
			if (post.publishedAt && new Date(post.publishedAt) <= new Date()) {
				posts.push(post);
			}
		} catch (error) {
			if (dev) {
				console.error(`Error loading post ${filename}:`, error);
			}
		}
	}
	
	// Sort by publication date (newest first)
	return posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());
};

// Get a single post metadata by slug
export const getPostBySlug = async (slug: string): Promise<BlogPost | null> => {
	const posts = await getAllPosts();
	return posts.find(post => post.slug === slug) || null;
};

// Get featured posts metadata only
export const getFeaturedPosts = async (): Promise<BlogPost[]> => {
	const posts = await getAllPosts();
	return posts.filter(post => post.featured);
};

// Get posts by tag metadata only
export const getPostsByTag = async (tag: string): Promise<BlogPost[]> => {
	const posts = await getAllPosts();
	return posts.filter(post => post.tags.includes(tag));
};

// Get all unique tags
export const getAllTags = async (): Promise<string[]> => {
	const posts = await getAllPosts();
	const tagSet = new Set<string>();
	
	posts.forEach(post => {
		post.tags.forEach(tag => tagSet.add(tag));
	});
	
	return Array.from(tagSet).sort();
}; 