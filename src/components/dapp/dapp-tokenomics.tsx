"use client";
import React, { useEffect, useState } from "react";

import {
  chain,
  PRESALE_ADDRESS,
  TOKEN_ADDRESS,
  TOKENOMICS,
} from "@/dapp-config";
import { PRESALE_ABI } from "@/lib/abi/presale";
import { formatTimestamp, publicClinet } from "@/lib/utils";
import { Address, formatUnits, getContract } from "viem";
import { Skeleton } from "../ui/skeleton";
import { TOKEN_ABI } from "@/lib/abi/token";
import { IconLink } from "@tabler/icons-react";

type Tokenomics = {
  name: string;
  symbol: string;
  totalSupply: bigint;
  paymentToken: Address;
  startTime: number;
  endTime: number;
  raiseTarget: bigint;
  offeringAmount: bigint;
};

export default function DappTokenomics() {
  const [tokenomics, setTokenomics] = useState<Tokenomics>();

  const tokenContract = getContract({
    abi: TOKEN_ABI,
    address: TOKEN_ADDRESS,
    client: publicClinet,
  });

  const presaleContract = getContract({
    abi: PRESALE_ABI,
    address: PRESALE_ADDRESS,
    client: publicClinet,
  });

  useEffect(() => {
    async function fetchContractData() {
      const name = await tokenContract.read.name();
      const symbol = await tokenContract.read.symbol();
      const totalSupply = await tokenContract.read.totalSupply();
      const paymentToken = await presaleContract.read.paymentToken();
      const startTime = await presaleContract.read.startTime();
      const endTime = await presaleContract.read.endTime();
      const raiseTarget = await presaleContract.read.raiseTarget();
      const offeringAmount = await presaleContract.read.offeringAmount();

      setTokenomics({
        name,
        symbol,
        totalSupply,
        paymentToken,
        startTime,
        endTime,
        raiseTarget,
        offeringAmount,
      });
    }

    fetchContractData();
  }, []);

  function calculatePrice(raiseTarget: bigint, offeringAmount: bigint) {
    return (raiseTarget * 10n ** 18n) / offeringAmount;
  }

  return (
    <div>
      <div className="h-2" />
      {tokenomics ? (
        <div className="flex w-full flex-col justify-between gap-12 lg:flex-row">
          <div className="launchpad-tabs-column lg:w-1/2">
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="mr-4">Token Address:</span>
              <span className="truncate hover:underline">
                <a
                  target="_blank"
                  href={`${chain.blockExplorers.default.url}/address/${TOKEN_ADDRESS}`}
                >
                  {TOKEN_ADDRESS.substring(0, 20)}...
                </a>
              </span>
            </div>
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="mr-4">Token Name:</span>
              <span>{tokenomics.name}</span>
            </div>
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="mr-4">Token Symbol:</span>
              <span>{tokenomics.symbol}</span>
            </div>
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="mr-4">Total Supply:</span>
              <span>
                {formatUnits(tokenomics.totalSupply, 18)} {tokenomics.symbol}
              </span>
            </div>
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="mr-4">Total Tokens at Sale:</span>
              <span>
                {formatUnits(tokenomics.offeringAmount, 18)} {tokenomics.symbol}
              </span>
            </div>
          </div>
          <div className="launchpad-tabs-column lg:w-1/2">
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="mr-4">Presale Address:</span>
              <span className="truncate hover:underline">
                <a
                  target="_blank"
                  href={`${chain.blockExplorers.default.url}/address/${PRESALE_ADDRESS}`}
                >
                  {PRESALE_ADDRESS.substring(0, 20)}...
                </a>
              </span>
            </div>
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="mr-4">Start Time:</span>
              <span>{formatTimestamp(tokenomics.startTime)}</span>
            </div>
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="mr-4">End Time:</span>
              <span>{formatTimestamp(tokenomics.endTime)}</span>
            </div>
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="mr-4">Raise Target:</span>
              <span>{formatUnits(tokenomics.raiseTarget, 18)} ETH</span>
            </div>
            <div className="mb-2 flex items-center justify-between gap-3">
              <span className="mr-4">Token initial price:</span>
              <span>
                {`1 ${tokenomics.symbol} = ${formatUnits(
                  calculatePrice(
                    tokenomics.raiseTarget,
                    tokenomics.offeringAmount
                  ),
                  18
                )} ETH`}
              </span>
            </div>
          </div>
        </div>
      ) : (
        <Skeleton className="h-[200px] rounded-[16px] w-full" />
      )}
    </div>
  );
}
