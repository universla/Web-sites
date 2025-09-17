// app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import DiscordGitHubButtons from "@/components/DiscordGitHubButtons";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "external code",
  description: "Plataforma para subir, gestionar y compartir código con tu comunidad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          <Header />
          <main className="container mx-auto px-4 py-8">
            {children}
          </main>
          <footer className="mt-16 py-6 bg-gray-100 text-center text-sm text-gray-600">
            <DiscordGitHubButtons />
            <p className="mt-4">© {new Date().getFullYear()} My Code Web. Todos los derechos reservados.</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
