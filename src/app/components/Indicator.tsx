import * as React from "react";

// @ts-ignore
import check from "../icons/check.png";
import { launchPiecesOS } from "../utils/launchPiecesOS";

interface IndicatorProps{
  isConnected: boolean
}

export function Indicator({isConnected}:IndicatorProps): React.JSX.Element {
  return (
    <>
      <div style={{ display: "inherit", justifyContent: 'center', alignItems: 'center' }}>
        <button style={{background:"transparent", border: '1px solid black'}}>
          <div id={"indicator"} style={{ backgroundColor: isConnected?"Green":"red" , height: '24px', borderRadius: '20px', border: '1px solid black', padding: '4px 10px', display: 'flex', flexWrap: 'wrap', alignItems: 'center'  }} onClick={launchPiecesOS}>
            <span id={"indicator_text"} style={{ color: "white", fontSize: '14px' }}>{isConnected?"You're Connected":"You're Not Connected"  }</span>
            <img id={"checkmark"} src={check} alt={"checkmark"} style={{height: "20px", width: '20px', margin: '0 5px'}}/>
          </div>
        </button>
      </div>
    </>
  );
}