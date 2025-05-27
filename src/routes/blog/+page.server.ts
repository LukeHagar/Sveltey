// src/routes/blog/+page.server.ts
import { getAllPosts } from '$lib/blog';

export const load = async () => {
	try {
		const posts = await getAllPosts();
		return { posts };
	} catch (error) {
		console.error('Error loading blog posts:', error);
		return { posts: [], error: 'Failed to load blog posts.' };
	}
};
