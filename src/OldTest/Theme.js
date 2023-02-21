import { React, useState } from "react";
import "../component/Style.css";

const Theme = () => {
  const [setnum, getnum] = useState(8);
  const [setFntSz, getFntSz] = useState(20);
  const [setValue, getValue] = useState({
    id: "",
    simplButtonTxt: "Enter The Text",
    simplButtonSubTxt: "Enter The SubText",
    backGround: "black",
    TextAlign: "margin-right:auto;margin-left:0;",
    TextColor: "white",
    btnTextweight: "600",
    SimplIcon: "",
    SimplProps: "",
    ButtonCenter: "space-between",
  });

  const buttonHTML = ``;

  const styling = `
  .simpl-button-${
    setValue.id
  } {padding: 8px;border-radius: ${setnum}px ;border: none;background: ${
    setValue.backGround
  };justify-content: ${
    setValue.ButtonCenter
  };display: flex;color: white;cursor: pointer;width: 100%;text-align: left;}
    
  .simpl-button-${setValue.id} .simpl-logo-container { ${
    setValue.SimplIcon >= "0" ? setValue.SimplIcon : ""
  }; width: 48px; height: 48px;border-radius: 5px;}
  
  .simpl-button-${
    setValue.id
  } .simpl-logo { margin-top: auto;margin-bottom: auto; width: 100%; height: 100%;object-fit: contain;}
  
  .simpl-button-${
    setValue.id
  } .simpl-button-text-group { padding-left: 8px; margin-top: auto; margin-bottom: auto; ${
    setValue.TextAlign
  } }
  
  .simpl-button-${
    setValue.id
  } .simpl-button-text {font-size: ${setFntSz}px;line-height: 25px; font-weight: ${
    setValue.btnTextweight
  }; margin-bottom: 2px !important;color:${setValue.TextColor};  } 
  
  .simpl-button-${
    setValue.id
  } .simpl-button-subtext {font-size: 14px;line-height: 17px;font-weight: 400;color:${
    setValue.TextColor
  };}
  
  .simpl-button-${setValue.id} .simpl-button-upi-icons {${
    setValue.SimplProps === "none" ? "visibility:hidden;" : "display:flex;"
  } align-items: center;margin-top: auto;margin-bottom: auto; }

  .simpl-button-${setValue.id} .simpl-button-upi-icons img {height: 32px;}
  
  .simpl-button-${
    setValue.id
  } .simpl-upi-more {font-size: 10px;padding-left: 6px;}
  
  @media only screen and (max-width: 470px){
      .simpl-button-${setValue.id} .simpl-upi-more{ display: none; }

      .simpl-button-${
        setValue.id
      } .simpl-button-upi-icons .simpl-upi-icons {height: 24px;}

      .simpl-button-${
        setValue.id
      } .simpl-button-text {font-size: 16px;line-height: 20px;} 

      .simpl-button-${
        setValue.id
      } .simpl-button-subtext {font-size: 10px;line-height: 12px;font-weight: 400;}

      .simpl-button-${
        setValue.id
      } .simpl-logo-container { width: 32px; height: 32px;}
  }

  @container simpl-button-container (max-width: 470px) {
      .simpl-button-${setValue.id} .simpl-upi-more{ display: none; }

      .simpl-button-${
        setValue.id
      } .simpl-button-upi-icons .simpl-upi-icons {height: 24px;}

      .simpl-button-${
        setValue.id
      } .simpl-button-text {font-size: 16px;line-height: 20px;} 

      .simpl-button-${
        setValue.id
      } .simpl-button-subtext {font-size: 10px;line-height: 12px;font-weight: 400;}

      .simpl-button-${
        setValue.id
      } .simpl-logo-container { width: 32px; height: 32px;}
  }

  @media only screen and (max-width: 310px) {        
      .simpl-button-${
        setValue.id
      } .simpl-logo-container { width: 28px; height: 28px;}

      .simpl-button-${
        setValue.id
      } .simpl-button-text {font-size: 11px;line-height: 18px;} 
      
      .simpl-button-${
        setValue.id
      } .simpl-button-subtext {font-size: 8px;line-height: 8px;}   
          
      .simpl-button-${
        setValue.id
      } .simpl-button-upi-icons .simpl-upi-icons {height: 20px;}
  }

  @container simpl-button-container (max-width: 310px) {        
      .simpl-button-${
        setValue.id
      } .simpl-logo-container { width: 28px; height: 28px;}

      .simpl-button-${
        setValue.id
      } .simpl-button-text {font-size: 11px;line-height: 18px;} 
      
      .simpl-button-${
        setValue.id
      } .simpl-button-subtext {font-size: 8px;line-height: 8px;}   
          
      .simpl-button-${
        setValue.id
      } .simpl-button-upi-icons .simpl-upi-icons {height: 20px;}
  }

  @media only screen and (max-width: 250px) {        
      .simpl-button-${setValue.id} .simpl-button-upi-icons{ display: none;}    
  }

  @container simpl-button-container (max-width: 250px) {        
      .simpl-button-${setValue.id} .simpl-button-upi-icons{ display: none;}    
  }
  
  .simpl-button-container {
      container-type: inline-size;
      container-name: simpl-button-container;
      margin: 1rem 0;
  }
  `;

  const handleChange = (e) => {
    const { name, value } = e.target;
    getValue((pre) => {
      return { ...pre, [name]: value };
    });
  };

  const print = () => {
    const value = buttonHTML + "<style>" + styling + "</style>";
    return <span> {value} </span>;
  };

  return (
    <div>
      <style>{styling}</style>

      <div className="form">
        <h2>SIMPL BUTTON DESIGN</h2>
        <label> BUTTON ID: </label>
        <input type="text" name="id" onChange={handleChange}></input>
        <label> SIMPL BUTTON TEXT: </label>
        <input
          type="text"
          name="simplButtonTxt"
          onChange={handleChange}
        ></input>
        <label> SIMPL BUTTON SUB-TEXT: </label>
        <input
          type="text"
          name="simplButtonSubTxt"
          onChange={handleChange}
        ></input>
        <label> BUTTON COLOR: </label>
        <input type="text" name="backGround" onChange={handleChange}></input>
        <div style={{ display: "flex" }}>
          <label Style={{ marginTop: "2px" }}> BORDER RADIUS: </label>
          <button className="btn-radius" onClick={() => getnum(setnum - 1)}>
            -
          </button>
          <p>{setnum + "px"}</p>
          <button className="btn-radius" onClick={() => getnum(setnum + 1)}>
            +
          </button>
        </div>
      </div>
      <div className="form" style={{ justifyContent: "center" }}>
        <h2>SIMPL TEXT DESIGN</h2>
        <label> TEXT POSITION: </label>
        <select name="TextAlign" onChange={handleChange}>
          <option value="margin-right:auto;margin-left:0;">LEFT</option>
          <option value="margin-right:0;">CENTER</option>
          <option value="margin-right:0;margin-left:auto;">RIGHT</option>
        </select>
        <label> TEXT COLOR: </label>
        <input type="text" name="TextColor" onChange={handleChange}></input>
        <label> TEXT FONT: </label>
        <div style={{ display: "flex", marginBottom: "-13px" }}>
          <label style={{ marginRight: "19px" }}> font-size: </label>
          <button className="btn-radius" onClick={() => getFntSz(setFntSz - 1)}>
            -
          </button>
          <p>{setFntSz + "px"}</p>
          <button className="btn-radius" onClick={() => getFntSz(setFntSz + 1)}>
            +
          </button>
        </div>
        <label> FONT WEIGHT: </label>
        <select name="btnTextweight" onChange={handleChange}>
          <option value="100">100</option>
          <option value="200">200</option>
          <option value="300">300</option>
          <option value="400">400</option>
          <option value="500">500</option>
          <option selected value="600">
            600
          </option>
          <option value="bold">bold</option>
        </select>
      </div>
      <div className="form" style={{ justifyContent: "center" }}>
        <h2>SIMPL ICON & PROPS.</h2>
        <span id="displayselect">
          <label>ICON: </label>
          <select id="selector" name="SimplIcon" onChange={handleChange}>
            <option selected value="flex">
              ENABLE
            </option>
            <option value="visibility:hidden;">DISABLE</option>
          </select>
          &nbsp;
          <label>PROPS: </label>
          <select id="selector" name="SimplProps" onChange={handleChange}>
            <option selected value="">
              Enable
            </option>
            <option value="none">Disable</option>
          </select>
        </span>
        <span id="displayselect">
          <label>CONTENT CENTER: </label>
          <select id="selector" name="ButtonCenter" onChange={handleChange}>
            <option selected>select</option>
            <option value="center">center</option>
          </select>
        </span>
      </div>
      <div>
        <br />
        <br />
        <button
          id="simpl_buynow-button"
          className={`simpl-button-${setValue.id} simpl-button`}
        >
          <div className="simpl-logo-container">
            <img
              alt=""
              className="simpl-logo"
              src="https://simpl-cdn.s3.amazonaws.com/images/checkout/simpl-icon-3.png"
            />
          </div>
          <div className="simpl-button-text-group">
            <p
              className="simpl-buttonText simpl-button-text"
              Style="margin:0"
              id="simpl-headingText"
            >
              {setValue.simplButtonTxt}
            </p>
            <p
              className="simpl-buttonSubText simpl-button-subtext"
              Style="margin:0"
              id="simpl-subText"
            >
              {setValue.simplButtonSubTxt}
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
      </div>
      <br />
      <details>
        <summary>BUTTON Template</summary>
        {print()}
      </details>
    </div>
  );
};

export default Theme;
