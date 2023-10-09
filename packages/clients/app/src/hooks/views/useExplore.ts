import { WavesDataProps, useWaves } from "../providers/waves";
import { WaveDataProps, useWave } from "../wave/useWave";

export interface ExploreDataProps extends WavesDataProps, WaveDataProps {}

export const useExplore = (): ExploreDataProps => {
  const waves = useWaves();
  const wave = useWave();

  return {
    ...waves,
    ...wave,
  };
};
