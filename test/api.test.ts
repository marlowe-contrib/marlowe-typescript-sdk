import { Configuration, DefaultApi } from "marlowe-typescript-generated";
import { swapContract, tx } from "./assets";
const configuration = new Configuration({
  basePath: "https://marlowe-runtime-preprod-web.scdev.aws.iohkdev.io",
});
const api = new DefaultApi(configuration);
describe("Parse api info", () => {
  it("getContracts response should not be an empty list", async () => {
    const contractsRes = await api.getContracts();
    expect(contractsRes.data.results.length).toBeGreaterThan(0);
  });

  it("createContract tx field should not be empty", async () => {
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
    expect(createRes.data.resource.tx.cborHex.length).toBeGreaterThan(0);
  });

  it("getContractSourceById response should match expected output", async () => {
    const sourceRes = await api.getContractSourceById({
      contractSourceId:
        "705f33bb023b560f458a277c12130487f8dbca1b9e4dc50c4ed1596e00944996",
    });
    expect(sourceRes.data).toEqual({
      timeout: 1704288420000,
      timeout_continuation: "close",
      when: [
        {
          case: {
            deposits: 3000000,
            into_account: { role_token: "provider" },
            of_token: { currency_symbol: "", token_name: "" },
            party: { role_token: "provider" },
          },
          merkleized_then:
            "2d41ea20c87de8ef1d553c19c661afdcff141a09bc9c0febbc3913642e1e8208",
        },
      ],
    });
  });

  it("getContractSourceAdjacency returns list of contract source ids", async () => {
    const adjRes = await api.getContractSourceAdjacency({
      contractSourceId:
        "705f33bb023b560f458a277c12130487f8dbca1b9e4dc50c4ed1596e00944996",
    });
    expect(adjRes.data.results).toEqual([
      "2d41ea20c87de8ef1d553c19c661afdcff141a09bc9c0febbc3913642e1e8208",
    ]);
  });

  it("getContractSourceClosure returns list of contract source ids", async () => {
    const closureRes = await api.getContractSourceClosure({
      contractSourceId:
        "705f33bb023b560f458a277c12130487f8dbca1b9e4dc50c4ed1596e00944996",
    });
    expect(closureRes.data.results).toEqual([
      "2d41ea20c87de8ef1d553c19c661afdcff141a09bc9c0febbc3913642e1e8208",
      "705f33bb023b560f458a277c12130487f8dbca1b9e4dc50c4ed1596e00944996",
      "e4e25474331c2eb55c54c41195d3d32efb7388e524d570c57286a6c76e806bc0",
    ]);
  });

  it("getContractById returns expected contract", async () => {
    const contractRes = await api.getContractById({
      contractId:
        "14a950e998711bb16c72fdd0bd707b4a306daf38bc1fc2e560aae3409dd30c25#1",
    });
    expect(contractRes.data.resource).toEqual(swapContract);
  });

  it("getNextStepsForContract returns expected next steps", async () => {
    const nextStepsRes = await api.getNextStepsForContract({
      contractId:
        "26a9d99e3a014b7dafc21642c829b5f51edd8f74f45f13d965e967df182156eb#1",
      validityEnd: "2050-01-01T00:00:00.000Z",
      validityStart: "1970-01-01T00:00:00.000Z",
    });

    expect(nextStepsRes.data).toEqual({
      applicable_inputs: {
        choices: [],
        deposits: [
          {
            can_deposit: 3000000,
            case_index: 0,
            into_account: { role_token: "provider" },
            is_merkleized_continuation: false,
            of_token: { currency_symbol: "", token_name: "" },
            party: { role_token: "provider" },
          },
        ],
      },
      can_reduce: false,
    });
  });

  it("getTransactionsForContract returns non-empty list of transactions", async () => {
    const transactionsRes = await api.getTransactionsForContract({
      contractId:
        "06fb28e1322bb2d366617e6fbaed22ed93a8ca2b813964ade5621c4b8fba1ee8#1",
    });
    expect(transactionsRes.data.results.length).toBeGreaterThan(0);
  });

  it("getContractTransactionById returns expected transaction", async () => {
    const contractTxRes = await api.getContractTransactionById({
      contractId:
        "06fb28e1322bb2d366617e6fbaed22ed93a8ca2b813964ade5621c4b8fba1ee8#1",
      transactionId:
        "981455f49fe566765d8380ad2199ee265ab9128902630780d4d7258a40c9d310",
    });
    expect(contractTxRes.data.resource).toEqual(tx);
  });

  it("healthcheck checks everything is OK", async () => {
    const healthcheckRes = await api.healthcheck();
    expect(healthcheckRes.status).toEqual(200);
  });

  it("getPayouts returns non-empty list of payouts", async () => {
    const payoutsRes = await api.getPayouts();
    expect(payoutsRes.data.results.length).toBeGreaterThan(0);
  });

  it("getWithdrawals returns non-empty list of withdrawals", async () => {
    const withdrawalsRes = await api.getWithdrawals();
    expect(withdrawalsRes.data.results.length).toBeGreaterThan(0);
  });
  it("getWithdrawalById returns expected withdrawal", async () => {
    const withdrawalRes = await api.getWithdrawalById({
      withdrawalId:
        "e68b8034f4d93c4e53468198abdcbe938d067605310ece35ebe681d61c961e1c",
    });
    expect(withdrawalRes.data).toEqual({
      block: {
        blockHeaderHash:
          "a70ab6579e6e53664ac10dec1eed7a6e928260ec9e493ee2c76189c7a8e1b5ae",
        blockNo: 1453233,
        slotNo: 40843025,
      },
      payouts: [
        {
          contractId:
            "e212bdd1205294b277dbc299cffdcae8fcf81dc80ecf37759ba0325d89f68044#1",
          payoutId:
            "22bf64b1b948716b029ba7d0cb3658945c2e50111a6638b4dde5128743438e6b#3",
          role: {
            assetName: "Borrower",
            policyId:
              "da12d459da31680b2148e9eb9da4a66c3d4f895b63c544b707d3a337",
          },
          status: "withdrawn",
          withdrawalId:
            "e68b8034f4d93c4e53468198abdcbe938d067605310ece35ebe681d61c961e1c",
        },
      ],
      status: "confirmed",
      withdrawalId:
        "e68b8034f4d93c4e53468198abdcbe938d067605310ece35ebe681d61c961e1c",
    });
  });
});
