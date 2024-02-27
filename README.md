# Marlowe Runtime REST API SDK
This package is a light-weight Marlowe Runtime REST API SDK built on top of axios using automatically generated code by the `openapi-generator` tool.

## Building

To build the typescript sources to javascript use:

```
npm install
npm run build
```

## Consuming

```
npm install marlowe-typescript-sdk
```

Quick example of a swap contract implemented using this SDK:

```typescript
const configuration = new Configuration({
  basePath: "https://marlowe-runtime-preprod-web.scdev.aws.iohkdev.io",
});
const api = new DefaultApi(configuration);

const swapContract = {
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

const createRes = await api.createContract({
  postContractsRequest: {
    contract: swapContract,
    version: "v1",
    roles: {
      provider:
        "addr_test1vzuqvqzcnuy9pmrh2sy7tjucufmpwh8gzssz7v6scn0e04gxdvna9",
      swapper:
        "addr_test1vzuqvqzcnuy9pmrh2sy7tjucufmpwh8gzssz7v6scn0e04gxdvna9",
    },
    tags: {
      sometag: { tag1: "", tag2: "null" },
    },
    metadata: {},
    minUTxODeposit: 3000000,
  },
  xChangeAddress:
    "addr_test1vzuqvqzcnuy9pmrh2sy7tjucufmpwh8gzssz7v6scn0e04gxdvna9",
});
```

## Update automatically generated code Marlowe Runtime Web REST API

Modify the `openapi.json`, making sure it's a valid OpenAPI spec, commit and push. The github action defined in `.github/workflows/codegen.yml` will do the rest using [openapi-generator-cli](https://openapi-generator.tech/)

## Check OpenAPI specs validity

Run the following command to check if the `openapi.json` is valid.

```sh
npx @openapitools/openapi-generator-cli validate -i openapi.json
```

## SDK structure

- Base interactions with API defined in the `marlowe-typescript-generated` package, i.e., the `/generated` directory. These interactions are generated automatically according to the file `openapi.json`

## Versioning
Check the releases to find the Marlowe Runtime REST API version that this package is compatible with.
