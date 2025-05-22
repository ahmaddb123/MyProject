import React from "react";
import "./Explain.css";
import { RxQuestionMarkCircled } from "react-icons/rx";

function Explain({ text }: { text: string }) {
  return (
    <div className="Explain" title={text}>
      <RxQuestionMarkCircled />
    </div>
  );
}

export default Explain;
