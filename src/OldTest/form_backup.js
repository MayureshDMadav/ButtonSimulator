import React, { useState } from "react";
import { Stack } from "@mui/system";
import {
  Button,
  Card,
  TextField,
  Typography,
  Radio,
  Box,
  FormControl,
  InputLabel,
  NativeSelect,
  Select,
  MenuItem,
} from "@mui/material";
import "../css/style.css";
import Buttonwithupi from "../assests/ButtonwithUpI";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ButtonGroup from "@mui/material/ButtonGroup";
import Buttonwithprop from "../assests/Buttonwithprop";

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
  };

  const handleClick = (e) => {
    e.preventDefault();
    getClick(e.target.value);
  };

  const handleForm = (e) => {
    e.preventDefault();
    getForm(e.target.value);
  };

  const SymbolChange = (e) => {
    e.preventDefault();
    getSymbol(e.target.value);
  };

  return (
    <div>
      <div className="Select_From">
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <InputLabel
              sx={{
                fontFamily: "Pacifico,cursive",
                fontSize: 20,
                color: "black",
              }}
              variant="standard"
              htmlFor="uncontrolled-native"
            >
              Select a From
            </InputLabel>
            <NativeSelect defaultValue="select" onChange={handleForm}>
              <option value="select">select one form</option>
              <option value="UPI">Simpl with UPI</option>
              <option value="Prop">Simpl with Value Prop</option>
            </NativeSelect>
          </FormControl>
        </Box>
      </div>
      <Card
        sx={{
          maxWidth: 450,
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
          padding: 2,
          boxShadow:
            "1px 0px 1px -1px rgb(0 0 0 / 20%), 20px 17px 11px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
        }}
      >
        <div className="container">
          <Stack spacing={2} sx={{ width: 350, marginTop: 2 }}>
            <Typography
              variant="h4"
              sx={{ fontFamily: "Pacifico,cursive", width: 370 }}
            >
              Simpl Button with {setForm === "Prop" ? "Prop" : "UPI"}
            </Typography>
            <div className="simplLogo">
              <Typography sx={{ fontFamily: "Pacifico,cursive" }}>
                Simpl Logo:
              </Typography>
              <Select
                defaultValue="Select"
                sx={{ width: 215 }}
                onChange={SymbolChange}
              >
                <MenuItem value="Green">DYNAMIC</MenuItem>
                <MenuItem value="Black">BLACK</MenuItem>
              </Select>
            </div>
            <TextField
              name="Id"
              onChange={handleChange}
              id="outlined-basic"
              label="Button_ID"
              variant="outlined"
            />
            <TextField
              name="SimplText"
              onChange={handleChange}
              id="outlined-basic"
              label="Simpl_Text"
              variant="outlined"
            />
            <TextField
              name="SimplSubText"
              onChange={handleChange}
              id="outlined-basic"
              label="Simpl_SubText"
              variant="outlined"
            />
            <TextField
              name="ButtonColor"
              onChange={handleChange}
              id="outlined-basic"
              label="Button_Color"
              variant="outlined"
            />
            <TextField
              name="Text_Color"
              onChange={handleChange}
              id="outlined-basic"
              label="Text_Color"
              variant="outlined"
            />
            <br />
            <Typography variant="h7" sx={{ fontFamily: "Pacifico,cursive" }}>
              Border Radius:
            </Typography>
            &nbsp;&nbsp;
            <ButtonGroup size="small" aria-label="text button group">
              <Button variant="outlined" onClick={() => getNum(setNum - 1)}>
                {<RemoveIcon />}
              </Button>
              <span
                style={{ padding: "6px", border: "1px solid lightskyblue" }}
              >
                {setNum + "px"}
              </span>
              <Button variant="outlined" onClick={() => getNum(setNum + 1)}>
                {<AddIcon />}
              </Button>
            </ButtonGroup>
            <br />
            <Typography variant="h7" sx={{ fontFamily: "Pacifico,cursive" }}>
              Font Size:
            </Typography>{" "}
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <ButtonGroup size="small" aria-label="text button group">
              <Button variant="outlined" onClick={() => getFont(setFont - 1)}>
                {<RemoveIcon />}
              </Button>
              <span
                style={{ padding: "6px", border: "1px solid lightskyblue" }}
              >
                {setFont + "px"}
              </span>
              <Button variant="outlined" onClick={() => getFont(setFont + 1)}>
                {<AddIcon />}
              </Button>
            </ButtonGroup>
            <br />
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <span>
              <Typography variant="h7" sx={{ fontFamily: "Pacifico,cursive" }}>
                Styles:{" "}
              </Typography>
              &nbsp;
              <span>
                Center:
                <Radio
                  value="center"
                  checked={setClick === "center"}
                  color="primary"
                  onClick={handleClick}
                ></Radio>
              </span>
              <span>
                OnlyText:
                <Radio
                  value="onlytext"
                  checked={setClick === "onlytext"}
                  color="primary"
                  onClick={handleClick}
                ></Radio>
              </span>
            </span>
            <Button
              variant="outlined"
              onClick={() => window.location.reload(false)}
            >
              Reset Form
            </Button>
          </Stack>
        </div>
      </Card>

      <span
        style={{
          width: "50%",
          display: "block",
          marginTop: 50,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <Typography
          variant="h7"
          sx={{ fontFamily: "Pacifico,cursive", padding: "2px" }}
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
      </span>
      <br />
      <span
        style={{
          width: "50%",
          display: "block",
          marginTop: 50,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      ></span>
    </div>
  );
};

export default Form;
