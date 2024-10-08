import React from "react";

import {
  IconBrandDiscord,
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandX,
} from "@tabler/icons-react";
import Image from "next/image";
import { ESocialNames } from "@/dapp-config";

export type TDappHeaderProps = {
  projectName: string;
  socials: Partial<Record<ESocialNames, string>>;
};

const socialIcons: Record<ESocialNames, React.ElementType> = {
  Facebook: IconBrandFacebook,
  X: IconBrandX,
  Discord: IconBrandDiscord,
  Github: IconBrandGithub,
  Telegram: IconBrandTelegram,
  Instagram: IconBrandInstagram,
};

const urlPatterns: Record<string, RegExp> = {
  Facebook: /^https:\/\/(www\.)?facebook\.com\/.+/,
  X: /^https:\/\/(www\.)?(twitter\.com|x\.com)\/.+/,
  Discord: /^https:\/\/(www\.)?discord\.com\/.+/,
  Github: /^https:\/\/(www\.)?github\.com\/.+/,
  Instagram: /^https:\/\/(www\.)?instagram\.com\/.+/,
  Telegram: /^https:\/\/(www\.)?t\.me\/.+/,
};

const isValidUrl = (key: string, url: string): boolean => {
  return urlPatterns[key]?.test(url) ?? false;
};

export default function DappHeader({ projectName, socials }: TDappHeaderProps) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-black">
        <Image
          src="/project-logo.png"
          alt="Project Logo"
          width={44}
          height={44}
        />
      </div>
      <div>
        <h1 className="text-[32px] font-bold">{projectName}</h1>
        <div className="flex items-center gap-3">
          {Object.keys(socials).map((key) => {
            const Icon = socialIcons[key as ESocialNames];
            const url = socials[key as ESocialNames];
            return (
              Icon &&
              url &&
              isValidUrl(key, url) && (
                <a
                  href={url}
                  key={key}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon stroke={2} />
                </a>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}
