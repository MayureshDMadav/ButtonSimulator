import React from "react";
import { Typography } from "@mui/material";
import JsonStrigify from "../component/JsonStrigify";

const Buttonwithprop = ({ data, radius, fontSize, Radio, Symbol }) => {
  const buttonHTML = `
  <button id='simpl_buynow-button' class='simpl-button-${
    data.Id
  } simpl-button'><div class='simpl-logo-container'><img class='simpl-logo' src='${
    Symbol === "Green"
      ? "https://simpl-cdn.s3.amazonaws.com/images/checkout/simpl-icon-1.png"
      : "https://simpl-cdn.s3.amazonaws.com/images/checkout/simpl-icon-3.png"
  }' /></div><div class='simpl-button-text-group'><p class='simpl-buttonText simpl-button-text' style='margin:0' id='simpl-headingText'>${
    data.SimplText
  }</p>             <p class='simpl-buttonSubText simpl-button-subtext' style='margin:0' id='simpl-subText'>${
    data.SimplSubText
  }</p>         </div>         <div class='simpl-button-value-prop-icons-group'>             <div>                 <img class='simpl-value-prop-icons' src='https://simpl-cdn.s3.amazonaws.com/images/checkout/value3a.png'>                 <span class='simpl-value-prop-text'>Instant Checkout</span>             </div>             <div>                 <img class='simpl-value-prop-icons' src='https://simpl-cdn.s3.amazonaws.com/images/checkout/value3b.png'>                 <span class='simpl-value-prop-text'>Track your orders</span>             </div>             <div>                 <img class='simpl-value-prop-icons' src='https://simpl-cdn.s3.amazonaws.com/images/checkout/value3c.png'><span class='simpl-value-prop-text'>Safe and secure</span></div> </div> </button>`;

  const styling = `
  .simpl-button-${
    data.Id
  } {padding: 8px;border-radius: ${radius}px;border: none;background: ${
    data.ButtonColor
  };justify-content: ${
    Radio === "center" || Radio === "onlytext" ? "center" : "space-between"
  };display: flex;color: white;cursor: pointer;width: 100%;text-align: left;}
    
  .simpl-button-${data.Id} 
  
  .simpl-logo-container { display:${
    Radio === "onlytext" && Radio !== "center" ? "none;" : ""
  }width: 48px; height: 48px;border-radius: 5px;margin: auto 0;}
  
  .simpl-button-${
    data.Id
  } .simpl-logo {margin-top: auto;margin-bottom: auto; width: 100%; height: 100%;object-fit: contain;}
  
  .simpl-button-${data.Id} .simpl-button-text-group { margin-right:${
    Radio === "center" || Radio === "onlytext" ? "0" : "auto"
  }; padding-left: 8px; margin-top: auto; margin-bottom: auto;}
  
  .simpl-button-${
    data.Id
  } .simpl-button-text {font-size: ${fontSize}px;line-height: 25px; font-weight: 600; margin-bottom: 2px !important;color:${
    data.Text_Color
  };} 
  
  .simpl-button-${
    data.Id
  } .simpl-button-subtext {font-size: 14px;line-height: 17px;font-weight: 400;color:${
    data.Text_Color
  };}
  
  .simpl-button-${data.Id} 
  
  .simpl-button-value-prop-icons-group {display: ${
    Radio === "center" || Radio === "onlytext" ? "none" : "flex"
  };align-items: center;margin-top: auto;margin-bottom: auto; text-align: center;max-width: 190px;}

  .simpl-button-${
    data.Id
  } .simpl-button-value-prop-icons-group div {display: flex; flex-direction: column; align-items: center; padding: 0 4px;}

  .simpl-button-${
    data.Id
  } .simpl-button-value-prop-icons-group div img { width: 24px; height: 24px;;}

  .simpl-button-${
    data.Id
  } .simpl-button-value-prop-icons-group div span {word-break: break-word;width: 50px;}
  
  .simpl-button-${data.Id} .simpl-value-prop-text {font-size: 10px;}

  @media only screen and (max-width: 590px){
      .simpl-button-${
        data.Id
      } .simpl-logo-container { width: 32px; height: 32px;}

      .simpl-button-${
        data.Id
      } .simpl-button-text {font-size: 16px;line-height: 20px;} 
  
      .simpl-button-${
        data.Id
      } .simpl-button-subtext {font-size: 10px;line-height: 12px;font-weight: 400;}

      .simpl-button-${
        data.Id
      } .simpl-button-value-prop-icons-group div span {width: auto;}

      .simpl-button-${
        data.Id
      } .simpl-button-value-prop-icons-group div { margin: -5px 0 }; 

      .simpl-button-${
        data.Id
      } .simpl-button-value-prop-icons-group div img { width: 22px; height: 22px;}
  }

  @container simpl-button-container (max-width: 590px) {
      .simpl-button-${
        data.Id
      } .simpl-logo-container { width: 32px; height: 32px;}

      .simpl-button-${
        data.Id
      } .simpl-button-text {font-size: 16px;line-height: 20px;} 
  
      .simpl-button-${
        data.Id
      } .simpl-button-subtext {font-size: 10px;line-height: 12px;font-weight: 400;}

      .simpl-button-${
        data.Id
      } .simpl-button-value-prop-icons-group div span {width: auto;}

      .simpl-button-${
        data.Id
      } .simpl-button-value-prop-icons-group div { margin: -5px 0 }; 

      .simpl-button-${
        data.Id
      } .simpl-button-value-prop-icons-group div img { width: 22px; height: 22px;}
  }

  @media only screen and (max-width: 510px){
      .simpl-button-${
        data.Id
      } .simpl-button-value-prop-icons-group div:nth-child(n+2) { display: none; }
  }

  @container simpl-button-container (max-width: 510px) {
      .simpl-button-${
        data.Id
      } .simpl-button-value-prop-icons-group div:nth-child(n+2) { display: none; }
  }

  @media only screen and (max-width: 410px){
      .simpl-button-${
        data.Id
      } .simpl-button-text {font-size: 12px;line-height: 20px;} 
  }

  @container simpl-button-container (max-width: 410px) {
      .simpl-button-${
        data.Id
      } .simpl-button-text {font-size: 12px;line-height: 20px;} 
  }

  @media only screen and (max-width: 340px){
      .simpl-button-${
        data.Id
      } .simpl-button-value-prop-icons-group{ display: none; }        
  }

  @container simpl-button-container (max-width: 340px) {
      .simpl-button-${
        data.Id
      } .simpl-button-value-prop-icons-group{ display: none; }        
  }

  @media only screen and (max-width: 260px){
      .simpl-button-${
        data.Id
      } .simpl-button-text {font-size: 11px; line-height: 18px} 
      .simpl-button-${data.Id} .simpl-button-subtext {font-size: 8px;}
      .simpl-button-${
        data.Id
      } .simpl-logo-container { width: 28px; height: 28px;}
  }

  @container simpl-button-container (max-width: 260px) {
      .simpl-button-${
        data.Id
      } .simpl-button-text {font-size: 11px; line-height: 18px} 
      .simpl-button-${data.Id} .simpl-button-subtext {font-size: 8px;}
      .simpl-button-${
        data.Id
      } .simpl-logo-container { width: 28px; height: 28px;}
  }
  
  .simpl-button-container {
      container-type: inline-size;
      container-name: simpl-button-container;
      margin: 1rem 0;
  }
  
  `;

  const print = () => {
    const value = buttonHTML + "<style>" + styling + "</style>";
    return <span> {JsonStrigify(value)} </span>;
  };

  return (
    <div>
      <style>{styling}</style>
      <button
        id="simpl_buynow-button"
        className={`simpl-button-${data.Id} simpl-button`}
      >
        <div className="simpl-logo-container">
          <img
            alt=""
            className="simpl-logo"
            src={`${
              Symbol === "Black"
                ? "https://simpl-cdn.s3.amazonaws.com/images/checkout/simpl-icon-3.png"
                : "https://simpl-cdn.s3.amazonaws.com/images/checkout/simpl-icon-1.png"
            }`}
          />
        </div>
        <div className="simpl-button-text-group">
          <p
            className="simpl-buttonText simpl-button-text"
            Style="margin:0"
            id="simpl-headingText"
          >
            {data.SimplText}
          </p>
          <p
            className="simpl-buttonSubText simpl-button-subtext"
            Style="margin:0"
            id="simpl-subText"
          >
            {data.SimplSubText}
          </p>
        </div>
        <div className="simpl-button-value-prop-icons-group">
          <div>
            <img
              alt=""
              className="simpl-value-prop-icons"
              src="https://simpl-cdn.s3.amazonaws.com/images/checkout/value3a.png"
            />
            <span className="simpl-value-prop-text">Instant Checkout</span>
          </div>
          <div>
            <img
              alt=""
              className="simpl-value-prop-icons"
              src="https://simpl-cdn.s3.amazonaws.com/images/checkout/value3b.png"
            />
            <span className="simpl-value-prop-text">Track your orders</span>
          </div>
          <div>
            <img
              alt=""
              className="simpl-value-prop-icons"
              src="https://simpl-cdn.s3.amazonaws.com/images/checkout/value3c.png"
            />
            <span className="simpl-value-prop-text">Safe and secure</span>
          </div>
        </div>
      </button>
      <br />
      <br />
      <div>
        <details>
          <Typography
            variant="h6"
            sx={{ marginBottom: "2px", fontFamily: "Pacifico,cursive" }}
          >
            Simpl Button String Value
          </Typography>

          <span style={{ fontSize: 12 }}>{print()}</span>
        </details>
      </div>
    </div>
  );
};

export default Buttonwithprop;
