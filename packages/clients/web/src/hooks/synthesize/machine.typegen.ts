// This file was automatically generated. Edits will be overwritten

export interface Typegen0 {
  "@@xstate/typegen": true;
  internalEvents: {
    "done.invoke.connectService": {
      type: "done.invoke.connectService";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "done.invoke.disconnectService": {
      type: "done.invoke.disconnectService";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "done.invoke.refreshService": {
      type: "done.invoke.refreshService";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "done.invoke.synthesizeService": {
      type: "done.invoke.synthesizeService";
      data: unknown;
      __tip: "See the XState TS docs to learn how to strongly type this.";
    };
    "error.platform.connectService": {
      type: "error.platform.connectService";
      data: unknown;
    };
    "error.platform.disconnectService": {
      type: "error.platform.disconnectService";
      data: unknown;
    };
    "error.platform.refreshService": {
      type: "error.platform.refreshService";
      data: unknown;
    };
    "error.platform.synthesizeService": {
      type: "error.platform.synthesizeService";
      data: unknown;
    };
    "xstate.init": { type: "xstate.init" };
  };
  invokeSrcNameMap: {
    connectService: "done.invoke.connectService";
    disconnectService: "done.invoke.disconnectService";
    refreshService: "done.invoke.refreshService";
    synthesizeService: "done.invoke.synthesizeService";
  };
  missingImplementations: {
    actions: "revealStats" | "revealSynth";
    delays: never;
    guards: never;
    services:
      | "connectService"
      | "disconnectService"
      | "refreshService"
      | "synthesizeService";
  };
  eventsCausingActions: {
    connected: "done.invoke.connectService" | "done.invoke.refreshService";
    error:
      | "error.platform.connectService"
      | "error.platform.disconnectService"
      | "error.platform.refreshService"
      | "error.platform.synthesizeService";
    reset:
      | "RESTART"
      | "done.invoke.disconnectService"
      | "error.platform.disconnectService";
    revealStats: "done.invoke.connectService";
    revealSynth:
      | "done.invoke.disconnectService"
      | "done.invoke.synthesizeService"
      | "error.platform.disconnectService";
    synthesized: "done.invoke.synthesizeService";
  };
  eventsCausingDelays: {};
  eventsCausingGuards: {
    isSynthesizeingValid: "SYNTHESIZE";
  };
  eventsCausingServices: {
    connectService: "CONNECT";
    disconnectService: "DISCONNECT";
    refreshService: "REFRESH";
    synthesizeService: "SYNTHESIZE";
  };
  matchesStates:
    | "connected"
    | "connecting"
    | "disconnecting"
    | "idle"
    | "refreshing"
    | "synthesized"
    | "synthesizing";
  tags: "art" | "collectible" | "experience" | "music" | "synthesize";
}
