import type React from "react";
import type { Metadata } from "next";
import { Suspense } from "react";
import "./globals.css";
import { PageTransition } from "@/components/page-transition";
import { NavigationTransition } from "@/components/navigation-transition";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Dancing_Script, Caveat } from "next/font/google";

const dancingScript = Dancing_Script({
    subsets: ["latin"],
    variable: "--font-dancing-script",
    display: "swap",
});

const caveat = Caveat({
    subsets: ["latin"],
    variable: "--font-caveat",
    display: "swap",
});

export const metadata: Metadata = {
    title: "WebOps Agency — Website tối ưu chuyển đổi, nội dung chuẩn SEO.",
    description:
        "WebOps Agency giúp doanh nghiệp xây dựng website hiệu quả, chuẩn SEO, tối ưu chuyển đổi và tự động hóa vận hành — để website thật sự trở thành kênh bán hàng 24/7.",
    generator: "v0.app",
    verification: {
        google: "eIQJGkJQg9MKrc3udIjZzAAS0YcgrPnGeTJ-u5lI-6w",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={`font-sans antialiased ${dancingScript.variable} ${caveat.variable}`}>
                <Suspense fallback={null}>
                    <NavigationTransition />
                    <PageTransition>{children}</PageTransition>
                </Suspense>
                <SpeedInsights />
            </body>
        </html>
    );
}
