import { useContext } from "react";
import ThemeChangeNote from "../assets/ThemeChangeNote";
import { ThemeContentCounter } from "../provider/ThemeContentCounter";

const Footer = () => {
  const { getCount } = useContext(ThemeContentCounter);
  return (
    <footer>
      <p>Footer</p>
      <ThemeChangeNote count={getCount()} />
    </footer>
  );
};

export default Footer;
