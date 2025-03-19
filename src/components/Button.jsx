import {UseButtonStyle} from "../theme/ThemeContext"
import React from "react";


const Button = () => {
  const {changeStyle} = UseButtonStyle();

  return <button onClick={changeStyle}>Cambiar Tema</button>;
};

export default Button;
