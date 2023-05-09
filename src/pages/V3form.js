import React, { useState } from "react";
import Version3 from "../assests/Version3";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
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
import "../css/v3style.css";

const V3form = () => {
  const [setNum, getNum] = useState(4);
  const [setPadding, getPadding] = useState(12);
  const [setFont, getFont] = useState(14);
  const [setdisFont, getDiscFont] = useState(10);
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
    Hover: "No",
    HoverColor: "",
    Font_Weight: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setstate((pre) => {
      return { ...pre, [name]: value };
    });
  };

  return (
    <div className="container">
      <div className="header">
        <h1>BUTTON DESIGN</h1>
      </div>
      <div className="grid_2">
        {
          <Version3
            data={state}
            BorderR={setNum}
            fntsz={setFont}
            disFnt={setdisFont}
            padding={setPadding}
            symBol={getSymbolHeight}
          />
        }
      </div>
      <h3>BUTTON STYLING</h3>
      <div className="grid_1">
        <div className="grid_1_child">
          Button Text <br />{" "}
          <TextField
            name="Text"
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            sx={{ width: "13.5rem" }}
          />
        </div>
        <div className="grid_2_child">
          SIMPL Logo <br />
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
        </div>
        <div className="grid_3_child">
          ButtonHover <br />
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
        </div>
        <div className="grid_4_child">
          Simpl Prop
          <br />
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
        </div>
        <div className="grid_5_child">
          Right Section
          <br />
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
        </div>

        <div className="grid_7_child">
          Background <br />
          <TextField
            name="ButtonColor"
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            sx={{ width: "13.5rem" }}
          />
        </div>
        <div className="grid_8_child">
          Hover Color <br />
          <TextField
            name="HoverColor"
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            sx={{ width: "13.5rem" }}
          />
        </div>
        <div className="grid_9_child">
          Text Color <br />
          <TextField
            name="Text_Color"
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            sx={{ width: "13.5rem" }}
          />
        </div>
        <div className="grid_10_child">
          Font Weight <br />
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
        </div>
        <div className="grid_11_child">
          Padding
          <br />
          <ButtonGroup size="small" aria-label="text button group">
            <Button
              variant="outlined"
              onClick={() => getPadding(setPadding - 1)}
            >
              {<RemoveIcon />}
            </Button>
            <span style={{ padding: "6px", border: "1px solid lightskyblue" }}>
              {setPadding + "px"}
            </span>
            <Button
              variant="outlined"
              onClick={() => getPadding(setPadding + 1)}
            >
              {<AddIcon />}
            </Button>
          </ButtonGroup>
        </div>
        <div className="grid_12_child">
          Border Radius <br />
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
        </div>
        <div className="grid_13_child">
          Symbol Size <br />
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
        </div>
        <div className="grid_14_child">
          {" "}
          Text Size <br />
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
        </div>
      </div>
      <h3>DISCOUNT SECTION</h3>
      <div className="grid_3">
        <div className="grid_1_child">
          Discount
          <br />
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
        </div>
        <div className="grid_7_child">
          Position <br />
          <Select
            name="PostiionDiscount"
            sx={{ width: "13.5rem" }}
            defaultValue="select"
            onChange={handleChange}
          >
            <MenuItem value="select">select Position</MenuItem>
            <MenuItem value="Top">Top</MenuItem>
            <MenuItem value="Inside">Inside</MenuItem>
            <MenuItem value="Bottom">Bottom</MenuItem>
          </Select>
        </div>
        <div className="grid_8_child">
          Text <br />
          <TextField
            name="DiscountText"
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            sx={{ width: "13.5rem" }}
          />
        </div>
        <div className="grid_9_child">
          Background <br />
          <TextField
            name="DiscountBackgrnd"
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            sx={{ width: "13.5rem" }}
          />
        </div>
        <div className="grid_10_child">
          Text Color <br />
          <TextField
            name="DiscountTextColor"
            onChange={handleChange}
            id="outlined-basic"
            variant="outlined"
            sx={{ width: "13.5rem" }}
          />
        </div>
        <div className="grid_14_child">
          {" "}
          Text Size <br />
          <ButtonGroup size="small" aria-label="text button group">
            <Button
              variant="outlined"
              onClick={() => getDiscFont(setdisFont - 1)}
            >
              {<RemoveIcon />}
            </Button>
            <span style={{ padding: "6px", border: "1px solid lightskyblue" }}>
              {setdisFont + "px"}
            </span>
            <Button
              variant="outlined"
              onClick={() => getDiscFont(setdisFont + 1)}
            >
              {<AddIcon />}
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </div>
  );
};

export default V3form;
