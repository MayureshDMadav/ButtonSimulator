import React, { useState } from "react";

const CopyPaste = ({ text }) => {
  function copyToClipboard() {
    navigator.clipboard.writeText(text);
    alert("copied");
  }

  const styling = `
  .copypaste {
    border: 1px solid green;
    color: black;
    padding: 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 14px;
    cursor: pointer;
    border-radius:5px
  }
  `;

  return (
    <div>
      <style>{styling}</style>
      <button className="copypaste" onClick={() => copyToClipboard()}>
        Click To Copy String
      </button>
    </div>
  );
};

export default CopyPaste;
