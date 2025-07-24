import React from "react";

interface gameProps {
  gamer: string;
  onclicked: () => void;
}

function Game({ gamer, onclicked }: gameProps) {
  return (
    <>
      <div>{gamer}</div>
      <button onClick={onclicked}>update name</button>
    </>
  );
}

export default Game;
