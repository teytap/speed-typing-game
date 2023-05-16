import { useState, useEffect, useRef } from "react";
//--this is custom hook

function useFunctions() {
  const [text, setText] = useState("");
  const [countdown, setCountdown] = useState(15);
  const [isTimeRunning, setIsTimeRunning] = useState(false);
  const [wordsNum, setWordsNum] = useState(0);
  const inputRef = useRef(null);

  function startGame() {
    setCountdown(15);
    setIsTimeRunning(true);
    setText("");
    setWordsNum(0);
    inputRef.current.disabled = false;
    inputRef.current.focus();
    document.querySelector(".word-count").classList.remove("result");
  }

  function handleChange(e) {
    let { value } = e.target;
    setText(value);
  }
  function countWords(string) {
    string = string.replace(/(^\s*)|(\s*$)/gi, ""); //exclude  start and end white-space
    string = string.replace(/[ ]{2,}/gi, " "); // eliminates two or more spaces
    string = string.replace(/\n /, "\n"); // exclude newline with a start spacing
    string = string.split(" ");
    let words = string.filter((word) => word !== "").length;
    return words;
  }
  useEffect(() => {
    if (isTimeRunning && countdown > 0) {
      setTimeout(() => {
        setCountdown((time) => time - 1);
      }, 1000);
    } else if (countdown === 0) {
      setIsTimeRunning(false);
      setWordsNum(countWords(text));
      document.querySelector(".word-count").classList.add("result");
    }
  }, [countdown, isTimeRunning]);
  return {
    inputRef,
    text,
    handleChange,
    isTimeRunning,
    countdown,
    startGame,
    wordsNum,
  };
}
export default useFunctions;
