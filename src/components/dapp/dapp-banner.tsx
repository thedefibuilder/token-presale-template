import React from "react";

import Image from "next/image";

export default function DappBanner() {
  return (
    <div className="border border-border rounded-[16px] bg-background">
      <div className="p-6 md:p-2">
        <Image
          src="/image_1.avif"
          alt="dApp Banner"
          width={678}
          height={283}
          className="h-full w-full rounded-[16px]"
        />
      </div>
    </div>
  );
}
