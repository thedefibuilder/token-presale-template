import { Address } from "viem";

export type Tokenomics = {
  name: string;
  symbol: string;
  totalSupply: string;
  paymentToken: Address;
  startTime: Date;
  endTime: Date;
  raiseTarget: string;
  offeringAmount: string;
  tokenPrice: string;
  totalRaised: string;
};
