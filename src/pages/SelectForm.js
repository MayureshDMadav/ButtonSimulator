import React, { useState } from "react";
import Form from "./form";
import V3form from "./V3form";
import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";

const SelectForm = () => {
  const [state, setstate] = useState();

  const handleChange = (e) => {
    setstate(e.target.value);
  };

  return (
    <div>
      <FormControl
        sx={{
          width: "20rem",
          marginLeft: "auto",
          marginRight: "auto",
          display: "grid",
          marginTop: "1rem",
        }}
      >
        <InputLabel id="demo-simple-select-label"></InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={state}
          onChange={handleChange}
          defaultValue="v2"
        >
          <MenuItem value="v2">Version 2 Buttons</MenuItem>
          <MenuItem value="v3">Version 3 Buttons</MenuItem>
        </Select>
      </FormControl>
      {state === "v2" || state !== "v3" ? <Form /> : <V3form />}
    </div>
  );
};

export default SelectForm;
