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
  socials: {
    X: "https://twitter.com/cryptosphere",
    Discord: "https://discord.com/cryptosphere",
    Telegram: "https://t.me/cryptosphere",
    Facebook: "https://facebook.com/cryptosphere",
  },
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

export enum ESocialNames {
  Facebook = "Facebook",
  Telegram = "Telegram",
  X = "X",
  Discord = "Discord",
  Github = "Github",
  Instagram = "Instagram",
}
