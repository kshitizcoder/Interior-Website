import React from "react";

const Button = ({ Style, Text, Icon }) => {
  return (
    <>
      <a href="/" className={Style}>
        {Text} {Icon}
      </a>
    </>
  );
};

export default Button;
