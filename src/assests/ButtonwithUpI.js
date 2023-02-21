import React from "react";
import { Typography } from "@mui/material";
import JsonStrigify from "../component/JsonStrigify";

const Buttonwithupi = ({ data, radius, fontSize, RadioClick, Symbol }) => {
  const buttonHTML = `<button id='simpl_buynow-button' class='simpl-button-${
    data.Id
  } simpl-button'><div class='simpl-logo-container'><img class='simpl-logo' src='${
    Symbol === "Green"
      ? "https://simpl-cdn.s3.amazonaws.com/images/checkout/simpl-icon-1.png"
      : "https://simpl-cdn.s3.amazonaws.com/images/checkout/simpl-icon-3.png"
  }' />     </div>     <div class='simpl-button-text-group'>         <p class='simpl-buttonText simpl-button-text' style='margin:0' id='simpl-headingText'>${
    data.SimplText
  }</p>         <p class='simpl-buttonSubText simpl-button-subtext' style='margin:0' id='simpl-subText'>${
    data.SimplSubText
  }</p>     </div>     <div class='simpl-button-upi-icons'>         <img class='simpl-upi-icons' src='https://simpl-cdn.s3.amazonaws.com/images/checkout/upi.png'>         <span class='simpl-upi-more'>& more</span>     </div> </button>`;

  const styling = `
  .simpl-button-${
    data.Id
  } {padding: 8px;border-radius: ${radius}px;border: none;background: ${
    data.ButtonColor
  };justify-content:${
    RadioClick === "center" || RadioClick === "onlytext"
      ? "center"
      : "space-between"
  };display: flex;color: white;cursor: pointer;width: 100%;text-align: left;}
    
  .simpl-button-${
    data.Id
  } .simpl-logo-container { width: 48px; height: 48px;border-radius: 5px; ${
    RadioClick === "onlytext" ? "display:none;" : ""
  } }
  
  .simpl-button-${
    data.Id
  } .simpl-logo {margin-top: auto;margin-bottom: auto; width: 100%; height: 100%;object-fit: contain;}
  
  .simpl-button-${data.Id} .simpl-button-text-group { margin-right: ${
    RadioClick === "center" || RadioClick === "onlytext" ? "0" : "auto"
  }; padding-left: 8px; margin-top: auto; margin-bottom: auto;}
  
  .simpl-button-${
    data.Id
  } .simpl-button-text {font-size: ${fontSize}px;line-height: 25px; font-weight: 600; margin-bottom: 2px !important;color:${
    data.Text_Color
  }} 
  
  .simpl-button-${
    data.Id
  } .simpl-button-subtext {font-size: 14px;line-height: 17px;font-weight: 400;}
  
  .simpl-button-${data.Id} .simpl-button-upi-icons {display: ${
    RadioClick === "center" || RadioClick === "onlytext" ? "none" : "flex"
  };align-items: center;margin-top: auto;margin-bottom: auto; }

  .simpl-button-${data.Id} .simpl-button-upi-icons img {height: 32px;}
  
  .simpl-button-${data.Id} .simpl-upi-more {font-size: 10px;padding-left: 6px;}
  
  @media only screen and (max-width: 530px){
      .simpl-button-${data.Id} .simpl-upi-more{ display: none; }

      .simpl-button-${
        data.Id
      } .simpl-button-upi-icons .simpl-upi-icons {height: 24px;}

      .simpl-button-${
        data.Id
      } .simpl-button-text {font-size: 16px;line-height: 20px;} 
  
      .simpl-button-${
        data.Id
      } .simpl-button-subtext {font-size: 10px;line-height: 12px;font-weight: 400;}
  
      .simpl-button-${
        data.Id
      } .simpl-logo-container { width: 32px; height: 32px;}    
  }

  @container simpl-button-container (max-width: 530px){
      .simpl-button-${data.Id} .simpl-upi-more{ display: none; }

      .simpl-button-${
        data.Id
      } .simpl-button-upi-icons .simpl-upi-icons {height: 24px;}

      .simpl-button-${
        data.Id
      } .simpl-button-text {font-size: 16px;line-height: 20px;} 
  
      .simpl-button-${
        data.Id
      } .simpl-button-subtext {font-size: 10px;line-height: 12px;font-weight: 400;}
  
      .simpl-button-${
        data.Id
      } .simpl-logo-container { width: 32px; height: 32px;}    
  }

  @media only screen and (max-width: 380px){        
      .simpl-button-${
        data.Id
      } .simpl-logo-container { width: 28px; height: 28px;}

      .simpl-button-${
        data.Id
      } .simpl-button-text {font-size: 11px;line-height: 18px;} 
  
      .simpl-button-${
        data.Id
      } .simpl-button-subtext {font-size: 8px;line-height: 8px;}   
      
      .simpl-button-${
        data.Id
      } .simpl-button-upi-icons .simpl-upi-icons {height: 20px;}
  }

  @container simpl-button-container (max-width: 380px) {        
      .simpl-button-${
        data.Id
      } .simpl-logo-container { width: 28px; height: 28px;}

      .simpl-button-${
        data.Id
      } .simpl-button-text {font-size: 11px;line-height: 18px;} 
  
      .simpl-button-${
        data.Id
      } .simpl-button-subtext {font-size: 8px;line-height: 8px;}   
      
      .simpl-button-${
        data.Id
      } .simpl-button-upi-icons .simpl-upi-icons {height: 20px;}
  }

  @media only screen and (max-width: 300px){        
      .simpl-button-${data.Id} .simpl-button-upi-icons{ display: none;}    
  }

  @container simpl-button-container (max-width: 300px) {        
      .simpl-button-${data.Id} .simpl-button-upi-icons{ display: none;}    
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
        <div className="simpl-button-upi-icons">
          <img
            alt=""
            className="simpl-upi-icons"
            src="https://simpl-cdn.s3.amazonaws.com/images/checkout/upi.png"
          />
          <span className="simpl-upi-more">& more</span>
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
            Simpl Button API Value
          </Typography>

          <span style={{ fontSize: 13 }}>{print()}</span>
        </details>
      </div>
    </div>
  );
};

export default Buttonwithupi;
