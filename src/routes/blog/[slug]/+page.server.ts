// src/routes/blog/[slug]/+page.server.ts
import { getAllPosts } from '$lib/blog';
import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	// Get only the metadata for the post
	const posts = await getAllPosts();
	const post = posts.find(p => p.slug === params.slug);
	
	if (!post) {
		throw error(404, 'Blog post not found');
	}
	
	return { 
		post,
		slug: params.slug  // Pass the slug so we can load the component client-side
	};
};
