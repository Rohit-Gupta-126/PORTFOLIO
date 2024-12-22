"use client";
import { useEffect, useRef, useState } from "react";
// import "/src/app/globals.css";

export default function Loader() {
  const [isLoading, setIsLoading] = useState(true);
  const [displayText, setDisplayText] = useState(""); // State for current text display
  const loaderRef = useRef(null);
  const scrambleElementRef = useRef(null);

  const solveMilliseconds = 800; // Time to reveal the correct character
  const characterSelectionMilliseconds = 100; // Interval for random characters
  const delayMilliseconds = 280; // Delay between each character reveal
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

    // Cleanup for intervals and timeouts
    return () => {
      setIsLoading(false);
    };
  }, []);

  return (
    <div
      className="loader-wrapper"
      ref={loaderRef}
      style={{
        transition: isLoading ? "none" : "opacity 1s ease, transform 1s ease",
        opacity: isLoading ? "1" : "0",
        transform: isLoading ? "scale(1)" : "scale(0.9)",
        display: isLoading ? "flex" : "none",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full height for centering
        backgroundColor: "#000", // Black background
      }}
    >
      <div
        className="loader-text"
        ref={scrambleElementRef}
        style={{
          fontSize: "2rem",
          fontWeight: "medium",
          fontFamily: 'Broken-Mirror, sans-serif',
          color: "#fff", // White text for visibility on black background
        }}
      >
        {displayText || "HEY THERE!"}
      </div>
    </div>
  );
}
