import React from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LAUNCHPAD_TABS_INFO } from "@/dapp-config";
import DappTokenomics from "./dapp-tokenomics";
import { Tokenomics } from "@/lib/types";

export function TokenInfoTabs(tokenomics: Tokenomics) {
  return (
    <Tabs
      defaultValue="about"
      className="mb-0 w-full bg-background border border-border rounded-[16px]"
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
      <div className="custom-scrollbar overflow-y-auto lg:h-[300px]">
        <TabsContent className="mt-0 p-4 md:p-8" value="about">
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
          <DappTokenomics {...tokenomics} />
        </TabsContent>
      </div>
    </Tabs>
  );
}
