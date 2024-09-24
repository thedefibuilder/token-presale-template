"use client";

import React, { useEffect } from "react";

import { useChainModal, useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount, useBalance, useWriteContract } from "wagmi";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { useToast } from "@/hooks/use-toast";
import { Form } from "../ui/form";
import { formatUnits, parseEther } from "viem";
import { PRESALE_ABI } from "@/lib/abi/presale";
import { PRESALE_ADDRESS } from "@/dapp-config";

export default function DappButton() {
  const { toast } = useToast();
  const { address, isConnecting, isConnected, chain } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { openChainModal } = useChainModal();
  const { data: balance } = useBalance({ address });
  const { error, isSuccess, writeContract: buyWithNative } = useWriteContract();
  const form = useForm<{ input: string }>();

  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive",
      });
    }
  }, [error]);

  useEffect(() => {
    if (isSuccess) {
      toast({
        title: "Success",
        description: "Successfully contributed to the Presale",
      });
    }
  }, [isSuccess]);

  if (!isConnected) {
    return (
      <Button
        className="mb-4 w-full rounded-[16px]"
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
        className="w-full rounded-[16px]"
        onClick={openChainModal}
        type="button"
      >
        Wrong network
      </Button>
    );
  }

  function setMax() {
    if (!balance) return;
    form.setValue("input", formatUnits(balance.value, 18));
  }

  async function onSubmit({ input }: { input: string }) {
    try {
      buyWithNative({
        abi: PRESALE_ABI,
        address: PRESALE_ADDRESS,
        functionName: "buyWithNative",
        value: parseEther(input),
      });
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error ? error.message : "A unknown error occured",
        variant: "destructive",
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center gap-3 border bg-background rounded-[16px] pr-5 w-full"
      >
        <Input
          placeholder={"0.0"}
          className="no-spinner rounded-[16px] border-none"
          {...form.register("input")}
        />
        <Button
          type="button"
          variant="outline"
          className="h-6 rounded-[16px]"
          onClick={setMax}
        >
          Max
        </Button>
        <Button type="submit" variant="default" className="h-6 rounded-[16px]">
          Buy
        </Button>
      </form>
    </Form>
  );
}
