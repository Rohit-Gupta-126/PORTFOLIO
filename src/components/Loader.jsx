"use client";
import { useEffect, useRef, useState } from "react";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [displayText, setDisplayText] = useState(""); // State for current text display
  const scrambleElementRef = useRef(null);

  const solveMilliseconds = 800; // Time to reveal the correct character
  const characterSelectionMilliseconds = 120; // Interval for random characters
  const delayMilliseconds = 300; // Delay between each character reveal
  const characters = [..."abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890*#@/*!%&^"];

  const randomArrayElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const revealTextOneByOne = (elementText) => {
    const elementCharacters = [...elementText]; // Split the text into characters
    setDisplayText("_".repeat(elementCharacters.length)); // Initialize text with placeholders

    let delay = 0;

    elementCharacters.forEach((_character, index) => {
      setTimeout(() => {
        let intervalId = setInterval(() => {
          const randomCharacter = randomArrayElement(characters);
          setDisplayText((prev) =>
            replaceCharacter(prev, index, randomCharacter)
          );
        }, characterSelectionMilliseconds);

        setTimeout(() => {
          clearInterval(intervalId); // Stop scrambling
          setDisplayText((prev) =>
            replaceCharacter(prev, index, elementCharacters[index])
          );

          // If it's the last character, trigger onComplete
          if (index === elementCharacters.length - 1) {
            setTimeout(() => setIsLoading(false), 1000); // Wait a moment before hiding loader
          }
        }, solveMilliseconds);
      }, (delay += delayMilliseconds));
    });
  };

  const replaceCharacter = (str, index, chr) => {
    const strArray = [...str];
    strArray[index] = chr;
    return strArray.join("");
  };

  useEffect(() => {
    const scrambleElement = scrambleElementRef.current?.innerText || "Loading...";
    revealTextOneByOne(scrambleElement);

    return () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <div
      className="loader-wrapper"
      style={{
        transition: isLoading ? "none" : "opacity 1s ease",
        opacity: isLoading ? "1" : "0",
        display: isLoading ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        pointerEvents: "none", // Ensures it doesn't block interactions
      }}
    >
      <div
        className="loader-text"
        ref={scrambleElementRef}
        style={{
          fontSize: "1.6rem",
          fontWeight: "medium",
          fontFamily: 'Broken-Mirror, sans-serif',
          color: "#fff", // White text for visibility
        }}
      >
        {displayText || "HEY THERE!"}
      </div>
    </div>
  );
}
