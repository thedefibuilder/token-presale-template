"use client";

import React, { useEffect, useState } from "react";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { TOKENOMICS } from "@/dapp-config";

import DappWalletButton from "./dapp-wallet-button";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function DappCard() {
  const targetDate = new Date("2024-12-31T23:59:59");

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - Date.now();

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return null;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);
  const progressPercentage = 70;

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);
  return (
    <Card className="w-full border border-border rounded-[16px]">
      <CardContent className="md:p-2 md:px-8  ">
        <div className="h-4" />

        <div className="mx-auto max-w-sm p-2 shadow-lg bg-muted lg:p-6 border border-border rounded-[16px]">
          <h2 className="mb-4 text-xl font-extrabold">Starting In</h2>
          <div className="flex justify-between lg:space-x-4 md:gap-y-2 ">
            {timeLeft && Object.keys(timeLeft).length > 0 ? (
              <>
                <div className="md:mb-3">
                  <span className="text-3xl font-bold">{timeLeft.days}</span>
                  <span className="block text-xs">Days</span>
                </div>
                <div>
                  <span className="text-3xl font-bold">{timeLeft.hours}</span>
                  <span className="block text-xs">Hours</span>
                </div>
                <div className="md:mb-3">
                  <span className="text-3xl font-bold">{timeLeft.minutes}</span>
                  <span className="block text-xs">Minutes</span>
                </div>
                <div>
                  <span className="text-3xl font-bold">{timeLeft.seconds}</span>
                  <span className="block text-xs">Seconds</span>
                </div>
              </>
            ) : (
              <span className="text-4xl font-bold">Time&apos;s up!</span>
            )}
          </div>
        </div>

        {/* PROGRESS */}
        <div className="mx-auto mt-6 max-w-lg rounded-lg shadow-lg">
          <div className="mb-4">
            <div className="flex items-center justify-between">
              <h2 className="text-xs">Progress</h2>
              <span className="text-xs">{progressPercentage}%</span>
            </div>
          </div>
          <div className="mb-4">
            <Progress value={progressPercentage} className="h-4" />
          </div>
          <div className="flex justify-between">
            <span className="text-xs">0.00 USD</span>
            <span className="text-xs">8000.00 USD</span>
          </div>
        </div>

        <hr className="my-4 h-px bg-gray-300" />

        <div>
          <div className="mb-2 flex justify-between">
            <h3 className="text-sm">My Contribution</h3>
            <h3 className="text-sm font-semibold">0 {TOKENOMICS.tokenName}</h3>
          </div>
          <div className="mb-2 flex justify-between">
            <h3 className="text-sm">My Limit Contribution</h3>
            <h3 className="text-sm font-semibold">0 {TOKENOMICS.tokenName}</h3>
          </div>
          <div className="mb-2 flex justify-between">
            <h3 className="text-sm">My Reserved Tokens</h3>
            <h3 className="text-sm font-semibold">0 {TOKENOMICS.tokenName}</h3>
          </div>
          <div className="mb-2 flex justify-between">
            <h3 className="text-sm">Total Contributors</h3>
            <h3 className="text-sm font-semibold">300 Participants</h3>
          </div>
        </div>
      </CardContent>
      <div className="h-5" />

      <CardFooter className="md:pb-0">
        <DappWalletButton />
      </CardFooter>
    </Card>
  );
}
