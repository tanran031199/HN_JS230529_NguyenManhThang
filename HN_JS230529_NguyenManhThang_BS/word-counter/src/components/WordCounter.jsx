import React, { useState } from "react";
import WordBox from "./WordBox";
import Text from "./Text";
import "./css/word-counter.css";

function WordCounter() {
  const [value, setValue] = useState("");

  const [characters, setCharacters] = useState(0);
  const [text, setText] = useState(0);
  const [words, setWords] = useState(0);

  const handleGetValue = (e) => {
    const value = e.target.value;
    const countText = value.trim().split(" ");
    const countWord = value.split("\n");

    setValue(value);

    setCharacters(value.length);

    if (countText[0] === "") {
      setText(0);
    } else {
      setText(countText.length);
    }

    if (countWord[0] === "") {
      setWords(0);
    } else {
      setWords(countWord.length);
    }
  };

  const handleToUpper = () => {
    setValue((prev) => prev.toUpperCase());
  };

  const handleToLower = () => {
    setValue((prev) => prev.toLowerCase());
  };

  return (
    <div className="wordCounter">
      <div className="head-title">
        <div className="container">
          <div className="title">
            <h1>
              <i className="title-icon">🔡</i> Word Counter
            </h1>
          </div>
        </div>
      </div>

      <section className="count-box">
        <div className="container">
          <div className="word-count-box">
            <WordBox count={characters} icon="📝" title="Word" />
            <WordBox count={text} icon="✍" title="Letter" />
            <WordBox count={words} icon="📒" title="Paragraph" />
          </div>

          <section className="text-wrapper">
            <Text value={value} handleGetValue={handleGetValue} />
          </section>

          <section className="footer">
            <div className="container">
              <div className="button-box">
                <button onClick={handleToUpper}>Click to Uppercase</button>
                <button onClick={handleToLower}>Click to Lowercase</button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

export default WordCounter;
