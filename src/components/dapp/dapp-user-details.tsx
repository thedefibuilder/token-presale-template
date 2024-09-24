"use client";

import { PRESALE_ADDRESS } from "@/dapp-config";
import { PRESALE_ABI } from "@/lib/abi/presale";
import { Tokenomics, UserDetail } from "@/lib/types";
import { publicClinet } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Address, formatUnits } from "viem";

const DappUserDetail = ({
  tokenomics,
  address,
}: {
  tokenomics: Tokenomics;
  address: Address;
}) => {
  const [userDetail, setUserDetail] = useState<UserDetail>();

  useEffect(() => {
    async function fetchUserDetail() {
      const participationInfo = await publicClinet.readContract({
        abi: PRESALE_ABI,
        address: PRESALE_ADDRESS,
        functionName: "participationInfo",
        args: [address],
      });
      const reservedTokens = await publicClinet.readContract({
        abi: PRESALE_ABI,
        address: PRESALE_ADDRESS,
        functionName: "calculateOfferingAmount",
        args: [participationInfo.paidAmount],
      });

      setUserDetail({
        contribution: formatUnits(participationInfo.paidAmount, 18),
        reservedTokens: formatUnits(reservedTokens, 18),
      });
    }

    fetchUserDetail();
  }, [address]);

  return (
    <div>
      <div className="mb-2 flex justify-between">
        <h3 className="text-sm">My Contribution</h3>
        <h3 className="text-sm font-semibold">
          {userDetail?.contribution} ETH
        </h3>
      </div>
      <div className="mb-2 flex justify-between">
        <h3 className="text-sm">My Reserved Tokens</h3>
        <h3 className="text-sm font-semibold">
          {userDetail?.reservedTokens} {tokenomics.symbol}
        </h3>
      </div>
    </div>
  );
};

export default DappUserDetail;
