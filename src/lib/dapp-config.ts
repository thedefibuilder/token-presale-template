import { baseSepolia } from "viem/chains";

export const chain = baseSepolia;
export const dappName = "Token Presale";
export const WALLETCONNECT_PROJECT_ID = "f2f3d7ba6f87a167006e1cd6a57a76b1";

export const COMPANY_DETAILS = {
  name: "CryptoSphere",
  slogan: "The Future of Finance",
  logoLarge: "https://i.imgur.com/0T0HIm0.png",
  logoSmall: "https://i.imgur.com/ujBrC4u.png",
  logoSmallLight: "https://i.imgur.com/y6qTAUt.png",
  logoLargeLight: "https://i.imgur.com/8iWWaMQ.png",
  logoSmallDark: "https://i.imgur.com/ll9GMpP.png",
  logoLargeDark: "https://i.imgur.com/oONaE1m.png",
};

export const COLORS = {
  primary: "#73EAFF",
  primaryBackground: "hsla(189, 35%, 10%, 1)",
  secondaryBackground: "hsla(0, 0%, 16%, 1)",
  secondary: "#4DD3A0",
  textPrimary: "#FFFFFF",
  textSecondary: "#9CA3AFBF",
  componentBackground: "#1A1A1A",
  sectionBackground: "#131313",
  pageColor: "#161616",
  black: "#000000",
  white: "#ffffff",
  progress: "hsla(145, 97%, 63%, 1)",
};

export const TOKENOMICS = {
  tokenName: "CTS",
  tokenAddress: "0x552B0...d242E7",
  totalSupply: "1,000,000,000 CTS",
  tokensInIDO: "200,000,000 CTS",
  tokenInitialPrice: "1 CTS = 0.5 $",
  idoMethod: "SOFTCAP",
  lockedInLiquidity: "40%",
  burnedRaisedTKN: "30%",
  teamVestingSchedule: "5 weeks",
  raisingFees: "5%",
};

export const LAUNCHPAD_TABS_INFO = {
  aboutProject:
    "              Cryptosphere is a groundbreaking web3 project that\n" +
    "              aims to transform the way we interact with digital assets and\n" +
    "              decentralized applications. By leveraging the power of blockchain\n" +
    "              technology, Cryptosphere provides a secure, transparent, and\n" +
    "              efficient platform for users to engage in various digital\n" +
    "              activities, from trading tokens to participating in decentralized\n" +
    "              finance (DeFi) protocols.",
  modules: ["des"],
  features: ["sads"],
  roadmap: [
    {
      title: "Q1 2024: Project Initiation and Planning",
      description:
        "Conduct comprehensive market research to identify trends, opportunities, and target audience. Assemble a skilled and diverse team of blockchain developers, financial experts, and marketing professionals. Publish an in-depth whitepaper detailing the projects vision, goals, and technical specifications.",
    },
    {
      title: "Q2 2024: Development and Alpha Testing",
      description:
        "Begin development of the Cryptosphere platform, focusing on the core functionalities such as the decentralized exchange (DEX) and secure wallet. Develop and audit smart contracts to ensure security and efficiency. Launch an alpha version of the platform for internal testing and feedback.",
    },
    {
      title: "Q3 2024: Beta Launch and Community Building",
      description:
        "Open the beta version of Cryptosphere to the public, allowing users to test the platform and provide feedback. Initiate community-building activities, including social media campaigns, webinars, and AMAs (Ask Me Anything) to engage with potential users and investors. Establish strategic partnerships with other blockchain projects, DeFi protocols, and industry influencers.",
    },
  ],
  team: "Cryptosphere is powered by a diverse team of experts in blockchain technology, finance, and software development. Our team is dedicated to building innovative solutions that address the challenges of the current financial system and drive the adoption of decentralized technologies.",
};

export type TThemeColors = {
  primary: string;
  secondary: string;
  muted: string;
  background: string;
  foreground: string;
};

const dappColors: Record<EThemeNames, TThemeColors> = {
  Twilight: {
    primary: "hsl(268, 76%, 48%)",
    secondary: "hsl(322, 86%, 55%)",
    muted: "hsl(0, 0%, 44%)",
    background: "hsl(0, 0%, 5%)",
    foreground: "hsl(0, 0%, 86%)",
  },
  Neon: {
    primary: "hsl(158, 79%, 48%)",
    secondary: "hsl(158, 89%, 53%)",
    muted: "hsl(158, 80%, 25%)",
    background: "hsl(0, 0%, 5%)",
    foreground: "hsl(0, 0%, 86%)",
  },
  Metallic: {
    primary: "	hsl(208, 44%, 17%)",
    secondary: "hsl(208, 32%, 49%)",
    muted: "	hsl(203, 29%, 51%)",
    background: "hsl(0, 0%, 5%)",
    foreground: "hsl(0, 0%, 86%)",
  },
  Navy: {
    primary: "hsl(220, 96%, 38%)",
    secondary: "hsl(214, 96%, 38%)",
    muted: "		hsl(225, 79%, 76%)",
    background: "hsl(0, 0%, 5%)",
    foreground: "hsl(0, 0%, 86%)",
  },
  Brass: {
    primary: "hsl(11, 87%, 62%)",
    secondary: "hsl(28, 42%, 57%)",
    muted: "hsl(46, 57%, 88%)",
    background: "hsl(0, 0%, 5%)",
    foreground: "hsl(0, 0%, 86%)",
  },
};

export function getDappColors(themeName: EThemeNames): TThemeColors {
  switch (themeName) {
    case EThemeNames.Twilight:
      return dappColors.Twilight;
    case EThemeNames.Neon:
      return dappColors.Neon;
    case EThemeNames.Metallic:
      return dappColors.Metallic;
    case EThemeNames.Navy:
      return dappColors.Navy;
    case EThemeNames.Brass:
      return dappColors.Brass;
    default:
      return dappColors.Twilight;
  }
}

export enum EThemeNames {
  Twilight = "Twilight",
  Neon = "Neon",
  Metallic = "Metallic",
  Navy = "Navy",
  Brass = "Brass",
}

export enum ESocialNames {
  Facebook = "Facebook",
  X = "X",
  Discord = "Discord",
  Github = "Github",
  Instagram = "Instagram",
}
