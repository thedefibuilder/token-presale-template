'use client';

import React, { useState } from 'react';

import type { TDappTokenProps } from './dapp-token';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { LAUNCHPAD_TABS_INFO, TOKENOMICS } from '@/lib/dapp-config';
import { cn } from '@/lib/utils';

export function LaunchpadTabs({ colors, fontFamily }: TDappTokenProps) {
  const [activeTab, setActiveTab] = useState('about-project');

  return (
    <Tabs
      defaultValue='about-project'
      className='mb-0 w-full bg-none'
      style={{ border: `1px solid ${colors?.primary}`, borderRadius: '16px' }}
    >
      <TabsList
        className='relative z-30 h-12 w-full rounded-none '
        style={{
          backgroundColor: ` ${colors?.background}`,
          borderTopLeftRadius: '18px',
          borderTopRightRadius: '18px'
        }}
      >
        {['about-project', 'roadmap', 'tokenomics'].map((tab, index) => (
          <TabsTrigger
            key={tab}
            onClick={() => setActiveTab(tab)}
            value={tab}
            className='w-full !bg-transparent p-0'
            style={{
              borderRight: index < 2 ? `1px solid ${colors?.muted}` : 'none',
              borderRadius: 0
            }}
          >
            <span
              className={cn(
                'flex h-full w-full items-center justify-center py-[13px] uppercase lg:p-[13px] md:px-[7px] md:py-[10px]'
              )}
              style={{
                borderBottom: activeTab === tab ? `2px solid ${colors?.primary}` : 'none',
                fontFamily
              }}
            >
              {tab.replace('-', ' ')}
            </span>
          </TabsTrigger>
        ))}
      </TabsList>
      <div
        className='custom-scrollbar overflow-y-auto lg:h-[185px]'
        style={{ borderBottomLeftRadius: '16px', borderBottomRightRadius: '16px' }}
      >
        <TabsContent className='mt-0 w-full p-4 md:p-8' value='about-project'>
          <p
            style={{
              fontFamily
            }}
          >
            {LAUNCHPAD_TABS_INFO.aboutProject}
          </p>
        </TabsContent>
        <TabsContent className='mt-0 p-4 md:p-8' value='roadmap'>
          {LAUNCHPAD_TABS_INFO.roadmap.map((roadmap) => (
            <div key={roadmap.title}>
              <h1 className='font-bold' style={{ fontFamily }}>
                {roadmap.title}
              </h1>
              <div className='h-2' />
              <p style={{ fontFamily }}>{roadmap.description}</p>
              <div className='h-2' />
            </div>
          ))}
        </TabsContent>
        <TabsContent className='mt-0 p-4 md:p-8' value='tokenomics'>
          <div>
            <div className='h-2' />
            <div className='flex w-full flex-col justify-between gap-12 lg:flex-row'>
              <div className='launchpad-tabs-column lg:w-1/2'>
                <div className='mb-2 flex items-center justify-between gap-3'>
                  <span className='mr-4' style={{ color: colors?.muted, fontFamily }}>
                    Token Address:
                  </span>
                  <span>{TOKENOMICS.tokenAddress}</span>
                </div>
                <div className='mb-2 flex items-center justify-between gap-3'>
                  <span className='mr-4' style={{ color: colors?.muted, fontFamily }}>
                    Token Name:
                  </span>
                  <span>{TOKENOMICS.tokenName}</span>
                </div>
                <div className='mb-2 flex items-center justify-between gap-3'>
                  <span className='mr-4' style={{ color: colors?.muted, fontFamily }}>
                    Total Supply:
                  </span>
                  <span>{TOKENOMICS.totalSupply}</span>
                </div>
                <div className='mb-2 flex items-center justify-between gap-3'>
                  <span className='mr-4' style={{ color: colors?.muted, fontFamily }}>
                    Token in IDO:
                  </span>
                  <span>{TOKENOMICS.tokensInIDO}</span>
                </div>
                <div className='mb-2 flex items-center justify-between gap-3'>
                  <span className='mr-4' style={{ color: colors?.muted, fontFamily }}>
                    Token initial price:
                  </span>
                  <span>{TOKENOMICS.tokenInitialPrice}</span>
                </div>
              </div>
              <div className='launchpad-tabs-column lg:w-1/2'>
                <div className='mb-2 flex items-center justify-between gap-3'>
                  <span className='mr-4' style={{ color: colors?.muted, fontFamily }}>
                    IDO Method:
                  </span>
                  <span style={{ fontFamily }}>{TOKENOMICS.idoMethod}</span>
                </div>
                <div className='mb-2 flex items-center justify-between gap-3'>
                  <span className='mr-4' style={{ color: colors?.muted, fontFamily }}>
                    Locked in Liquidity:
                  </span>
                  <span style={{ fontFamily }}>{TOKENOMICS.lockedInLiquidity}</span>
                </div>
                <div className='mb-2 flex items-center justify-between gap-3'>
                  <span className='mr-4' style={{ color: colors?.muted, fontFamily }}>
                    Burned Raised TKN:
                  </span>
                  <span style={{ fontFamily }}>{TOKENOMICS.burnedRaisedTKN}</span>
                </div>
                <div className='mb-2 flex items-center justify-between gap-3'>
                  <span className='mr-4' style={{ color: colors?.muted, fontFamily }}>
                    Team Vesting Schedule:
                  </span>
                  <span style={{ fontFamily }}>{TOKENOMICS.teamVestingSchedule}</span>
                </div>
                <div className='mb-2 flex items-center justify-between gap-3'>
                  <span className='mr-4' style={{ color: colors?.muted, fontFamily }}>
                    Raising FEES:
                  </span>
                  <span style={{ fontFamily }}>{TOKENOMICS.raisingFees}</span>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </div>
    </Tabs>
  );
}
