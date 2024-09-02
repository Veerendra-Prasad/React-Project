import { useEffect, useState } from "react";
import Dice from "./Dice";

function Tenzies() {
  const [array, setArray] = useState(newbox);
  const [won, setWon] = useState(false);

  function newbox() {
    const newarray = [];
    for (let index = 0; index <= 3; index++) {
      const number = Math.ceil(Math.random() * 6);
      const newitem = {
        id: index,
        held: false,
        number: number,
      };
      newarray.push(newitem);
    }
    return newarray;
  }

  function roll() {
    setArray((oldarray) => {
      return oldarray.map((item) => {
        return item.held
          ? item
          : { ...item, number: Math.ceil(Math.random() * 6) };
      });
    });
  }

  function hold(id) {
    const newarray = array.map((item) => {
      if (item.id === id) {
        const newitem = { ...item, held: !item.held };
        return newitem;
      }
      return item;
    });
    setArray(newarray);
  }

  function checkWon() {
    const winner = array.filter((item) => item.held);
    if (winner.length > 0) {
      const chosen = winner[0].number;
      let count = 0;
      for (let index = 0; index < winner.length; index++) {
        if (winner[index].number === chosen) {
          count++;
        }
      }
      if (count === array.length) {
        setWon(true);
      }
    }
  }

  function newgame(){
    setArray(newbox)
    setWon(false)
  }

  useEffect(() => {
    checkWon();
  }, [array]);

  return (
    <div className="w-full h-screen">
      <h1 className="w-full py-5 flex justify-center items-center font-semibold text-3xl">
        Tenzies
      </h1>
      <div className="w-full flex flex-col gap-3 justify-center items-center">
        <div className="w-full sm:w-1/3 flex flex-col justify-center items-center py-2 rounded-md bg-slate-100">
          <h3 className="font-semibold text-xl p-2">Roll the Dice</h3>
          <p className="w-2/3 text-center py-5 mb-5">
            Roll the Dices until all the dices contain the same number press the
            button to start rolling the dice
          </p>
          <div className="w-2/3 grid grid-rows-1 grid-cols-4 gap-3">
            {array.map((item) => {
              return (
                <Dice
                  number={item.number}
                  held={item.held}
                  hold={hold}
                  id={item.id}
                  key={item.id}
                />
              );
            })}
          </div>
          <div className="w-full flex justify-center items-center p-10">
            <button
              className="w-28 h-9 bg-sky-500 text-white rounded-md border-2 border-black hover:border-sky-400 hover:bg-gray-100 hover:text-black hover:font-semibold"
              onClick={won ? newgame : roll}
            >
              {won ? "Play Again" : "Roll the Dice"}
            </button>
          </div>
          <div>{won && <h1>Won</h1>}</div>
        </div>
      </div>
    </div>
  );
}

export default Tenzies;
