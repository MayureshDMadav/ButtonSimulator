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
  ButtonGroup,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import Version3 from "../assests/Version3";
import "../css/style.css";

const V3form = () => {
  const [setNum, getNum] = useState(4);
  const [setPadding, getPadding] = useState(12);
  const [setFont, getFont] = useState(14);
  const [getSymbolHeight, setSymHeight] = useState(21);
  const [state, setstate] = useState({
    Text: "Enter your Text",
    Symbol: "",
    SimplLogo: "block",
    SimplProp: "",
    SimplProp_v: "",
    ButtonColor: "#610f91",
    Text_Color: "#ffffff",
    Discountdiv: "",
    DiscountBackgrnd: "#5653FF",
    DiscountText: "Additional 10% off up to 100",
    DiscountTextColor: "#ffffff",
    PostiionDiscount: "Top",
    Hover: "",
    HoverColor: "",
    Font_Weight: "",
  });

  function createData(name, value) {
    return { name, value };
  }

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setstate((pre) => {
      return { ...pre, [name]: value };
    });
  };

  const rows = [
    createData(
      "Button Text",
      <TextField
        name="Text"
        onChange={handleChange}
        id="outlined-basic"
        variant="outlined"
        sx={{ width: "13.5rem" }}
      />
    ),
    createData(
      "SIMPL Logo",
      <Select
        name="SimplLogo"
        sx={{ width: "13.5rem" }}
        defaultValue="select"
        onChange={handleChange}
      >
        <MenuItem value="select">select visiblity</MenuItem>
        <MenuItem value="hide">Hide Symbol</MenuItem>
        <MenuItem value="unhide">Unhide Symbol</MenuItem>
      </Select>
    ),
    createData(
      "ButtonHover",
      <Select
        name="Hover"
        sx={{ width: "13.5rem" }}
        defaultValue="select"
        onChange={handleChange}
      >
        <MenuItem value="select">select visiblity</MenuItem>
        <MenuItem value="Yes">Yes</MenuItem>
        <MenuItem value="No">No</MenuItem>
      </Select>
    ),

    createData(
      "Simpl Prop",
      <Select
        name="SimplProp"
        sx={{ width: "13.5rem" }}
        defaultValue="select"
        onChange={handleChange}
      >
        <MenuItem value="select">select visiblity</MenuItem>
        <MenuItem value="hide">Hide Symbol</MenuItem>
        <MenuItem value="unhide">Unhide Symbol</MenuItem>
      </Select>
    ),
    createData(
      "Right Section Icons",
      <Select
        name="SimplProp_v"
        sx={{ width: "13.5rem" }}
        defaultValue="select"
        onChange={handleChange}
      >
        <MenuItem value="select">select Icon</MenuItem>
        <MenuItem value="Chevron">Chevron</MenuItem>
        <MenuItem value="UPI">UPI</MenuItem>
      </Select>
    ),
    createData(
      "Discount Section",
      <Select
        name="Discountdiv"
        sx={{ width: "13.5rem" }}
        defaultValue="select"
        onChange={handleChange}
      >
        <MenuItem value="select">select visiblity</MenuItem>
        <MenuItem value="hide">Hide Symbol</MenuItem>
        <MenuItem value="unhide">Unhide Symbol</MenuItem>
      </Select>
    ),
    createData(
      "Discount Position",
      <Select
        name="PostiionDiscount"
        sx={{ width: "13.5rem" }}
        defaultValue="select"
        onChange={handleChange}
      >
        <MenuItem value="select">select Position</MenuItem>
        <MenuItem value="Top">Top</MenuItem>
        <MenuItem value="Bottom">Bottom</MenuItem>
      </Select>
    ),
    createData(
      "Discount Text",
      <TextField
        name="DiscountText"
        onChange={handleChange}
        id="outlined-basic"
        variant="outlined"
        sx={{ width: "13.5rem" }}
      />
    ),
    createData(
      "Discount Background Color",
      <TextField
        name="DiscountBackgrnd"
        onChange={handleChange}
        id="outlined-basic"
        variant="outlined"
        sx={{ width: "13.5rem" }}
      />
    ),
    createData(
      "Discount Text Color",
      <TextField
        name="DiscountTextColor"
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
      "Button Hover Color",
      <TextField
        name="HoverColor"
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
      "Font Weight",
      <Select
        defaultValue="Select"
        sx={{ width: "13.5rem" }}
        onChange={handleChange}
        name="Font_Weight"
      >
        <MenuItem value="Select">Select a Text</MenuItem>
        <MenuItem value="100">100</MenuItem>
        <MenuItem value="200">200</MenuItem>
        <MenuItem value="300">300</MenuItem>
        <MenuItem value="400">400</MenuItem>
        <MenuItem value="500">500</MenuItem>
        <MenuItem value="600">600</MenuItem>
        <MenuItem value="700">700</MenuItem>
        <MenuItem value="800">800</MenuItem>
        <MenuItem value="900">900</MenuItem>
        <MenuItem value="bold">bold</MenuItem>
      </Select>
    ),
    createData(
      "Button Padding",
      <ButtonGroup size="small" aria-label="text button group">
        <Button variant="outlined" onClick={() => getPadding(setPadding - 1)}>
          {<RemoveIcon />}
        </Button>
        <span style={{ padding: "6px", border: "1px solid lightskyblue" }}>
          {setPadding + "px"}
        </span>
        <Button variant="outlined" onClick={() => getPadding(setPadding + 1)}>
          {<AddIcon />}
        </Button>
      </ButtonGroup>
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
      "Simpl Symbol Size",
      <ButtonGroup size="small" aria-label="text button group">
        <Button
          variant="outlined"
          onClick={() => setSymHeight(getSymbolHeight - 1)}
        >
          {<RemoveIcon />}
        </Button>
        <span style={{ padding: "6px", border: "1px solid lightskyblue" }}>
          {getSymbolHeight + "px"}
        </span>
        <Button
          variant="outlined"
          onClick={() => setSymHeight(getSymbolHeight + 1)}
        >
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
      "",
      <Button variant="outlined" onClick={() => window.location.reload(false)}>
        Reset Form
      </Button>
    ),
  ];

  return (
    <div>
      <h3>Version 3 Button Form</h3>
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
        <Table sx={{ marginTop: "20%" }}>
          <TableBody>
            <Typography
              variant="h7"
              sx={{ fontFamily: "Pacifico,cursive", marginBottom: 5 }}
            >
              SIMPL BUTTON DESIGN:
            </Typography>
            <br />
            <br />
            {
              <Version3
                data={state}
                BorderR={setNum}
                fntsz={setFont}
                padding={setPadding}
                symBol={getSymbolHeight}
              />
            }
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default V3form;
