// src/routes/blog/[slug]/+page.server.ts
import { supabase } from '$lib/supabaseClient';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
    const { slug } = params;

    const { data: post, error: dbError } = await supabase
        .from('posts')
        .select('*') // Select all columns for the single post view
        .eq('slug', slug)
        .not('published_at', 'is', null) // Ensure it's a published post
        .single();

    if (dbError || !post) {
        console.error(`Error fetching post with slug "${slug}":`, dbError);
        throw error(404, `Post not found or not published: ${slug}. Ensure a 'posts' table exists and the slug is correct.`);
    }

    return { post };
};
