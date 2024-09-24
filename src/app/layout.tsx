import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import QueryClientProvider, {
  RainbowKitProvider,
  WagmiProvider,
} from "@/providers/web3";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Token Presale Template",
  description: "Token Presale Template created using Genezio and DeFi Builder.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider>
          <WagmiProvider>
            <RainbowKitProvider>{children}</RainbowKitProvider>
          </WagmiProvider>
        </QueryClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
