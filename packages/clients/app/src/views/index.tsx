import { a, useTransition } from "@react-spring/web";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";

import { useSynths } from "../hooks/views/useSynths";
import { useExplore } from "../hooks/views/useExplore";
import { useProfile } from "../hooks/views/useProfile";

import Synths from "./Synths";
import Explore from "./Explore";
import Profile from "./Profile";
import { SynthsViewer } from "../components/Synths/Viewer";

export default function Views() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    exitBeforeEnter: true,
    config: {
      tension: 300,
      friction: 20,
      clamp: true,
    },
  });

  const synths = useSynths();
  const explore = useExplore();
  const profile = useProfile();

  return transitions((style, location) => (
    <a.main
      className={`flex h-[calc(100dvh-3.5rem)] overflow-hidden max-h-[calc(100dvh-3.5rem)] overflow-y-contain`}
      style={style}
    >
      <Routes location={location}>
        <Route path="synths" element={<Synths {...synths} />}>
          <Route
            path=":address"
            element={
              <SynthsViewer
                synths={synths.synths}
                synthNfts={synths.synthNfts}
                synthWavesMap={synths.synthWavesMap}
                // waveNftMap={synths.waveNftMap}
                waveTokenMap={synths.waveTokenMap}
                fetchSynths={synths.fetchSynths}
                fetchSynthNfts={synths.fetchSynthNfts}
                // fetchWaveNfts={synths.fetchWaveNfts}
              />
            }
          />
        </Route>
        <Route path="explore" element={<Explore {...explore} />} />
        <Route path="profile" element={<Profile {...profile} />} />
        <Route path="*" element={<Navigate to="profile" />} />
      </Routes>
    </a.main>
  ));
}
