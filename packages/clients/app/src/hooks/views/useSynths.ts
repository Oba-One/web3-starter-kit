import { WavesDataProps, useWaves } from "../providers/waves";
import { SynthDataProps, useSynth } from "../synth/useSynth";

export interface SynthsDataProps extends WavesDataProps, SynthDataProps {}

export const useSynths = (): SynthsDataProps => {
  const waves = useWaves();
  const synth = useSynth();

  return {
    ...waves,
    ...synth,
  };
};
