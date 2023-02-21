import React from "react";
import Json from "./button.json";

const V3button = () => {
  return <div dangerouslySetInnerHTML={{ __html: Json.template_data }}></div>;
};

export default V3button;
