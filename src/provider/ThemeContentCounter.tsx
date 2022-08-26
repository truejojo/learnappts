import { createContext, FC } from "react";
import { IChildren, IThemeContentCounter } from "../interfaces/interface";
import useCounter from "../hooks/useCounter";

const ThemeContentCounter = createContext({} as IThemeContentCounter);

const ThemeContentCounterProvider: FC<IChildren> = ({ children }) => {
  const { increment, getCount } = useCounter(1);

  return (
    <ThemeContentCounter.Provider value={{ increment, getCount }}>
      {children}
    </ThemeContentCounter.Provider>
  );
};

export { ThemeContentCounterProvider, ThemeContentCounter };
