import { useContext } from "react";
import { ThemeContent } from "../provider/ThemeContent";
import { IThemeContent } from "../interfaces/interface";
import ThemeChangeNote from "../assets/ThemeChangeNote";

const Theme = () => {
  const { toggleTheme, count } = useContext<IThemeContent>(ThemeContent);

  return (
    <section>
      <button onClick={toggleTheme}>Change Theme</button>
      <ThemeChangeNote count={count} />
    </section>
  );
};

export default Theme;
