# 🚀 Sveltey - SvelteKit SaaS Template

![Sveltey SaaS Template](https://github.com/user-attachments/assets/5dc91129-ebc7-4458-98b6-1862c6de4428)

A modern, production-ready SaaS template built with SvelteKit 2, Svelte 5, Supabase, and Skeleton UI. Get your SaaS project up and running in hours, not months.

## ✨ Features

### 🔐 Authentication & User Management
- **Supabase Auth Integration**: Complete authentication flow with email/password and OAuth providers
- **Protected Routes**: Automatic route protection and session management
- **User Profiles**: Customizable user profile management
- **Password Reset**: Secure password reset functionality

### 🎨 Modern UI/UX
- **Skeleton UI**: Beautiful, accessible components out of the box
- **Dark/Light Mode**: Built-in mode switching
- **Comprehensive Themes**: 22 beautiful handmade themes
- **Responsive Design**: Mobile-first, responsive layouts
- **Loading States**: Elegant loading indicators and transitions
- **Toast Notifications**: User-friendly feedback system

### 📊 Dashboard & Analytics
- **Admin Dashboard**: Clean, intuitive admin interface
- **User Analytics**: Basic user metrics and insights
- **Real-time Updates**: Live data updates using Supabase real-time
- **Data Visualization**: Charts and graphs for key metrics

### 📝 Content Management
- **Blog System**: Built-in blog with markdown support
- **SEO Optimized**: Meta tags, Open Graph, and structured data

<!-- ### 💳 Payments & Subscriptions
- **Stripe Integration**: Ready-to-use payment processing
- **Subscription Plans**: Flexible pricing tiers
- **Billing Management**: Customer billing portal
- **Webhook Handling**: Secure webhook processing -->

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/sveltey.git
cd sveltey

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your Supabase and Stripe keys

# Start the development server
npm run dev
```

Visit `http://localhost:5173` and start building your SaaS!

## 📦 Tech Stack

- **Framework**: SvelteKit 2 with Svelte 5
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **UI Components**: Skeleton UI
- **Styling**: Tailwind CSS
<!-- - **Payments**: Stripe -->
- **Deployment**: Vercel/Netlify ready
- **Language**: TypeScript

## 📁 Project Structure

```
src/
├── lib/
│   ├── components/     # Reusable UI components
│   ├── stores/         # Svelte stores for state management
│   ├── utils/          # Utility functions
│   └── types/          # TypeScript type definitions
├── routes/
│   ├── (app)/          # App routes
|   |   ├── api         # API routes, security is handled at the endpoint level
|   |   ├── app         # App routes, security is handeled globally, all sub-routes are protected
|   |   └── auth        # Auth routes, used for login, logout, and password reset functionality
│   └── (marketing)/    # Public marketing pages
|       ├── blog        # API routes, security is handled at the endpoint level
|       ├── contact     # Contact page
|       ├── pricing     # Pricing page
|       ├── privacy     # Privacy policy page
|       └── terms       # Terms of service page
├── app.html            # App shell
├── app.css             # Global styles
└── hooks.server.ts     # Server hooks
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Supabase
PUBLIC_SUPABASE_URL=your_supabase_url
PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key

# Stripe // coming soon
PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key
STRIPE_SECRET_KEY=your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=your_webhook_secret

```

### Supabase Setup

1. Create a new Supabase project
2. Copy the project URL and anon key
3. Run the included SQL migrations
4. Set up your authentication providers

### Stripe Setup

1. Create a Stripe account
2. Copy your API keys
3. Configure your products and pricing
4. Set up webhooks for subscription events

## 🎯 Customization

### Branding
- Update `app.html` for favicon and meta tags
- Modify `src/lib/config.ts` for app configuration
- Customize colors in with a [custom Skeleton UI theme](https://www.skeleton.dev/docs/design/themes#custom-themes)
- Replace logo

### Components
- All components are in `src/lib/components/`
- Skeleton UI provides the base component library
- Easy to theme and customize with CSS variables

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Issues**: Report bugs or request features via [GitHub Issues](../../issues)

## 🙏 Acknowledgments

- [SvelteKit](https://kit.svelte.dev/) - The amazing web framework
- [Supabase](https://supabase.com/) - Backend as a Service
- [Skeleton UI](https://skeleton.dev/) - UI component library
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Stripe](https://stripe.com/) - Payment processing

---

*Ready to launch your SaaS? Get started with Sveltey today!*
