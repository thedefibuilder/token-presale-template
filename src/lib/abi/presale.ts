export const PRESALE_ABI = [
  {
    type: "constructor",
    inputs: [
      {
        name: "initialOwner",
        type: "address",
        internalType: "address",
      },
      {
        name: "baseParams",
        type: "tuple",
        components: [
          {
            name: "offeringToken",
            type: "address",
            internalType: "address",
          },
          {
            name: "startTime",
            type: "uint40",
            internalType: "uint40",
          },
          {
            name: "endTime",
            type: "uint40",
            internalType: "uint40",
          },
          {
            name: "raiseTarget",
            type: "uint128",
            internalType: "uint128",
          },
          {
            name: "offeringAmount",
            type: "uint128",
            internalType: "uint128",
          },
        ],
        internalType: "struct PresaleParams",
      },
    ],
    stateMutability: "nonpayable",
  },
  {
    name: "InvalidEndTime",
    type: "error",
    inputs: [],
  },
  {
    name: "InvalidOfferingAmount",
    type: "error",
    inputs: [],
  },
  {
    name: "InvalidRaiseTarget",
    type: "error",
    inputs: [],
  },
  {
    name: "InvalidStartTime",
    type: "error",
    inputs: [],
  },
  {
    name: "OwnableInvalidOwner",
    type: "error",
    inputs: [
      {
        name: "owner",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    name: "OwnableUnauthorizedAccount",
    type: "error",
    inputs: [
      {
        name: "account",
        type: "address",
        internalType: "address",
      },
    ],
  },
  {
    name: "RaiseFailed",
    type: "error",
    inputs: [],
  },
  {
    name: "RaiseNotActive",
    type: "error",
    inputs: [],
  },
  {
    name: "RaiseNotEnded",
    type: "error",
    inputs: [],
  },
  {
    name: "RaiseStarted",
    type: "error",
    inputs: [],
  },
  {
    name: "RaiseSucceeded",
    type: "error",
    inputs: [],
  },
  {
    name: "SafeCastOverflowedUintDowncast",
    type: "error",
    inputs: [
      {
        name: "bits",
        type: "uint8",
        internalType: "uint8",
      },
      {
        name: "value",
        type: "uint256",
        internalType: "uint256",
      },
    ],
  },
  {
    name: "UserClaimed",
    type: "error",
    inputs: [],
  },
  {
    name: "UserDidNotParticipate",
    type: "error",
    inputs: [],
  },
  {
    name: "Claimed",
    type: "event",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "offeringAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    name: "OfferingAmountUpdated",
    type: "event",
    inputs: [
      {
        name: "offeringAmount",
        type: "uint128",
        indexed: false,
        internalType: "uint128",
      },
    ],
    anonymous: false,
  },
  {
    name: "OwnershipTransferred",
    type: "event",
    inputs: [
      {
        name: "previousOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "newOwner",
        type: "address",
        indexed: true,
        internalType: "address",
      },
    ],
    anonymous: false,
  },
  {
    name: "RaiseTargetUpdated",
    type: "event",
    inputs: [
      {
        name: "raiseTarget",
        type: "uint128",
        indexed: false,
        internalType: "uint128",
      },
    ],
    anonymous: false,
  },
  {
    name: "Refunded",
    type: "event",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "paymentAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    name: "Spent",
    type: "event",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "paymentAmount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    name: "TimeframeUpdated",
    type: "event",
    inputs: [
      {
        name: "startTime",
        type: "uint40",
        indexed: false,
        internalType: "uint40",
      },
      {
        name: "endTime",
        type: "uint40",
        indexed: false,
        internalType: "uint40",
      },
    ],
    anonymous: false,
  },
  {
    name: "Withdrawn",
    type: "event",
    inputs: [
      {
        name: "recipient",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    name: "batchClaim",
    type: "function",
    inputs: [
      {
        name: "users",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    name: "batchRefund",
    type: "function",
    inputs: [
      {
        name: "users",
        type: "address[]",
        internalType: "address[]",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    name: "buyWithNative",
    type: "function",
    inputs: [],
    outputs: [],
    stateMutability: "payable",
  },
  {
    name: "calculateOfferingAmount",
    type: "function",
    inputs: [
      {
        name: "payment",
        type: "uint128",
        internalType: "uint128",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint128",
        internalType: "uint128",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "calculatePaymentAmount",
    type: "function",
    inputs: [
      {
        name: "offering",
        type: "uint128",
        internalType: "uint128",
      },
    ],
    outputs: [
      {
        name: "",
        type: "uint128",
        internalType: "uint128",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "claim",
    type: "function",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    name: "endTime",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint40",
        internalType: "uint40",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "offeringAmount",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint128",
        internalType: "uint128",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "offeringToken",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "owner",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "participationInfo",
    type: "function",
    inputs: [
      {
        name: "user",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [
      {
        name: "",
        type: "tuple",
        components: [
          {
            name: "paidAmount",
            type: "uint128",
            internalType: "uint128",
          },
          {
            name: "claimed",
            type: "bool",
            internalType: "bool",
          },
        ],
        internalType: "struct IPresale.ParticipationInfo",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "paymentToken",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "address",
        internalType: "address",
      },
    ],
    stateMutability: "pure",
  },
  {
    name: "raiseTarget",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint128",
        internalType: "uint128",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "refund",
    type: "function",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    name: "renounceOwnership",
    type: "function",
    inputs: [],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    name: "setOfferingAmount",
    type: "function",
    inputs: [
      {
        name: "offeringAmount_",
        type: "uint128",
        internalType: "uint128",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    name: "setRaiseTarget",
    type: "function",
    inputs: [
      {
        name: "raiseTarget_",
        type: "uint128",
        internalType: "uint128",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    name: "setTimeframe",
    type: "function",
    inputs: [
      {
        name: "startTime_",
        type: "uint40",
        internalType: "uint40",
      },
      {
        name: "endTime_",
        type: "uint40",
        internalType: "uint40",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    name: "startTime",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint40",
        internalType: "uint40",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "totalRaised",
    type: "function",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "uint128",
        internalType: "uint128",
      },
    ],
    stateMutability: "view",
  },
  {
    name: "transferOwnership",
    type: "function",
    inputs: [
      {
        name: "newOwner",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    name: "withdrawOfferingToken",
    type: "function",
    inputs: [
      {
        name: "recipient",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    name: "withdrawPaymentToken",
    type: "function",
    inputs: [
      {
        name: "recipient",
        type: "address",
        internalType: "address",
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;
