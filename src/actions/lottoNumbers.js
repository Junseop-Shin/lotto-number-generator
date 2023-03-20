import { getRandomLottoNumbers } from "../utils/Utils";

export const CREATE_NEW_NUMBERS = "CREATE_NEW_NUMBERS";

export const createNewNumbers = () => {
  const numbers = getRandomLottoNumbers();
  return {
    type: CREATE_NEW_NUMBERS,
    numbers,
  };
};
