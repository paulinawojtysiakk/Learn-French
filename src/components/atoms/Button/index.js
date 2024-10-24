import * as React from "react";
import Button from "@mui/material/Button";

const ButtonText = ({ variant, text, color, ...props }) => (
  <Button variant={variant} color={color} {...props}>
    {text}
  </Button>
);

// const ButtonText = (props) => {
//   const { variant, text } = props;
//   return <Button variant={variant}>{text}</Button>;
// };

export default ButtonText;
