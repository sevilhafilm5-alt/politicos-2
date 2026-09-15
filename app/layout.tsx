import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Plano de Comunicação Regional",
  description: "Proposta informativa de alcance, estratégia regional, investimento e controle de dados.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
