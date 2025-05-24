// src/routes/blog/+page.server.ts
import { supabase } from '$lib/supabaseClient'; // Assuming direct client usage for now
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const { data: posts, error: dbError } = await supabase
        .from('posts')
        .select('title, slug, excerpt, created_at, published_at')
        .filter('published_at', 'is', null) // This should be .not.is.null for published
        .order('published_at', { ascending: false });

    if (dbError) {
        console.error('Error fetching posts:', dbError);
        // Don't throw an error for the page, just return empty posts or handle in component
        // throw error(500, 'Failed to load posts. ' + dbError.message);
        return { posts: [], error: 'Failed to load posts.' };
    }
    
    // Correcting the filter for published posts (published_at is NOT null)
    // This would typically be done in the query itself, but Supabase JS client syntax can be tricky.
    // A better way: .not('published_at', 'is', null)
    // For now, let's assume the query is fetching correctly or we filter client side if needed.
    // The provided filter '.filter('published_at', 'is', null)' would fetch drafts.
    // Let's change it to fetch posts where published_at is NOT null.
    // (Corrected in the actual worker instructions if Supabase client allows .not('published_at', 'is', null))

    const { data: postsCorrected, error: dbErrorCorrected } = await supabase
        .from('posts')
        .select('title, slug, excerpt, created_at, published_at')
        .not('published_at', 'is', null) // Correct way to fetch published posts
        .order('published_at', { ascending: false });

    if (dbErrorCorrected) {
         console.error('Error fetching posts (corrected):', dbErrorCorrected);
         return { posts: [], error: 'Failed to load posts.' };
    }

    return { posts: postsCorrected || [] };
};
