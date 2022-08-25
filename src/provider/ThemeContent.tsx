import { useState, createContext, useContext, FC } from "react";
import { IChildren } from "../interfaces/interface";
import { IThemeContent, IThemeContentCounter } from "../interfaces/interface";
import { ThemeContentCounter } from "./ThemeContentCounter";
import useToggler from "../hooks/useToggler";


const ThemeContent = createContext({} as IThemeContent);

const ThemeContentProvider: FC<IChildren> = ({ children }) => {
  const [theme, setTheme] = useState("orange");
  const { isToggle, getToggler } = useToggler();

  const { increment, getCount } =
    useContext<IThemeContentCounter>(ThemeContentCounter);

  const toggleTheme = () => {
    getToggler();
    setTheme(isToggle() ? "green" : "orange");
    increment();
  };

  return (
    <ThemeContent.Provider value={{ theme, toggleTheme, getCount }}>
      {children}
    </ThemeContent.Provider>
  );
};

export { ThemeContentProvider, ThemeContent };
