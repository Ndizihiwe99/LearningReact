import React, { type ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
  children: ReactNode;
  //color?: "primary" | "success";
  onclick: () => void;
}

const Submitt = styled.button`
  background: red;
`;

function Button({ children, onclick }: ButtonProps) {
  return <Submitt onClick={onclick}>{children}</Submitt>;
}

export default Button;
