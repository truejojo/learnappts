import { useContext } from "react";
import { ThemeContent } from "../provider/ThemeContent";
import { IThemeContent } from "../interfaces/interface";
import ThemeChangeNote from "../assets/ThemeChangeNote";

const Header = () => {
  const { theme, getCount } = useContext<IThemeContent>(ThemeContent);
  const styles = {
    color: theme,
  };

  return (
    <header>
      <h1 style={styles}>Welcome</h1>
      <ThemeChangeNote count={getCount()} />
    </header>
  );
};
export default Header;
