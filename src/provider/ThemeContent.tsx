import { useState, createContext, useContext, FC } from "react";
import { IChildren } from "../interfaces/interface";
import { IThemeContent, IThemeContentCounter } from "../interfaces/interface";
import { ThemeContentCounter } from "./ThemeContentCounter";

const ThemeContent = createContext({} as IThemeContent);

const ThemeContentProvider: FC<IChildren> = ({ children }) => {
  const [theme, setTheme] = useState("orange");
  const [toggle, setToggle] = useState(true);

  const { incrementCount, count} = useContext<IThemeContentCounter>(ThemeContentCounter);

  const toggleTheme = () => {
    setToggle((prevToggle) => !prevToggle);
    setTheme(toggle ? 'green' : 'orange');
    incrementCount();
  };


  return (
    <ThemeContent.Provider value={{ theme, toggleTheme, count }}>
      {children}
    </ThemeContent.Provider>
  );
};

export { ThemeContentProvider, ThemeContent };
