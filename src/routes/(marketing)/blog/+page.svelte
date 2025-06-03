<script lang="ts">
    import { Calendar, User, Tag, BookOpen, Star } from '@lucide/svelte';
	import type { PageProps } from './$types';

    let { data }: PageProps = $props();
    
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };
</script>

<div class="container mx-auto py-20 space-y-20">
    <!-- Header -->
    <header class="text-center space-y-4 max-w-3xl mx-auto">
        <div class="flex items-center justify-center gap-2 mb-4">
            <BookOpen class="size-8 text-primary-500" />
            <h1 class="h1">Our <span class="text-primary-500">Blog</span></h1>
        </div>
        <p class="text-2xl opacity-75">
            Insights, tutorials, and updates from our team. Stay up to date with the latest in SaaS development and best practices.
        </p>
    </header>

    {#if data.posts && data.posts.length > 0}
        <hr class="hr max-w-48 mx-auto" />

        <!-- Featured Posts -->
        {@const featuredPosts = data.posts.filter(post => post.featured)}
        {#if featuredPosts.length > 0}
            <section class="space-y-8">
                <div class="flex items-center gap-2">
                    <Star class="size-6 text-primary-500" />
                    <h2 class="h2">Featured Posts</h2>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {#each featuredPosts as post}
                        <a href="/blog/{post.slug}" class="card preset-outlined-primary-500 p-6 md:p-8 space-y-4 hover:scale-105 hover:shadow-2xl transition-all duration-300 group flex flex-col">
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-1 text-sm opacity-75">
                                    <Calendar class="size-4" />
                                    {formatDate(post.publishedAt)}
                                </div>
                            </div>
                            
                            <h3 class="h3 group-hover:text-primary-500 transition-colors">
                                <div class="block">
                                    {post.title}
                                </div>
                            </h3>
                            
                            <p class="opacity-75 grow">{post.excerpt}</p>
                            
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-2">
                                    <User class="size-4 opacity-50" />
                                    <span class="text-sm opacity-75">{post.author}</span>
                                </div>
                                <div class="flex flex-wrap gap-1">
                                    {#each post.tags.slice(0, 2) as tag}
                                        <span class="badge preset-outlined-surface-500 text-xs flex items-center gap-1">
                                            <Tag class="size-3" />
                                            {tag}
                                        </span>
                                    {/each}
                                </div>
                            </div>
                        </a>
                    {/each}
                </div>
            </section>

            <hr class="hr max-w-48 mx-auto" />
        {/if}

        <!-- All Posts -->
        {@const regularPosts = data.posts.filter(post => !post.featured)}
        {#if regularPosts.length > 0}
            <section class="space-y-8">
                <h2 class="h2 text-center">Recent Posts</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {#each regularPosts as post}
                        <a href="/blog/{post.slug}" class="card preset-outlined-primary-500 p-4 md:p-6 space-y-4 hover:scale-105 hover:shadow-2xl transition-all duration-300 group">
                            <div class="flex items-center gap-1 text-sm opacity-75">
                                <Calendar class="size-4" />
                                {formatDate(post.publishedAt)}
                            </div>
                            
                            <h3 class="h4 group-hover:text-primary-500 transition-colors">
                                <div class="block">
                                    {post.title}
                                </div>
                            </h3>
                            
                            <p class="opacity-75 text-sm">{post.excerpt}</p>
                            
                            <div class="space-y-3">
                                <div class="flex items-center gap-2">
                                    <User class="size-4 opacity-50" />
                                    <span class="text-sm opacity-75">{post.author}</span>
                                </div>
                                {#if post.tags.length > 0}
                                    <div class="flex flex-wrap gap-1">
                                        {#each post.tags.slice(0, 3) as tag}
                                            <span class="badge preset-outlined-surface-500 text-xs flex items-center gap-1">
                                                <Tag class="size-3" />
                                                {tag}
                                            </span>
                                        {/each}
                                    </div>
                                {/if}
                            </div>
                        </a>
                    {/each}
                </div>
            </section>
        {/if}
    {:else}
        <div class="card preset-outlined-surface-500 p-8 md:p-12 text-center max-w-2xl mx-auto space-y-4">
            <BookOpen class="size-16 mx-auto text-primary-500 opacity-50" />
            <h2 class="h3">No blog posts yet</h2>
            <p class="opacity-75">
                We're working on some great content for you. Check back soon for insights, tutorials, and updates!
            </p>
        </div>
    {/if}
</div>
