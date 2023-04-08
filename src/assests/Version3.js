import React, { useState } from "react";
import JsonStrigify from "../component/JsonStrigify";
import { Typography } from "@mui/material";
import CopyPaste from "../component/CopyPaste";

const Version3 = ({ data, BorderR, fntsz, padding, symBol, disFnt }) => {
  const [text, getText] = useState("");
  const Top = `<div class='promo-text-container simpl-button-v3-variables' style=${
    data.Discountdiv === "hide" ? "display:none;" : "display:block;"
  }>
  <div class='promo-text' style='border-top-left-radius: 4px; border-top-right-radius: 4px;font-size:${disFnt}px;'>${
    data.DiscountText
  }</div></div> `;
  const Bottom = `<div class='promo-text-container simpl-button-v3-variables' style=${
    data.Discountdiv === "hide" ? "display:none;" : "display:block;"
  }>
    <div class='promo-text' style='border-bottom-left-radius: 4px; border-bottom-right-radius: 4px;font-size:${disFnt}px;'>${
    data.DiscountText
  }</div></div> `;

  const Styling = ` 
  .simpl-button-v3-variables { --simpl-button-v3-textColor: ${
    data.Text_Color
  }; --simpl-button-v3-backgroundColor: ${
    data.ButtonColor
  }; --simpl-button-v3-borderRadius: ${BorderR}px; --simpl-button-v3-hoverTextColor: #ffffff; --simpl-button-v3-hoverbackgroundColor: ${
    data.Hover === "No" ? data.ButtonColor : data.HoverColor
  }; --simpl-button-v3-promoTextbackgroundColor: ${
    data.DiscountBackgrnd
  }; --simpl-button-v3-promoTextColor: ${data.DiscountTextColor}; }
  .simpl-button-v3 { width: 100%; padding: ${padding}px; font-size: ${fntsz}px; ${
    data.Font_Weight !== 0 ? `font-weight:${data.Font_Weight};` : ""
  } background-color: var(--simpl-button-v3-backgroundColor); color: var(--simpl-button-v3-textColor); border-radius: var(--simpl-button-v3-borderRadius); cursor: pointer; display: inline-flex; align-items: center; white-space: nowrap; border: none; }
  .simpl-button-v3:hover { color: var(--simpl-button-v3-hoverTextColor); background-color: var(--simpl-button-v3-hoverbackgroundColor); }
  .simpl-button-v3 .left-section { }
  .simpl-button-v3 .center-section { display: inline-flex; justify-content: center; align-items: center; }
  .simpl-button-v3 .center-section img { height: ${symBol}px; padding-right: 5px;padding-bottom:2px;}
  .simpl-button-v3 .right-section { text-align: right; }.simpl-button-v3 .right-section img { height: 24px; }
  .promo-text-container { display: block; width: 50%; margin: auto; text-align: center; }
  .promo-text { color: var(--simpl-button-v3-promoTextColor); background: var(--simpl-button-v3-promoTextbackgroundColor); font-size: 10px; }.break-point-380 
  .simpl-button-v3 { font-size: 12px; padding: 6px; }.break-point-380 .simpl-button-v3 .center-section img { height: 14px; }.break-point-380 
  .simpl-button-v3 .right-section img { height: 20px; }.break-point-380 .promo-text-container { margin-top: -3px; margin-bottom: -4px; }.break-point-380 
  .promo-text { font-size: 10px; }.break-point-330 .simpl-button-v3 { font-size: 10px; padding: 5px; }.break-point-330 .simpl-button-v3 .center-section img { height: 10px; }.break-point-330 
  .simpl-button-v3 .right-section img { height: 16px; }.break-point-330 
  .simpl-button-v3 .right-section { display: block; }.break-point-330 
  .promo-text-container { margin-top: -3px; margin-bottom: -4px; }.break-point-330 
  .promo-text { font-size: 8px; }.break-point-270 .simpl-button-v3 { font-size: 10px; padding: 5px; }.break-point-270 
  .simpl-button-v3 .center-section img { height: 10px; }.break-point-270 .simpl-button-v3 .right-section img { height: 16px; }.break-point-270 
  .simpl-button-v3 .right-section { display: none; }.break-point-270 .promo-text-container { width: 90%; }.break-point-270 
  .promo-text-container { margin-top: -3px; margin-bottom: -4px; }.break-point-270 .promo-text { font-size: 8px; }
  `;

  const btnString = `${
    data.PostiionDiscount === "Top" ? Top : " "
  } <button id='simpl_buynow-button' class='simpl-button-v3-variables simpl-button-v3 simpl-button'>     <div class='left-section' style='width: 25%; display: inline-flex;'></div>     <div class='center-section' style='width: 50%;'>       <img src='https://simpl-cdn.s3.amazonaws.com/images/checkout/SimplLogo.svg' style=${
    data.SimplLogo === "hide" ? "display:none;" : "display:block"
  }>    ${data.Text}</div>     <div class='right-section' style=${
    data.SimplProp === "hide" ? "display:none;" : "width:25%;"
  }>       <img alt='right section image' src=${
    data.SimplProp_v === "Chevron"
      ? "https://simpl-cdn.s3.amazonaws.com/images/checkout/chaveron.png"
      : "https://simpl-cdn.s3.amazonaws.com/images/checkout/upi.png"
  }>     </div>   </button>  ${
    data.PostiionDiscount === "Bottom" ? Bottom : " "
  }  <div style='display: none;' id='simpl-breakpoints' data-breakpoints='270,330,380'></div>  `;

  const value = "<style>" + Styling + "</style>" + btnString;
  const words = JsonStrigify(value);

  return (
    <div>
      <style>{Styling}</style>
      {data.PostiionDiscount === "Top" ? (
        <div dangerouslySetInnerHTML={{ __html: Top }} />
      ) : (
        ""
      )}
      <button
        id="simpl_buynow-button"
        className="simpl-button-v3-variables simpl-button-v3 simpl-button"
      >
        <div
          className="left-section"
          Style="width: 25%; display: inline-flex;"
        ></div>
        <div className="center-section" Style="width: 50%;">
          <img
            alt=""
            src="https://simpl-cdn.s3.amazonaws.com/images/checkout/SimplLogo.svg"
            Style={`${
              data.SimplLogo === "hide" ? "display:none;" : "display:block"
            }`}
          />
          {data.Text}
        </div>
        <div
          className="right-section"
          Style={data.SimplProp === "hide" ? "display:none;" : "width: 25%;"}
        >
          <img
            alt="right section image"
            src={
              data.SimplProp_v === "Chevron"
                ? "https://simpl-cdn.s3.amazonaws.com/images/checkout/chaveron.png"
                : "https://simpl-cdn.s3.amazonaws.com/images/checkout/upi.png"
            }
          />
        </div>
      </button>
      <div
        Style="display: none;"
        id="simpl-breakpoints"
        data-breakpoints="270,330,380"
      ></div>

      <div></div>
      {data.PostiionDiscount === "Bottom" ? (
        <div dangerouslySetInnerHTML={{ __html: Bottom }} />
      ) : (
        ""
      )}
      <div
        Style="display: none;"
        id="simpl-breakpoints"
        data-breakpoints="270,330,380"
      ></div>

      <br />
      <CopyPaste text={words} />
    </div>
  );
};

export default Version3;
