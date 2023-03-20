export const getRandomLottoNumbers = () => {
  const randomNumbers = [];

  while (randomNumbers.length < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    const hasNumber =
      randomNumbers.filter((prev) => prev === randomNumber).length > 0;

    if (!hasNumber) {
      randomNumbers.push(randomNumber);
    }
  }
  return randomNumbers.sort((a, b) => a - b);
};
