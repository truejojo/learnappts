import { useState, createContext, FC } from "react";
import { IChildren, IThemeContentCounter } from "../interfaces/interface";

const ThemeContentCounter = createContext({} as  IThemeContentCounter);

const ThemeContentCounterProvider: FC<IChildren> = ({children}) => {
  const [count, setCounter] = useState(0);

  const incrementCount = () => setCounter((prevCount: number) => prevCount + 1);

  return (
    <ThemeContentCounter.Provider value={{count, incrementCount}}>
      {children}
    </ThemeContentCounter.Provider>
  );
};

export { ThemeContentCounterProvider, ThemeContentCounter };
