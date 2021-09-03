import React, { useState } from "react";

export default function MainBody(props) {
  const [text, setText] = useState("Enter something here");
  let writeText = (e) => {
    setText(e.target.value);
  };
  let makeUpperCase = () => {
    setText(text.toUpperCase());
    navigator.clipboard.writeText("gourav is great");
  };

  const makeLowerCase = () => {
    setText(text.toLowerCase());
  };

  let makeReverse = () => {
    let reversedText = "";
    for (let i = text.length - 1; i >= 0; i--) {
      reversedText += text[i];
    }
    setText(reversedText);
  };

  let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  const encript = () => {
    let temp = "";
    for (let char of text) {
      let index = lowerCase.indexOf(char);

      if (index !== -1) {
        temp += lowerCase[25 - index];
      } else if (upperCase.indexOf(char) !== -1) {
        temp += upperCase[25 - upperCase.indexOf(char)];
      } else {
        temp += char;
      }
    }
    setText(temp);
  };
  const color = props.mode !== "light" ? "white" : "black";

  const morseCodes = {
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-",
    " ": "  ", //this is my addition ;)
  };

  const toMorse = () => {
    let temp = text.toLowerCase();
    let ans = "";
    for (let char of temp) {
      ans += morseCodes[char] + " ";
    }
    setText(ans);
  };

  const morseToNormal = () => {
    for (let i of text) {
      if (i !== "." && (i !== "-") & (i !== " ")) {
        alert("Enter valid morse code");
        return;
      }
    }
    let arr = text.split("    ");
    let ans = [];
    for (let word of arr) {
      let arr2 = word.split(" ");
      let ansWord = "";
      for (let code of arr2) {
        for (let [key, values] of Object.entries(morseCodes)) {
          if (morseCodes.hasOwnProperty(key)) {
            if (values === code) {
              ansWord += key;
            }
          }
        }
      }
      ans.push(ansWord);
    }
    setText(ans.join(" "));
  };

  return (
    <>
      <div className="container">
        <textarea
          style={{
            backgroundColor: props.mode === "light" ? "white" : "black",
            color: color,
            border: `${color} 4px solid`,
            borderRadius: "10px",
          }}
          name="noname"
          className="container"
          id="text"
          cols="30"
          rows="10"
          value={text}
          onChange={writeText}
        ></textarea>

        <button
          type="button"
          className="btn btn-primary mx-1 my-2"
          onClick={makeUpperCase}
        >
          UpperCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1 my-2"
          onClick={makeLowerCase}
        >
          LowerCase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-2"
          onClick={makeReverse}
        >
          Reverse
        </button>

        <button type="button" className="btn btn-danger mx-2" onClick={encript}>
          Encript
        </button>

        <button type="button" className="btn btn-danger mx-2" onClick={toMorse}>
          Morse Code
        </button>

        <button
          type="button"
          className="btn btn-danger mx-2"
          onClick={morseToNormal}
        >
          Morse to Normal
        </button>

        <p>
          <strong>Contains: </strong> {text.length} characters
          <br />
          {text.split(" ").length} words
        </p>
        <h2>Preview</h2>
        <p class>{text}</p>
      </div>
    </>
  );
}
