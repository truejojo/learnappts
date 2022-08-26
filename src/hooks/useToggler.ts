import { useState } from "react";

const useToggler = (defaultValue = true) => {
  const [toggle, setToggle] = useState(defaultValue);

  const getToggler = () => setToggle(prevToggle => !prevToggle);

  const isToggle = () => toggle;

  return { isToggle, getToggler};
};

export default useToggler;
