<script lang="ts">
    import { toastStore, type ToastSettings } from '@skeletonlabs/skeleton';
    import { onMount } from 'svelte';
    import { page } from '$app/stores';

    onMount(() => {
        const flashMessage = $page.data.flash?.message;
        const flashType = $page.data.flash?.type || 'success'; // Default to success

        if (flashMessage) {
            const t: ToastSettings = {
                message: flashMessage,
                background: flashType === 'error' ? 'variant-filled-error' : 'variant-filled-success',
            };
            toastStore.trigger(t);
        }
    });
</script>

<!-- This component doesn't render anything itself, just triggers toasts -->
