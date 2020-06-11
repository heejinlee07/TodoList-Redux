import React from "react";
import "./Button.css";

function Button({ children, ...rest }) {
  return (
    <button {...rest} className="ButtonStyle">
      {children}
    </button>
  );
}
export default Button;

/**
 children 외의 것들(앞에 선언한 것을 제외한 나머지)도 다 가져온다.
 * obj = { a: 1, b: 2, c: 3, hello: 'world' }
 * const { a, c, ...rest } = obj;
 */
