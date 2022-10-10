/* eslint-disable import/extensions */
import knightMoves from "./knightTravails.js";

const getRandomNumber = (max) => Math.floor(Math.random() * max);
function getRandomMove() {
  const start = [getRandomNumber(7), getRandomNumber(7)];
  const end = [getRandomNumber(7), getRandomNumber(7)];
  return { start, end };
}

const { start, end } = getRandomMove();

knightMoves(start, end);
knightMoves(start, end, (path) => console.log(path, "callbackk"));
