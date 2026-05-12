import useGameState from "./hooks/useGameState";
import MenuScreen from "./screens/MenuScreen";
import DifficultyScreen from "./screens/DifficultyScreen";
import TargetScreen from "./screens/TargetScreen";
import GameScreen from "./screens/GameScreen";
import WinScreen from "./screens/WinScreen";
import { GLOBAL_STYLES } from "./shared/styles";

export default function App() {
  const game = useGameState();

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#f4f1ea", fontFamily: "'Courier New', Courier, monospace" }}>
      <style>{GLOBAL_STYLES}</style>

      {game.screen === "menu" && (
        <MenuScreen onPlay={() => game.setScreen("difficulty")} />
      )}

      {game.screen === "difficulty" && (
        <DifficultyScreen
          onSelect={d => { game.setDifficulty(d); game.setScreen("target"); }}
          onBack={game.goBack}
        />
      )}

      {game.screen === "target" && (
        <TargetScreen
          onSelect={p => { game.setPlatform(p); game.setScreen("game"); }}
          onBack={game.goBack}
        />
      )}

      {game.screen === "game" && game.platform && (
        <GameScreen
          platform={game.platform}
          difficulty={game.difficulty}
          password={game.password}
          setPassword={game.setPassword}
          showPw={game.showPw}
          setShowPw={game.setShowPw}
          results={game.results}
          okCount={game.okCount}
          allOk={game.allOk}
          pct={game.pct}
          inputShake={game.inputShake}
          broken={game.broken}
          digitSum={game.digitSum}
          onSubmit={game.doSubmit}
          onBack={game.goBack}
        />
      )}

      {game.screen === "win" && game.platform && (
        <WinScreen
          platform={game.platform}
          password={game.password}
          difficulty={game.difficulty}
          okCount={game.okCount}
          onReset={game.reset}
        />
      )}
    </div>
  );
}