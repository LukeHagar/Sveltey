// src/routes/blog/+page.server.ts
import { getAllPosts } from '$lib/blog';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	// Get only metadata for listing (cheap operation)
	return {
		posts: await getAllPosts()
	};
};
