"use client";

import React, { useEffect, useRef } from "react";

import type { TDappTokenProps } from "./dapp-token";

import {
  useAccountModal,
  useChainModal,
  useConnectModal,
} from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

import { Button } from "@/components/ui/button";

export default function DappWalletButton({ colors }: TDappTokenProps) {
  const { isConnecting, isConnected, chain } = useAccount();

  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();
  const { openChainModal } = useChainModal();

  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;
  }, []);

  if (!isConnected) {
    return (
      <Button
        className="mb-4 w-full"
        style={{
          backgroundColor: colors?.primary,
        }}
        onClick={() => {
          openConnectModal?.();
        }}
        disabled={isConnecting}
        type="button"
      >
        {isConnecting ? "Connecting..." : "Connect your wallet"}
      </Button>
    );
  }

  if (isConnected && !chain) {
    return (
      <Button
        className="w-full"
        style={{
          backgroundColor: colors?.primary,
        }}
        onClick={openChainModal}
        type="button"
      >
        Wrong network
      </Button>
    );
  }

  return (
    <div className="flex w-full max-w-5xl flex-col items-center justify-between">
      <Button
        className="mb-4 w-full"
        style={{
          background: colors?.primary,
        }}
        onClick={() => openAccountModal?.()}
        type="button"
      >
        <p>Sign out</p>
      </Button>
    </div>
  );
}
