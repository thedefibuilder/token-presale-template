import React from "react";

import type { ESocialNames } from "@/dapp-config";

import { Col, Row } from "@/components/grid";
import DappBanner from "@/components/dapp/dapp-banner";
import DappCard from "@/components/dapp/dapp-card";
import DappHeader from "@/components/dapp/dapp-header";
import { TokenInfoTabs } from "@/components/dapp/dapp-tab";

export type TDappTokenProps = {
  projectName: string;
  socials: Partial<Record<ESocialNames, string>>;
};

export default function DappTokenPage({
  projectName,
  socials,
}: TDappTokenProps) {
  return (
    <div>
      <Row>
        <Col>
          <DappHeader projectName={projectName} socials={socials} />
        </Col>
      </Row>
      <Row className="flex lg:hidden">
        <Col>
          <div className="h-8" />
          <DappBanner />
        </Col>
      </Row>
      <div className="h-6 lg:h-8" />
      <Row>
        <Col lg={8} md={6}>
          <div className="hidden lg:block">
            <DappBanner />
          </div>
          <div className="lg:h-8" />
          <TokenInfoTabs />
          <div className="h-6 md:h-8" />
        </Col>
        <Col lg={4} md={6}>
          <DappCard />
        </Col>
      </Row>
      <div className="h-10 sm:h-0" />
    </div>
  );
}
