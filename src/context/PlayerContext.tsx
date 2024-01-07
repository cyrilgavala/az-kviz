import { createContext, useState } from "react";

export interface PlayerContextValue {
  currentPlayer: number;
  switchPlayer: () => void;
  resetPlayer: () => void;
}

export const PlayerContext = createContext<PlayerContextValue>({
  currentPlayer: 1,
} as any);

export const PlayerContextProvider: React.FC<{ children: React.ReactNode }> = (
  props,
) => {
  const [currentPlayer, setCurrentPlayer] = useState(1);

  const switchPlayer = () => {
    setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
  };

  const resetPlayer = () => {
    setCurrentPlayer(1);
  };

  return (
    <PlayerContext.Provider
      value={{ currentPlayer, switchPlayer, resetPlayer }}
    >
      {props.children}
    </PlayerContext.Provider>
  );
};
