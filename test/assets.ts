export const swapContract = {
  assets: {
    lovelace: 0,
    tokens: {},
  },
  block: {
    blockHeaderHash:
      "7072be9ad1ee75aadba7cbac15b0f55873c54c2153b1e53a54f36a3ada413beb",
    blockNo: 1705189,
    slotNo: 46967785,
  },
  continuations: null,
  contractId:
    "14a950e998711bb16c72fdd0bd707b4a306daf38bc1fc2e560aae3409dd30c25#1",
  currentContract: null,
  initialContract: {
    timeout: 1704288420000,
    timeout_continuation: "close",
    when: [
      {
        case: {
          deposits: 3000000,
          into_account: {
            role_token: "provider",
          },
          of_token: {
            currency_symbol: "",
            token_name: "",
          },
          party: {
            role_token: "provider",
          },
        },
        then: {
          timeout: 1704288420000,
          timeout_continuation: {
            from_account: {
              role_token: "provider",
            },
            pay: 3000000,
            then: "close",
            to: {
              party: {
                role_token: "provider",
              },
            },
            token: {
              currency_symbol: "",
              token_name: "",
            },
          },
          when: [
            {
              case: {
                deposits: 3000000,
                into_account: {
                  role_token: "swapper",
                },
                of_token: {
                  currency_symbol: "",
                  token_name: "",
                },
                party: {
                  role_token: "swapper",
                },
              },
              then: {
                from_account: {
                  role_token: "provider",
                },
                pay: 3000000,
                then: {
                  from_account: {
                    role_token: "swapper",
                  },
                  pay: 3000000,
                  then: "close",
                  to: {
                    party: {
                      role_token: "provider",
                    },
                  },
                  token: {
                    currency_symbol: "",
                    token_name: "",
                  },
                },
                to: {
                  party: {
                    role_token: "swapper",
                  },
                },
                token: {
                  currency_symbol: "",
                  token_name: "",
                },
              },
            },
          ],
        },
      },
    ],
  },
  metadata: {},
  roleTokenMintingPolicyId:
    "8d246001fbbfe67b031e1558d67ffbbeeab80f61e5053b6de10b588d",
  state: null,
  status: "confirmed",
  tags: {},
  txBody: null,
  unclaimedPayouts: [],
  utxo: null,
  version: "v1",
};

export const tx = {
  assets: { lovelace: 0, tokens: {} },
  block: {
    blockHeaderHash:
      "cb3a8c98d06a87e8a835fbdb38e59fd84f95d1af2c1bfdcdc85038d1e481be74",
    blockNo: 1672665,
    slotNo: 46190169,
  },
  consumingTx: null,
  continuations: null,
  contractId:
    "06fb28e1322bb2d366617e6fbaed22ed93a8ca2b813964ade5621c4b8fba1ee8#1",
  inputUtxo:
    "ea40b781fd3ca3a6dfce8b3aa045bc7951d36eae73d0454eb3b97d48b49d99f4#1",
  inputs: [
    {
      input_from_party: { role_token: "swapper" },
      into_account: { role_token: "swapper" },
      of_token: { currency_symbol: "", token_name: "" },
      that_deposits: 3000000,
    },
  ],
  invalidBefore: "2023-12-06T14:30:02Z",
  invalidHereafter: "2023-12-12T23:59:59Z",
  metadata: {},
  outputContract: null,
  outputState: null,
  outputUtxo: null,
  payouts: [
    {
      assets: { lovelace: 3000000, tokens: {} },
      payoutId:
        "981455f49fe566765d8380ad2199ee265ab9128902630780d4d7258a40c9d310#2",
      role: "provider",
    },
    {
      assets: { lovelace: 3000000, tokens: {} },
      payoutId:
        "981455f49fe566765d8380ad2199ee265ab9128902630780d4d7258a40c9d310#3",
      role: "swapper",
    },
  ],
  status: "confirmed",
  tags: {},
  transactionId:
    "981455f49fe566765d8380ad2199ee265ab9128902630780d4d7258a40c9d310",
  txBody: null,
};
