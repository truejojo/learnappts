import { useContext } from "react";
import { ThemeContent } from "../provider/ThemeContent";
import { IThemeContent } from "../interfaces/interface";
import ThemeChangeNote from "../assets/ThemeChangeNote";

const Theme = () => {
  const { toggleTheme, getCount } = useContext<IThemeContent>(ThemeContent);

  return (
    <section>
      <button onClick={toggleTheme}>Change Theme</button>
      <ThemeChangeNote count={getCount()} />
    </section>
  );
};

export default Theme;
