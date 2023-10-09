import { useMachine } from "@xstate/react";
import React, { useEffect, useState } from "react";

import { useMint } from "../useMint";

import { SynthesizeContext, synthesizeMachine } from "./machine";

export interface SynthesizeState {
  isIdle: boolean;
  isConnecting: boolean;
  isConnected: boolean;
  isRefreshing: boolean;
  isSynthesizing: boolean;
  isSynthesized: boolean;
}

interface SynthesizeHookData extends SynthesizeContext, SynthesizeState {
  connect: () => void;
  refresh: () => void;
  synthesize: () => void;
  share: () => void;
  disconnect: () => void;
  address?: `0x${string}`;
  artFlipped: boolean;
  setFlippedArt: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useSynthesize = (): SynthesizeHookData => {
  const [artFlipped, setFlippedArt] = useState(false);
  const { address, getStats, openConnectModal, disconnectAsync } = useMint();
  const [state, send] = useMachine(synthesizeMachine, {
    actions: {
      revealStats: () => {
        setFlippedArt(true);
      },
      revealSynth: () => {
        setFlippedArt(false);
      },
    },
    services: {
      connectService: async () => {
        if (!address) {
          openConnectModal && openConnectModal();
          throw new Error("No address provided.");
        }

        try {
          const { data } = await getStats({
            variables: {
              address: import.meta.env.DEV
                ? "0x66028fcf07beee3eee2a24beab52914ae66cd3e9"
                : address,
            },
          });

          if (!data) {
            throw new Error("No stats returned from getStats.");
          }

          return {
            stats: data.stats,
          };
        } catch (error) {
          throw error;
        }
      },
      refreshService: async () => {
        try {
          // 0x91E07a7dC92238026eE8E12373341CEa222b2950
          const { data } = await getStats({
            variables: {
              address: import.meta.env.DEV
                ? "0x66028fcf07beee3eee2a24beab52914ae66cd3e9"
                : address,
            },
          });

          if (!data) {
            throw new Error("No stats returned from getStats.");
          }

          return {
            stats: data.stats,
          };
        } catch (error) {
          throw error;
        }
      },
      synthesizeService: async () => {
        try {
          // const data = await writeAsync?.();

          function wait(ms: number) {
            return new Promise((resolve) => setTimeout(resolve, ms));
          }

          await wait(4000);

          // if (!data) {
          //   throw new Error("No data returned from writeAsync.");
          // }

          return { hash: `0x` };
        } catch (error) {
          throw error;
        }
      },
      disconnectService: async () => {
        try {
          await disconnectAsync();
          return {};
        } catch (error) {
          throw error;
        }
      },
    },
  });

  function connect() {
    if (state.matches("idle")) send("CONNECT");
  }

  function refresh() {
    send("REFRESH");
  }

  function synthesize() {
    if (state.matches("connected")) send("SYNTHESIZE");
  }

  function share() {
    let shareURL = "https://twitter.com/share?"; //url base

    const params = {
      // url: "https://google.com", // Opensea link to NFT
      text: "My NFT collection reimagined with",
      via: "syndotart",
      hashtags: "music,generativeart,synthesize",
    };

    for (const prop in params) {
      // @ts-ignore
      shareURL += "&" + prop + "=" + encodeURIComponent(params[prop]);
    }

    window.open(shareURL);
  }

  function disconnect() {
    if (state.matches("connected") || state.matches("synthesized"))
      send("DISCONNECT");
  }

  useEffect(() => {
    if (state.matches("idle") && address) {
      connect();
    }
  }, [address]);

  useEffect(() => {
    // Use visibilitychange event to refresh stats when user returns to tab
    // https://developer.mozilla.org/en-US/docs/Web/API/Page_Visibility_API
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        refresh();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  return {
    ...state.context,
    isIdle: state.matches("idle"),
    isConnecting: state.matches("connecting"),
    isConnected: state.matches("connected"),
    isRefreshing: state.matches("refreshing"),
    isSynthesizing: state.matches("synthesizing"),
    isSynthesized: state.matches("synthesized"),
    connect,
    refresh,
    synthesize,
    share,
    address,
    disconnect,
    artFlipped,
    setFlippedArt,
  };
};
