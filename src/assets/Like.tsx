import styled from "styled-components";
import useToggler from "../hooks/useToggler";

const Like = () => {
  const { isToggle, getToggler } = useToggler();

  const Wrapper = styled.div`
    font-size: ${() => (isToggle() ? "35px" : "18px")};

    span {
      margin: 0.5em;
    }
    button {
      font-size: 16px;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: ${() => (!isToggle() ? "red" : "black")};
      padding: 10px 25px;
      border: none;
      border-radius: 5px;
      background-color: orange;

      &:hover {
        background-color: green;
      }
    }
  `;

  return (
    <Wrapper>
      <button onClick={getToggler}>{!isToggle() ? "love" : "hate"}</button>
      <span>{isToggle() ? "❤️" : "🖤"}</span>
    </Wrapper>
  );
};

export default Like;
