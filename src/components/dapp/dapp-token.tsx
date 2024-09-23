import React from "react";

import type { TThemeColors, ESocialNames } from "@/lib/dapp-config";

import { Col, Row } from "@/components/grid";
import DappBanner from "@/components/dapp/dapp-banner";
import DappCard from "@/components/dapp/dapp-card";
import DappHeader from "@/components/dapp/dapp-header";
import { LaunchpadTabs } from "@/components/dapp/dapp-tab";

export type TDappTokenProps = {
  colors?: TThemeColors;
  fontFamily?: string;
  projectName?: string;
  socials?: Partial<Record<ESocialNames, string>>;
};

export default function DappTokenPage({
  colors,
  fontFamily,
  projectName,
  socials,
}: TDappTokenProps) {
  const targetDate = new Date("2024-12-31T23:59:59");

  return (
    <>
      <Row>
        <Col>
          <DappHeader
            projectName={projectName}
            fonts={fontFamily}
            socials={socials}
          />
        </Col>
      </Row>
      <Row className="flex lg:hidden">
        <Col>
          <div className="h-8" />
          <DappBanner colors={colors} fontFamily={fontFamily} />
        </Col>
      </Row>
      <div className="h-6 lg:h-8" />
      <Row>
        <Col lg={8} md={6}>
          <div className="hidden lg:block">
            <DappBanner colors={colors} fontFamily={fontFamily} />
          </div>
          <div className="lg:h-8" />
          <LaunchpadTabs colors={colors} fontFamily={fontFamily} />
          <div className="h-6 md:h-8" />
        </Col>
        <Col lg={4} md={6}>
          <DappCard
            targetDate={targetDate}
            colors={colors}
            fonts={fontFamily}
          />
        </Col>
      </Row>
      <div className="h-10 sm:h-0" />
    </>
  );
}
