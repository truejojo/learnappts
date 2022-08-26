import { useState, createContext, useContext, useEffect, FC } from "react";
import { IChildren } from "../interfaces/interface";
import { IThemeContent, IThemeContentCounter } from "../interfaces/interface";
import { ThemeContentCounter } from "./ThemeContentCounter";
import useToggler from "../hooks/useToggler";

const ThemeContent = createContext({} as IThemeContent);

const ThemeContentProvider: FC<IChildren> = ({ children }) => {
  const [theme, setTheme] = useState("");
  const { isToggle, getToggler } = useToggler(false);

  useEffect(() => {
    setTheme(isToggle() ? "orange" : "green");
  }, [isToggle]);

  const { increment, getCount } =
    useContext<IThemeContentCounter>(ThemeContentCounter);

  const toggleTheme = () => {
    getToggler();
    increment();
  };

  return (
    <ThemeContent.Provider value={{ theme, toggleTheme, getCount }}>
      {children}
    </ThemeContent.Provider>
  );
};

export { ThemeContentProvider, ThemeContent };
