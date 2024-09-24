"use client";

import React, { useEffect, useRef } from "react";

import { useChainModal, useConnectModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { useToast } from "@/hooks/use-toast";
import { Form } from "../ui/form";

export default function DappButton() {
  const { isConnecting, isConnected, chain } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { openChainModal } = useChainModal();
  const isMounted = useRef(false);
  const { toast } = useToast();
  const form = useForm<{ input: string }>();

  useEffect(() => {
    isMounted.current = true;
  }, []);

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
      <Button className="w-full" onClick={openChainModal} type="button">
        Wrong network
      </Button>
    );
  }

  async function onSubmit({ input }: { input: string }) {
    try {
      throw Error("HAHAH");
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
        <Button type="button" variant="outline" className="h-6 rounded-[16px]">
          Max
        </Button>
        <Button type="submit" variant="default" className="h-6 rounded-[16px]">
          Buy
        </Button>
      </form>
    </Form>
  );
}
