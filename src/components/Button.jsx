import React, { useEffect, useRef, useState } from "react";

const BUTTON_TEXT = {
  NORMAL: "버튼이 눌리지 않았다.",
  CLICKED: "버튼이 방금 눌렸다."
}

export default function Button() {
  const [messeage, setMessage] = useState(BUTTON_TEXT.NORMAL);
  const timer = useRef();

  useEffect(() => {
    return () => {
      if(timer.current) {
        clearTimeout(timer.current);
      }
    }
  }, []);

  return (
    <div>
      <button onClick={click} disabled={messeage === BUTTON_TEXT.CLICKED}>button</button>
      <p>{messeage}</p>
    </div>
  );

  function click() {
    setMessage(BUTTON_TEXT.CLICKED);
    timer.current = setTimeout(() => {
      setMessage(BUTTON_TEXT.NORMAL);
    }, 5000);
  }
}