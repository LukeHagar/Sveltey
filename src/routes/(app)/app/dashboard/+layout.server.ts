// src/routes/dashboard/+layout.server.ts
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async ({ locals: { safeGetSession } }) => {
    // The session and authentication check is already handled in hooks.server.ts
    // This will only run if the user is authenticated due to the authGuard hook
    const { session, user } = await safeGetSession();
    
    return {
        session,
        user
    };
};
