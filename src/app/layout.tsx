import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { cookies } from "next/headers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Modern dashboard with collapsible sidebar",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value !== "false";

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="relative flex min-h-screen">
          <SidebarProvider defaultOpen={defaultOpen}>
            <div className="relative group">
              <AppSidebar />
            </div>
            <main className="flex-1 overflow-y-auto">
              <div className="sticky top-0 z-40 flex h-16 items-center border-b bg-background px-4">
                <div className="flex items-center gap-8">
                  <SidebarTrigger className="hover:bg-accent hover:text-accent-foreground" />
                  <h1 className="text-lg font-semibold">App</h1>
                </div>
              </div>
              <div className="container mx-auto p-6">
                {children}
              </div>
            </main>
          </SidebarProvider>
        </div>
      </body>
    </html>
  );
}
