"use client";

import React from "react";

import type { PropsWithChildren } from "react";

import {
  getDefaultConfig,
  getDefaultWallets,
  RainbowKitProvider as Web3RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { ledgerWallet, trustWallet } from "@rainbow-me/rainbowkit/wallets";
import { WagmiProvider as Web3WagmiProvider } from "wagmi";
import { chain, dappName, WALLETCONNECT_PROJECT_ID } from "@/dapp-config";
import {
  QueryClientProvider as TansackQueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
import "@rainbow-me/rainbowkit/styles.css";

const queryClient = new QueryClient();

const { wallets: defaultWallets } = getDefaultWallets();

const wagmiConfig = getDefaultConfig({
  appName: dappName,
  projectId: WALLETCONNECT_PROJECT_ID,
  wallets: [
    ...defaultWallets,
    {
      groupName: "More",
      wallets: [trustWallet, ledgerWallet],
    },
  ],
  chains: [chain],
  ssr: true,
});

export function WagmiProvider({ children }: PropsWithChildren) {
  return <Web3WagmiProvider config={wagmiConfig}>{children}</Web3WagmiProvider>;
}

export function RainbowKitProvider({ children }: PropsWithChildren) {
  return <Web3RainbowKitProvider>{children}</Web3RainbowKitProvider>;
}

export default function QueryClientProvider({ children }: PropsWithChildren) {
  return (
    <TansackQueryClientProvider client={queryClient}>
      {children}
    </TansackQueryClientProvider>
  );
}
