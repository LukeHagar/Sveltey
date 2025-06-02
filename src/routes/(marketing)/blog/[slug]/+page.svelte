<script lang="ts">
    import { Calendar, User, Tag, Share2, ArrowLeft, Star, Twitter, Linkedin } from '@lucide/svelte';

    let { data } = $props();

    let post = $derived(data.post);
    
    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };
</script>

<div class="container mx-auto py-20 space-y-12 max-w-4xl">
    <!-- Breadcrumb Navigation -->
    <nav class="flex items-center gap-2 text-sm">
        <a href="/" class="hover:text-primary-500 transition-colors">Home</a>
        <span class="opacity-50">/</span>
        <a href="/blog" class="hover:text-primary-500 transition-colors">Blog</a>
        <span class="opacity-50">/</span>
        <span class="opacity-75">{post.title}</span>
    </nav>

    <!-- Article Header -->
    <header class="space-y-8">
        <!-- Featured Badge & Meta Info -->
        <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
                {#if post.featured}
                    <span class="badge preset-filled-primary-500 flex items-center gap-1">
                        <Star class="size-3" />
                        Featured
                    </span>
                {/if}
                <div class="flex items-center gap-1 text-sm opacity-75">
                    <Calendar class="size-4" />
                    {formatDate(post.publishedAt)}
                </div>
            </div>
            
            <!-- Back to Blog -->
            <a href="/blog" class="btn preset-outlined-surface-200-800 flex items-center gap-2">
                <ArrowLeft class="size-4" />
                <span>Back to Blog</span>
            </a>
        </div>

        <!-- Title and Excerpt -->
        <div class="space-y-4">
            <h1 class="h1">{post.title}</h1>
            <p class="text-xl opacity-75 leading-relaxed">{post.excerpt}</p>
        </div>

        <!-- Author and Tags -->
        <div class="card preset-outlined-primary-500 p-6 space-y-4">
            <div class="flex flex-wrap items-center justify-between gap-4">
                <div class="flex items-center gap-2">
                    <User class="size-5 text-primary-500" />
                    <span class="font-medium">{post.author}</span>
                </div>
                
                <!-- Share Buttons -->
                <div class="flex items-center gap-2">
                    <Share2 class="size-4 opacity-50" />
                    <span class="text-sm opacity-75 mr-2">Share:</span>
                    <a 
                        href="https://twitter.com/intent/tweet?text={encodeURIComponent(post.title)}&url={encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}"
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="btn btn-sm preset-outlined-secondary-500"
                        title="Share on Twitter"
                    >
                        <Twitter class="size-4" />
                    </a>
                    <a 
                        href="https://www.linkedin.com/sharing/share-offsite/?url={encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}"
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="btn btn-sm preset-outlined-secondary-500"
                        title="Share on LinkedIn"
                    >
                        <Linkedin class="size-4" />
                    </a>
                </div>
            </div>
            
            {#if post.tags.length > 0}
                <div class="flex items-center gap-2 flex-wrap">
                    <Tag class="size-4 text-primary-500" />
                    <span class="text-sm font-medium">Tags:</span>
                    {#each post.tags as tag}
                        <span class="badge preset-outlined-tertiary-500 text-xs flex items-center gap-1">
                            {tag}
                        </span>
                    {/each}
                </div>
            {/if}
        </div>
    </header>

    <hr class="hr bg-primary-500" />

    <!-- Article Content -->
    <article class="prose dark:prose-invert prose-lg max-w-none">
        <div class="prose dark:prose-invert prose-lg max-w-none prose-headings:text-primary-500 prose-links:text-primary-500 prose-code:text-primary-500">
            {@html post.content.html}
        </div>
    </article>

    <hr class="hr" />

    <!-- Article Footer -->
    <footer class="space-y-8">
        <!-- Navigation -->
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4">
            <a href="/blog" class="btn preset-filled-primary-500 flex items-center gap-2">
                <ArrowLeft class="size-4" />
                <span>More Articles</span>
            </a>
            
            <!-- Share Section (Repeated for convenience) -->
            <div class="flex items-center gap-2">
                <span class="text-sm font-medium opacity-75">Share this article:</span>
                <a 
                    href="https://twitter.com/intent/tweet?text={encodeURIComponent(post.title)}&url={encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}"
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="btn btn-sm preset-outlined-surface-200-800"
                >
                    <Twitter class="size-4" />
                    <span>Twitter</span>
                </a>
                <a 
                    href="https://www.linkedin.com/sharing/share-offsite/?url={encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}"
                    target="_blank" 
                    rel="noopener noreferrer"
                    class="btn btn-sm preset-outlined-surface-200-800"
                >
                    <Linkedin class="size-4" />
                    <span>LinkedIn</span>
                </a>
            </div>
        </div>

        <!-- Call to Action -->
        <div class="card preset-outlined-primary-500 p-8 text-center space-y-4">
            <h3 class="h3 text-primary-500">Ready to get started?</h3>
            <p class="opacity-75">
                Start building your SaaS with our comprehensive template and join thousands of developers.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/auth/signup" class="btn preset-filled-primary-500">
                    Get Started Free
                </a>
                <a href="/pricing" class="btn preset-outlined-surface-200-800">
                    View Pricing
                </a>
            </div>
        </div>
    </footer>
</div>