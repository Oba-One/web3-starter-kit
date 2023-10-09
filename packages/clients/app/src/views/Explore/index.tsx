import React from "react";
import { useAccount } from "wagmi";

import { ExploreDataProps } from "../../hooks/views/useExplore";

import { QRScanner } from "../../components/Scanner/QR";
import { WaveLoader } from "../../components/Loader/Wave";

interface ExploreProps extends ExploreDataProps {}

const Explore: React.FC<ExploreProps> = ({
  isIdle,
  isScanning,
  isScanned,
  error,
  synths,
  ...wave
}) => {
  const { address } = useAccount();

  return (
    <section className="flex flex-col w-full h-full items-center gap-3 px-6 text-center">
      {address ? (
        <div className="h-full w-full grid place-items-center justify-center">
          <div className="h-2/3 flex flex-col items-center gap-16">
            <h3 className="bg-white px-3 py-1 w-60">
              {isScanning
                ? "Catching"
                : isScanned
                ? "Wave Caught"
                : "Catch Wave"}
            </h3>
            {error ? (
              <p className="text-red-500">{error}</p>
            ) : isScanning ? (
              <WaveLoader />
            ) : null}
          </div>
          <QRScanner
            isIdle={isIdle}
            isScanned={isScanned}
            isScanning={isScanning}
            error={error}
            synths={synths}
            {...wave}
          />
        </div>
      ) : (
        <h4 className="w-full h-full grid place-items-center">
          Connect Wallet To Catch Waves
        </h4>
      )}
    </section>
  );
};

export default Explore;
