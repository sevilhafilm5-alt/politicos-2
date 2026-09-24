import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://politic.vwadigitalservices.com.br"),
  title: "Plano de comunicação para Felipe Camozzato | VWA Digital Services",
  description: "Proposta estratégica de comunicação em escala para Felipe Camozzato: alcance estadual, segmentação por pauta, métricas ao vivo e controle completo da operação.",
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Felipe Camozzato",
    "comunicação política",
    "Rio Grande do Sul",
    "campanha digital",
    "VWA Digital Services",
  ],
  authors: [{ name: "VWA Digital Services" }],
  creator: "VWA Digital Services",
  publisher: "VWA Digital Services",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: "VWA Digital Services",
    title: "Uma operação de comunicação à altura do mandato de Felipe Camozzato",
    description: "Alcance estadual, mensagens segmentadas por pauta, métricas ao vivo e uma operação completa para transformar atuação em relacionamento.",
    images: [{
      url: "/felipe-camozzato-og.jpg",
      width: 1200,
      height: 630,
      alt: "Felipe Camozzato na tribuna da Assembleia Legislativa do Rio Grande do Sul",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Plano de comunicação para Felipe Camozzato",
    description: "Uma proposta de alcance estadual, segmentação, métricas ao vivo e controle completo da operação.",
    images: ["/felipe-camozzato-og.jpg"],
  },
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
