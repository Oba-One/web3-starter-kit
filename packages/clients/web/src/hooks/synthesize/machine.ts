// import { toast } from "react-toastify";
import { createMachine, assign } from "xstate";

export interface SynthesizeContext {
  stats?: StatsQuery;
  transactionHash: string | null;
  error: string | null;
}

export const synthesizeMachine = createMachine(
  {
    id: "synthesize",
    version: "0.0.1",
    description:
      "Synthesize machine for generating synths based on your Web3 experiences.",
    type: "compound",
    strict: true,
    tsTypes: {} as import("./machine.typegen").Typegen0,
    predictableActionArguments: true,
    tags: ["synthesize", "art", "music", "collectible", "experience"],
    initial: "idle",
    schema: {
      services: {} as {
        connectService: {
          data: {
            stats: StatsQuery;
          };
        };
        refreshService: {
          data: {
            stats: StatsQuery;
          };
        };
        disconnectService: {
          data: {};
        };
        synthesizeService: {
          data: {
            hash: `0x${string}`;
          };
        };
      },
      context: {
        address: undefined,
        stats: undefined,
        transactionHash: null,
        error: null,
      } as SynthesizeContext,
    },
    states: {
      idle: {
        on: {
          CONNECT: {
            target: "connecting",
          },
        },
      },
      connecting: {
        invoke: {
          id: "connectService",
          src: "connectService",
          onDone: {
            target: "connected",
            actions: ["connected", "revealStats"],
          },
          onError: {
            target: "idle",
            actions: "error",
          },
        },
      },
      refreshing: {
        invoke: {
          id: "refreshService",
          src: "refreshService",
          onDone: {
            target: "connected",
            actions: ["connected"],
          },
          onError: {
            target: "connected",
            actions: "error",
          },
        },
      },
      connected: {
        on: {
          SYNTHESIZE: {
            target: "synthesizing",
            cond: "isSynthesizeingValid",
          },
          REFRESH: {
            target: "refreshing",
          },
          DISCONNECT: {
            target: "disconnecting",
          },
        },
      },
      synthesizing: {
        invoke: {
          id: "synthesizeService",
          src: "synthesizeService",
          onDone: {
            target: "synthesized",
            actions: ["synthesized", "revealSynth"],
          },
          onError: {
            target: "connected",
            actions: "error",
          },
        },
      },
      synthesized: {
        on: {
          DISCONNECT: {
            target: "disconnecting",
          },
          RESTART: {
            target: "connected",
            actions: "reset",
          },
        },
      },
      disconnecting: {
        invoke: {
          id: "disconnectService",
          src: "disconnectService",
          onDone: {
            target: "idle",
            actions: ["revealSynth", "reset"],
          },
          onError: {
            target: "idle",
            actions: ["revealSynth", "reset", "error"],
          },
        },
      },
    },
  },
  {
    guards: {
      isSynthesizeingValid: (context) => {
        return !!context.stats;
      },
    },
    actions: {
      connected: assign((context, event) => {
        context.stats = event.data.stats;
        context.error = null;

        return context;
      }),
      synthesized: assign((context, event) => {
        context.transactionHash = event.data.hash;
        context.error = null;
        return context;
      }),
      reset: assign((context, _event) => {
        context.stats = undefined;
        context.transactionHash = null;
        context.error = null;

        return context;
      }),
      error: assign((context, event) => {
        switch (event.type) {
          case "error.platform.connectService":
            // @ts-ignore
            if (event.data.message !== "No address provided.") {
              // @ts-ignore
              context.error = event.data.message;
            }

            break;

          case "error.platform.synthesizeService":
            // @ts-ignore
            context.error = event.data.message;
            break;

          default:
            break;
        }
        console.log("Error!", context, event);

        // toast.error(context.error || "Error with creature generator.");

        return context;
      }),
    },
  }
);
