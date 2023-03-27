import { useEffect, useState } from "react";
import Square from "./square";

const Board = () => {
  const [time, setTime] = useState(3);
  const [game, setGame] = useState([null, null, null, null, null, null, null, null, null]);
  const [player, setPlayer] = useState(true);
  console.log(game);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time - 1);
      if (time <= 0) {
        setTime(3);
        if (!player ? "X" : "O" && game.includes("X")) {
          const gameRun = game.reduce((g, checkdanh, index) => {
            if (checkdanh === null) {
              return [...g, index];
            }
            return g;
          }, []);
          const random = Math.floor(Math.random() * gameRun.length);
          const position = gameRun[random];

          const newGame = game.map((g, index) => {
            if (index === position) {
              return player ? "X" : "O";
            }
            return g;
          });

          setGame(newGame);
          setPlayer(!player);
        }
      }
    }, 500);
    if (checkWinner() || !game.includes(null) || !game.includes("X")) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [time, player, game]);

  const handlePlay = (position) => {
    if (checkWinner()) {
      return;
    }
    const newGame = game.map((g, index) => {
      if (index === position) {
        return player ? "X" : "O";
      }
      return g;
    });
    setGame(newGame);
    setPlayer(!player);
    setTime(3);
  }

  const listWinner = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = () => {
    for (let i = 0; i < listWinner.length; i++) {
      const [p1, p2, p3] = listWinner[i];
      if (game[p1] && game[p1] === game[p2] && game[p2] === game[p3]) {
        return game[p1];
      }
    }
    return null;
  };
  const winner = checkWinner();
  let check = "";
  let check1 = "";
  let check2 = "";
  if (winner) {
    if (player === true) {
      check1 = `Người chiến thắng : ${winner}`;
    } else if (player === false) {
      check2 = `Người chiến thắng : ${winner}`;
    }
  } else if (!game.includes(null)) {
    check = "Hòa";
  } else {
    check = `Next: ${player ? "X" : "O"}`;
  }
  const Reset = () => {
    setGame(game.fill(null));
    setPlayer(player ? "X" : "O");
    setTime(3);
    return;
  }
  return (
    <>
      <div className="grid grid-cols-2 gap-20">
      </div>
      <button onClick={Reset}>Reset</button>
      <h2>{time}</h2>
      <h2>{check}</h2>
      <h2 className="text-blue-600">{check1}</h2>
      <h2 className="text-red-600">{check2}</h2>
      <div className="grid grid-cols-3 gap-2 w-[240px]">
        <Square value={game[0]} position={0} handlePlay={handlePlay} />
        <Square value={game[1]} position={1} handlePlay={handlePlay} />
        <Square value={game[2]} position={2} handlePlay={handlePlay} />
        <Square value={game[3]} position={3} handlePlay={handlePlay} />
        <Square value={game[4]} position={4} handlePlay={handlePlay} />
        <Square value={game[5]} position={5} handlePlay={handlePlay} />
        <Square value={game[6]} position={6} handlePlay={handlePlay} />
        <Square value={game[7]} position={7} handlePlay={handlePlay} />
        <Square value={game[8]} position={8} handlePlay={handlePlay} />
      </div>
    </>
  );
};

export default Board;