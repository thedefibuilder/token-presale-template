import React from "react";

import { chain, PRESALE_ADDRESS, TOKEN_ADDRESS } from "@/dapp-config";
import { Tokenomics } from "@/lib/types";
import { formatTimestamp } from "@/lib/utils";

export default function DappTokenomics(tokenomics: Tokenomics) {
  return (
    <div>
      <div className="h-2" />
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
              {tokenomics.totalSupply} {tokenomics.symbol}
            </span>
          </div>
          <div className="mb-2 flex items-center justify-between gap-3">
            <span className="mr-4">Total Tokens at Sale:</span>
            <span>
              {tokenomics.offeringAmount} {tokenomics.symbol}
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
            <span>{tokenomics.raiseTarget} ETH</span>
          </div>
          <div className="mb-2 flex items-center justify-between gap-3">
            <span className="mr-4">Token initial price:</span>
            <span>
              {`1 ${tokenomics.symbol} = ${tokenomics.tokenPrice} ETH`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
