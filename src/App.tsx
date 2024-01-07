import { Board } from "./components/board/Board";
import { Settings } from "./components/settings/Settings";
import { PlayerContextProvider } from "./context/PlayerContext";
import { QuestionsContextProvider } from "./context/QuestionsContext";

function App() {
  return (
    <QuestionsContextProvider>
      <PlayerContextProvider>
        <div className="App">
          <Settings />
          <Board />
        </div>
      </PlayerContextProvider>
    </QuestionsContextProvider>
  );
}

export default App;
