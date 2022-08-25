import { useState } from "react";

const useToggler = () => {
  const [toggle, setToggle] = useState(true);

  const getToggler = () => setToggle(prevToggle => !prevToggle);

  const isToggle = () => toggle;

  return { isToggle, getToggler};
};

export default useToggler;
