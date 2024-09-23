import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LAUNCHPAD_TABS_INFO, TOKENOMICS } from "@/dapp-config";

export function TokenInfoTabs() {
  return (
    <Tabs
      defaultValue="about"
      className="mb-0 w-full bg-none border border-border rounded-[16px]"
    >
      <TabsList className="relative z-30 h-12 w-full rounded-[16px]">
        {["about", "roadmap", "tokenomics"].map((tab, index) => (
          <TabsTrigger
            key={tab}
            value={tab}
            className="w-full rounded-[16px] p-0"
          >
            <span className="flex h-full w-full items-center justify-center py-[13px] uppercase lg:p-[13px] md:px-[7px] md:py-[10px]">
              {tab.replace("-", " ")}
            </span>
          </TabsTrigger>
        ))}
      </TabsList>
      <div className="custom-scrollbar overflow-y-auto lg:h-[250px]">
        <TabsContent className="mt-0 w-full p-4 md:p-8" value="about">
          <p>{LAUNCHPAD_TABS_INFO.aboutProject}</p>
        </TabsContent>
        <TabsContent className="mt-0 p-4 md:p-8" value="roadmap">
          {LAUNCHPAD_TABS_INFO.roadmap.map((roadmap) => (
            <div key={roadmap.title}>
              <h1 className="font-bold">{roadmap.title}</h1>
              <div className="h-2" />
              <p>{roadmap.description}</p>
              <div className="h-2" />
            </div>
          ))}
        </TabsContent>
        <TabsContent className="mt-0 p-4 md:p-8" value="tokenomics">
          <div>
            <div className="h-2" />
            <div className="flex w-full flex-col justify-between gap-12 lg:flex-row">
              <div className="launchpad-tabs-column lg:w-1/2">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="mr-4">Token Address:</span>
                  <span>{TOKENOMICS.tokenAddress}</span>
                </div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="mr-4">Token Name:</span>
                  <span>{TOKENOMICS.tokenName}</span>
                </div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="mr-4">Total Supply:</span>
                  <span>{TOKENOMICS.totalSupply}</span>
                </div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="mr-4">Token in IDO:</span>
                  <span>{TOKENOMICS.tokensInIDO}</span>
                </div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="mr-4">Token initial price:</span>
                  <span>{TOKENOMICS.tokenInitialPrice}</span>
                </div>
              </div>
              <div className="launchpad-tabs-column lg:w-1/2">
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="mr-4">IDO Method:</span>
                  <span>{TOKENOMICS.idoMethod}</span>
                </div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="mr-4">Locked in Liquidity:</span>
                  <span>{TOKENOMICS.lockedInLiquidity}</span>
                </div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="mr-4">Burned Raised TKN:</span>
                  <span>{TOKENOMICS.burnedRaisedTKN}</span>
                </div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="mr-4">Team Vesting Schedule:</span>
                  <span>{TOKENOMICS.teamVestingSchedule}</span>
                </div>
                <div className="mb-2 flex items-center justify-between gap-3">
                  <span className="mr-4">Raising FEES:</span>
                  <span>{TOKENOMICS.raisingFees}</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
}
