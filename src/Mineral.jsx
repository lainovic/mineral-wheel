import React from "react";
import { excess_to_defficiencies } from "./data";

function Mineral({ symbol }) {
  return (
    <div
      onMouseOver={() => {
        console.log(
          `[DEBUG] Excess to deficiencies: ${excess_to_defficiencies[symbol]}`
        );
      }}
    >
      {symbol}
    </div>
  );
}

export default Mineral;
