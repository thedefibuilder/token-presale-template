import React from "react";

import {
  PRESALE_ADDRESS,
  TOKEN_ADDRESS,
  type ESocialNames,
} from "@/dapp-config";

import { Col, Row } from "@/components/grid";
import DappBanner from "@/components/dapp/dapp-banner";
import DappCard from "@/components/dapp/dapp-card";
import DappHeader from "@/components/dapp/dapp-header";
import { TokenInfoTabs } from "@/components/dapp/dapp-tab";
import { PRESALE_ABI } from "@/lib/abi/presale";
import { TOKEN_ABI } from "@/lib/abi/token";
import { calculatePrice, formatTimestamp, publicClinet } from "@/lib/utils";
import { formatUnits, getContract } from "viem";
import { Tokenomics } from "@/lib/types";

export type TDappTokenProps = {
  projectName: string;
  socials: Partial<Record<ESocialNames, string>>;
};

export default async function DappTokenPage({
  projectName,
  socials,
}: TDappTokenProps) {
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

  const name = await tokenContract.read.name();
  const symbol = await tokenContract.read.symbol();
  const totalSupply = await tokenContract.read.totalSupply();
  const paymentToken = await presaleContract.read.paymentToken();
  const startTime = await presaleContract.read.startTime();
  const endTime = await presaleContract.read.endTime();
  const raiseTarget = await presaleContract.read.raiseTarget();
  const offeringAmount = await presaleContract.read.offeringAmount();
  const totalRaised = await presaleContract.read.totalRaised();

  const tokenomics: Tokenomics = {
    name,
    symbol,
    totalSupply: formatUnits(totalSupply, 18),
    paymentToken,
    startTime: new Date(startTime * 1000),
    endTime: new Date(endTime * 1000),
    raiseTarget: formatUnits(raiseTarget, 18),
    offeringAmount: formatUnits(offeringAmount, 18),
    tokenPrice: formatUnits(calculatePrice(raiseTarget, offeringAmount), 18),
    totalRaised: formatUnits(totalRaised, 18),
  };

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
          <TokenInfoTabs {...tokenomics} />
          <div className="h-6 md:h-8" />
        </Col>
        <Col lg={4} md={6}>
          <DappCard {...tokenomics} />
        </Col>
      </Row>
      <div className="h-10 sm:h-0" />
    </div>
  );
}
