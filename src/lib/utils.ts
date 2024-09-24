import { chain } from "@/dapp-config";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { createPublicClient, createWalletClient, custom, http } from "viem";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const publicClinet = createPublicClient({
  transport: http(),
  chain,
  batch: {
    multicall: {
      wait: 1,
    },
  },
});

/**
 * Function to convert a UTC timestamp to a formatted date string.
 *
 * @param timestamp - The UTC timestamp in seconds from the smart contract.
 * @returns The formatted date string.
 */
export function formatTimestamp(date: Date): string {
  // Smart contract timestamp is usually in seconds
  // Use Intl.DateTimeFormat to format the date in a nice way (customize locale as needed)
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZoneName: "short",
  };

  // Format date for a specific locale
  return new Intl.DateTimeFormat("en-US", options).format(date);
}

export function calculatePrice(raiseTarget: bigint, offeringAmount: bigint) {
  return (raiseTarget * 10n ** 18n) / offeringAmount;
}
