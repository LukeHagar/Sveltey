<script lang="ts">
    import type { PageData } from './$types';
    import { Avatar } from '@skeletonlabs/skeleton'; // Assuming you might want author avatars later

    export let data: PageData;
    $: post = data.post;
</script>

<div class="container mx-auto p-8">
    <article class="prose dark:prose-invert max-w-none">
        <header class="mb-8">
            <h1 class="h1 mb-2">{post.title}</h1>
            <p class="text-lg text-surface-500">
                Published on {new Date(post.published_at || post.created_at).toLocaleDateString()}
            </p>
            {#if post.author_id}
                <!-- Placeholder for author info, would require joining with an authors/profiles table -->
                <!-- <div class="flex items-center space-x-2 mt-4">
                    <Avatar initials="AU" width="w-8" /> 
                    <span>Author Name</span>
                </div> -->
            {/if}
        </header>

        <div class="mb-8">
            <!-- Render simple text content. For Markdown/HTML, you'd use a renderer -->
            {@html post.content || '<p>Content not available.</p>'}
        </div>
        
        <div class="text-center mt-8 p-4 bg-surface-100 dark:bg-surface-800 rounded">
            <h3 class="h5">Database Note:</h3>
             <p class="text-sm">This page displays content from the <code>content</code> column of the <code>posts</code> table for the slug: <strong>{post.slug}</strong>. For rich text, ensure your <code>content</code> is stored as HTML or use a Markdown parser in Svelte.</p>
        </div>

        <div class="mt-12 text-center">
            <a href="/blog" class="btn variant-outline-primary">&larr; Back to Blog</a>
        </div>
    </article>
</div>
