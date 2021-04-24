import { useState } from "react";

export const useSaveData = (keyLocal) => {
  const [arrSaveLocal, setArrSaveLocal] = useState(
    JSON.parse(localStorage.getItem(keyLocal)) || []
  );

  localStorage.setItem(keyLocal, JSON.stringify(arrSaveLocal));
  return [arrSaveLocal, setArrSaveLocal];
};