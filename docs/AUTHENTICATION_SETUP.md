# SvelteKit Supabase Authentication Setup

This project uses Supabase for authentication with full server-side rendering (SSR) support through SvelteKit hooks.

## Features

- ✅ Email/Password authentication
- ✅ GitHub OAuth integration  
- ✅ Server-side authentication with `hooks.server.ts`
- ✅ Protected routes with automatic redirects
- ✅ Session management across client and server
- ✅ TypeScript support with proper types

## Setup Instructions

### 1. Environment Variables

Create a `.env.local` file in your project root:

```bash
PUBLIC_SUPABASE_URL=your_supabase_project_url
PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Get these values from your Supabase project dashboard under Settings > API.

### 2. Supabase Configuration

#### Enable GitHub OAuth Provider

1. Go to your Supabase project dashboard
2. Navigate to **Authentication > Providers**
3. Enable the **GitHub** provider
4. Add your GitHub OAuth credentials:
   - **Client ID**: From your GitHub OAuth app
   - **Client Secret**: From your GitHub OAuth app

#### GitHub OAuth App Setup

1. Go to GitHub Settings > Developer settings > OAuth Apps
2. Click "New OAuth App"
3. Fill in the details:
   - **Application name**: Your app name
   - **Homepage URL**: `http://localhost:5173` (for development)
   - **Authorization callback URL**: `https://your-project-ref.supabase.co/auth/v1/callback`
4. Note the Client ID and Client Secret for Supabase configuration

### 3. Supabase Authentication Settings

In your Supabase project settings:

1. Go to **Authentication > Settings**
2. Add your site URLs:
   - **Site URL**: `http://localhost:5173` (development) / `https://yourdomain.com` (production)
   - **Redirect URLs**: Add both your local and production URLs

## Architecture Overview

### Server-Side Authentication (`hooks.server.ts`)

The authentication is handled through SvelteKit hooks:

```typescript
// src/hooks.server.ts
export const handle: Handle = sequence(supabase, authGuard);
```

#### Features:
- **`supabase` hook**: Creates server-side Supabase client with cookie management
- **`authGuard` hook**: Protects routes and handles redirects
- **Session validation**: Validates JWTs on every request
- **Cookie management**: Automatic token refresh and cookie handling

### Protected Routes

Routes are automatically protected based on path patterns:

- **`/dashboard/*`**: Requires authentication, redirects to `/auth/login` if not authenticated
- **`/auth/*`**: Redirects authenticated users to `/dashboard`

### Client-Side Integration (`+layout.svelte`)

The root layout handles client-side authentication state:

```typescript
// Syncs server-side session with client-side
$effect(() => {
    session = data.session;
});

// Handles auth state changes
supabase.auth.onAuthStateChange((event, newSession) => {
    if (newSession?.expires_at !== session?.expires_at) {
        invalidateAll();
    }
});
```

## File Structure

```
src/
├── hooks.server.ts              # Server-side authentication hooks
├── app.d.ts                     # TypeScript definitions for Supabase
├── lib/
│   ├── index.ts                # Exports (toaster)
│   └── supabaseClient.ts       # Browser Supabase client
├── routes/
│   ├── +layout.svelte          # Root layout with auth state
│   ├── +layout.server.ts       # Server layout with session data
│   ├── auth/
│   │   ├── login/+page.svelte  # Login page with GitHub OAuth
│   │   ├── signup/+page.svelte # Signup page with GitHub OAuth  
│   │   └── logout/+page.server.ts # Logout action
│   └── dashboard/
│       ├── +layout.server.ts   # Dashboard layout (protected)
│       └── +page.svelte        # Dashboard page
```

## Usage Examples

### Login Page Features

- Email/password authentication
- GitHub OAuth login
- Form validation and error handling
- Loading states
- Automatic redirect after login

### Signup Page Features  

- Email/password registration
- GitHub OAuth signup
- Email confirmation handling
- Error handling with toast notifications

### Dashboard Protection

The dashboard is automatically protected and will:
- Redirect unauthenticated users to login
- Display user information for authenticated users
- Handle session expiration gracefully

## TypeScript Support

Full TypeScript support with proper types:

```typescript
// app.d.ts
interface Locals {
    supabase: SupabaseClient;
    safeGetSession(): Promise<{ session: Session | null; user: User | null }>;
    session: Session | null;
    user: User | null;
}
```

## Development

1. Start your development server:
```bash
npm run dev
```

2. Test authentication:
   - Visit `/auth/signup` to create an account
   - Try GitHub OAuth login
   - Visit `/dashboard` to see protected content
   - Test logout functionality

## Security Features

- **JWT validation**: Server-side validation of authentication tokens
- **Automatic refresh**: Tokens are refreshed automatically
- **Secure cookies**: HTTP-only cookies for session management  
- **Route protection**: Server-side route guards
- **CSRF protection**: Built into Supabase auth flow

## Troubleshooting

### Common Issues

1. **"Cannot redirect during render"**: Usually caused by trying to redirect in a `load` function without throwing the redirect
2. **OAuth callback errors**: Check your GitHub OAuth app callback URL matches Supabase settings
3. **Session not persisting**: Ensure cookies are configured correctly in `hooks.server.ts`

### Debug Tips

- Check browser Network tab for auth requests
- Verify Supabase project settings match your configuration
- Test OAuth flow in incognito mode to avoid cached sessions 