<script lang="ts">
    import type { PageData } from './$types';
    export let data: PageData;
</script>

<div class="container mx-auto p-8">
    <h1 class="h1 text-center mb-12">Our Blog</h1>

    {#if data.error}
        <p class="text-center text-error-500">{data.error} Make sure you have a 'posts' table in Supabase with some published entries.</p>
    {/if}

    {#if data.posts && data.posts.length > 0}
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {#each data.posts as post}
                <a href="/blog/{post.slug}" class="card hover:shadow-lg transition-shadow">
                    <header class="card-header">
                        <h2 class="h4">{post.title}</h2>
                    </header>
                    <section class="p-4">
                        <p class="text-sm text-surface-500 mb-2">
                            Published: {new Date(post.published_at || post.created_at).toLocaleDateString()}
                        </p>
                        <p>{post.excerpt || 'Read more...'}</p>
                    </section>
                </a>
            {/each}
        </div>
    {:else if !data.error}
        <p class="text-center text-lg">No blog posts published yet. Check back soon!</p>
    {/if}
     <div class="text-center mt-8 p-4 bg-surface-100 dark:bg-surface-800 rounded">
        <h3 class="h5">Database Note:</h3>
        <p class="text-sm">This page expects a Supabase table named <code>posts</code> with columns like <code>title</code>, <code>slug</code> (unique), <code>excerpt</code>, <code>content</code> (text), and <code>published_at</code> (timestamp with timezone). Only posts with a non-null <code>published_at</code> date are shown here.
        <br/>Example Table Structure:
        <br/><code>id (uuid, pk)</code>, <code>title (text)</code>, <code>slug (text, unique)</code>, <code>content (text)</code>, <code>excerpt (text)</code>, <code>created_at (timestamptz)</code>, <code>updated_at (timestamptz)</code>, <code>author_id (uuid, fk to auth.users)</code>, <code>published_at (timestamptz)</code>.
        </p>
    </div>
</div>
