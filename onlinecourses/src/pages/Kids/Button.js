import React from "react";
import Button from "@mui/material/Button";
import HelpIcon from "@mui/icons-material/Help";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import PaymentsIcon from "@mui/icons-material/Payments";
import ListAltIcon from "@mui/icons-material/ListAlt";
import "./Kids.css";

const SelectButton = () => {
  return (
    <div style={{ marginTop: 55 }}>
      <Button
        font-family="font-family: 'Montserrat', sans-serif;"
        className="button"
        href="#questionAndAnswer"
        size="large"
        variant="contained"
        startIcon={<HelpIcon />}
        style={{
          marginRight: 20,
          borderRadius: 25,
          fontSize: "x-large",
          backgroundColor: "#b16562",
        }}
      >
        Soru & Cevap
      </Button>
      <Button
        font-family="font-family: 'Montserrat', sans-serif;"
        className="button"
        href="#exampleLesson"
        size="large"
        variant="contained"
        startIcon={<PlayCircleIcon />}
        style={{
          marginRight: 20,
          borderRadius: 25,
          fontSize: "x-large",
          backgroundColor: "#b16562",
        }}
      >
        Örnek Ders izle
      </Button>
      <Button
        font-family="font-family: 'Montserrat', sans-serif;"
        className="button"
        href="#pricePacket"
        size="large"
        variant="contained"
        startIcon={<PaymentsIcon />}
        style={{
          marginRight: 20,
          borderRadius: 25,
          fontSize: "x-large",
          backgroundColor: "#b16562",
        }}
      >
        Paketler
      </Button>
    </div>
  );
};

export default SelectButton;
