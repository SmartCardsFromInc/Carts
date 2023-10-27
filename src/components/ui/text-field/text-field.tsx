import { useState } from "react";

import s from "./text-field.module.scss";

export const TextField = () => {
  const [text, setText] = useState("I am SuperTextField ");

  return (
    <div>
      <input
        value={text}
        onClick={() => {
          setText("");
        }}
        onChange={(e) => {
          setText(e.currentTarget.value);
        }}
        className={s.input}
        type={"text"}
      />
    </div>
  );
};
