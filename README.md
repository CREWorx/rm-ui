# RM-UI: Next.js Dashboard with Shadcn/UI

A modern, responsive dashboard interface built with Next.js 14, TypeScript, and Shadcn/UI components.

## Features

- **Responsive Sidebar**
  - Collapsible states (expanded/collapsed)
  - Mobile-friendly with touch support
  - Keyboard shortcut (Cmd/Ctrl + B to toggle)
  - Cookie persistence for sidebar state
  - Tooltip support for collapsed state
  - Multiple variants (sidebar, floating, inset)

- **Modern UI Components**
  - Built with Shadcn/UI
  - Dark mode support
  - Custom color schemes
  - Tailwind CSS styling

- **Technical Stack**
  - Next.js 14.1.0
  - TypeScript
  - Tailwind CSS
  - Shadcn/UI Components
  - Radix UI Primitives

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/CREWorx/rm-ui.git
cd rm-ui
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

- `/src/components/ui/` - UI components including the sidebar
- `/src/hooks/` - Custom React hooks
- `/src/lib/` - Utility functions and shared code
- `/src/app/` - Next.js app router pages and layouts

## Customization

### Sidebar Configuration
The sidebar component supports multiple variants and configurations:
```typescript
<Sidebar
  variant="default" // 'default' | 'floating' | 'inset'
  defaultOpen={true}
  // ... other props
>
  {/* Your sidebar content */}
</Sidebar>
```

### Theme Customization
Colors and themes can be customized in:
- `tailwind.config.js` - Tailwind configuration
- `globals.css` - CSS variables and global styles

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Shadcn/UI](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)
