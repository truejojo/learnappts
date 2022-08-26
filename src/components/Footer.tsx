import { useContext } from "react";
import ThemeChangeNote from "../assets/ThemeChangeNote";
import { ThemeContentCounter } from "../provider/ThemeContentCounter";
import { StyleWrapper } from "./Styles";

const Footer = () => {
  const { getCount } = useContext(ThemeContentCounter);
  const styles = {
    width: '95%',
    maxWidth: '1080px',
    margin: '0 auto',
  };

  return (
    <StyleWrapper>
      <footer style={styles}>
        <p>Footer</p>
        <ThemeChangeNote count={getCount()} />
      </footer>
    </StyleWrapper>
  );
};

export default Footer;
