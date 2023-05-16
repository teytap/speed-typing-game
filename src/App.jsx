import React from "react";
import useFunctions from "./useFunctions"; //import custom hook includes all functions and variables
import "./App.css";

function App() {
  const {
    inputRef,
    text,
    handleChange,
    isTimeRunning,
    countdown,
    startGame,
    wordsNum,
  } = useFunctions();

  return (
    <div className="app">
      <h1>Speed Typing Game</h1>
      <textarea
        name="typing-area"
        ref={inputRef}
        value={text}
        onChange={handleChange}
        disabled={!isTimeRunning}
      ></textarea>
      <h4>Time remaining: {countdown}</h4>
      <button onClick={startGame} disabled={isTimeRunning}>
        Start game
      </button>
      <h1 className="word-count">Word count: {wordsNum}</h1>
    </div>
  );
}

export default App;
