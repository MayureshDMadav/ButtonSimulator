import React, { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Radio,
  NativeSelect,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import "../css/style.css";
import Buttonwithupi from "../assests/ButtonwithUpI";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ButtonGroup from "@mui/material/ButtonGroup";
import Buttonwithprop from "../assests/Buttonwithprop";
import V3form from "./V3form";

const Form = () => {
  const [setNum, getNum] = useState(8);
  const [setFont, getFont] = useState(20);
  const [setClick, getClick] = useState();
  const [setForm, getForm] = useState();
  const [setSymbol, getSymbol] = useState();

  const [getValue, setValue] = useState({
    Id: "5c",
    SimplText: "Enter SIMPL TEXT",
    SimplSubText: "ENTER SUB TEXT",
    ButtonColor: "black",
    Text_Color: "white",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setValue((pre) => {
      return { ...pre, [name]: value };
    });

    console.log(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    getClick(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    getForm(e.target.value);
    console.log(e.target.value);
  };

  const SymbolChange = (e) => {
    e.preventDefault();
    getSymbol(e.target.value);
  };

  function createData(name, value) {
    return { name, value };
  }

  const rows = [
    createData(
      "Select one Button",
      <NativeSelect
        defaultValue="select"
        onChange={handleForm}
        sx={{ width: "13.5rem" }}
      >
        <option value="select">Select</option>
        <option value="UPI">Simpl with UPI</option>
        <option value="Prop">Simpl with Value Prop</option>
      </NativeSelect>
    ),
    createData(
      "Simpl Logo",
      <Select
        sx={{ width: "13.5rem" }}
        defaultValue="Select"
        onChange={SymbolChange}
      >
        <MenuItem value="Select">Select a Logo</MenuItem>
        <MenuItem value="Green">DYNAMIC</MenuItem>
        <MenuItem value="Black">BLACK</MenuItem>
      </Select>
    ),
    createData(
      "Button ID",
      <TextField name="Id" onChange={handleChange} sx={{ width: "13.5rem" }} />
    ),
    createData(
      " Simpl Text:",
      <Select
        defaultValue="Select"
        sx={{ width: "13.5rem" }}
        onChange={handleChange}
        name="SimplText"
      >
        <MenuItem value="Select">Select a Text</MenuItem>
        <MenuItem value="Buy It Now">Buy It Now</MenuItem>
        <MenuItem value="Buy Now">Buy Now</MenuItem>
        <MenuItem value="One Click Checkout">One Click Checkout</MenuItem>
        <MenuItem value="Checkout with Simpl">Checkout with Simpl</MenuItem>
        <MenuItem value="Buy Now with Simpl">Buy Now with Simpl</MenuItem>
        <MenuItem value="Buy with UPI/COD">Buy with UPI/COD</MenuItem>
        <MenuItem value="Buy with UPI">Buy with UPI</MenuItem>
        <MenuItem value="Quick Buy">Quick Buy</MenuItem>
        <MenuItem value="Buy in 1 click">Buy in 1 click</MenuItem>
        <MenuItem value="UPI / Pay-in-3 / COD">UPI / Pay-in-3 / COD</MenuItem>
      </Select>
    ),
    createData(
      "Simpl Discount Text",
      <TextField
        name="SimplSubText"
        onChange={handleChange}
        id="outlined-basic"
        variant="outlined"
        sx={{ width: "13.5rem" }}
      />
    ),
    createData(
      "Button Color",
      <TextField
        name="ButtonColor"
        onChange={handleChange}
        id="outlined-basic"
        variant="outlined"
        sx={{ width: "13.5rem" }}
      />
    ),
    createData(
      "Text Color",
      <TextField
        name="Text_Color"
        onChange={handleChange}
        id="outlined-basic"
        variant="outlined"
        sx={{ width: "13.5rem" }}
      />
    ),
    createData(
      "Border Radius",
      <ButtonGroup size="small" aria-label="text button group">
        <Button variant="outlined" onClick={() => getNum(setNum - 1)}>
          {<RemoveIcon />}
        </Button>
        <span style={{ padding: "6px", border: "1px solid lightskyblue" }}>
          {setNum + "px"}
        </span>
        <Button variant="outlined" onClick={() => getNum(setNum + 1)}>
          {<AddIcon />}
        </Button>
      </ButtonGroup>
    ),
    createData(
      "Font Size",
      <ButtonGroup size="small" aria-label="text button group">
        <Button variant="outlined" onClick={() => getFont(setFont - 1)}>
          {<RemoveIcon />}
        </Button>
        <span style={{ padding: "6px", border: "1px solid lightskyblue" }}>
          {setFont + "px"}
        </span>
        <Button variant="outlined" onClick={() => getFont(setFont + 1)}>
          {<AddIcon />}
        </Button>
      </ButtonGroup>
    ),
    createData(
      "SimplIcon with Text",
      <Radio
        value="center"
        checked={setClick === "center"}
        color="primary"
        onClick={handleClick}
      ></Radio>
    ),
    createData(
      "Only Text",
      <Radio
        value="onlytext"
        checked={setClick === "onlytext"}
        color="primary"
        onClick={handleClick}
      ></Radio>
    ),
    createData(
      "",
      <Button variant="outlined" onClick={() => window.location.reload(false)}>
        Reset Form
      </Button>
    ),
  ];

  return (
    <TableContainer
      component={Paper}
      sx={{
        margin: "1rem",
        justifyContent: "center",
        width: "auto",
        display: "flex",
      }}
    >
      <Table sx={{ minWidth: 100 }} aria-label="caption table">
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Table sx={{ marginTop: "1%" }}>
        <TableBody>
          <Typography
            variant="h7"
            sx={{ fontFamily: "Pacifico,cursive", marginBottom: 5 }}
          >
            SIMPL BUTTON DESIGN:
          </Typography>
          <br />
          <br />
          {setForm !== "Prop" ? (
            <Buttonwithupi
              data={getValue}
              radius={setNum}
              fontSize={setFont}
              RadioClick={setClick}
              Symbol={setSymbol}
            />
          ) : (
            <Buttonwithprop
              data={getValue}
              radius={setNum}
              fontSize={setFont}
              Radio={setClick}
              Symbol={setSymbol}
            />
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Form;
