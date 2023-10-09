import {
  useAccount,
  useDisconnect,
} from "wagmi";
import {
  LazyQueryExecFunction,
  OperationVariables,
  useLazyQuery,
} from "@apollo/client";

import { GET_STATS } from "../modules/apollo";

interface MintHookData {
  address?: `0x${string}`;
  stats?: StatsQuery;
  // transactionHash: string | null;
  // error: string | null;
  getStats: LazyQueryExecFunction<{ stats: StatsQuery }, OperationVariables>;
  // writeAsync?: () => Promise<WriteContractResult>;
  disconnectAsync: () => Promise<void>;
}

export const useMint = (): MintHookData => {
  const { address } = useAccount();
  const { disconnectAsync } = useDisconnect();
  const [getStats, { data }] = useLazyQuery<{ stats: StatsQuery }>(GET_STATS, {
    variables: {
      address: import.meta.env.DEV
        ? "0x66028fcf07beee3eee2a24beab52914ae66cd3e9"
        : address,
    },
    refetchWritePolicy: "merge",
    fetchPolicy: "network-only",
    nextFetchPolicy: "network-only",
    // pollInterval: 10000,
  });

  return {
    stats: data?.stats,
    address,
    // transactionHash: mint?.hash ?? null,
    getStats,
    disconnectAsync,
  };
};
