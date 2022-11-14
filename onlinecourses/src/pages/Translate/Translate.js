import React, { createContext, useState } from "react";
import Container from "react-bootstrap/esm/Container";
import "./Translate.css";
import TranslateSlider from "./TranslateSlider"
import TranslateContent from "./TranslateContent";



function Translate() {
  return (
    <Container id="content">
      <div>
        {/* <TranslateSlider /> */}
        <img id="main" src="translateMain.png" />
        <div>
          <h1 style={{top: 300, position: "relative"}}>Bilimsel Araştırmalarınız İçin Profesyonel Çeviri</h1>
        </div>
      </div>
      <div style={{ marginTop: 100, marginLeft: 49 }}>
        <TranslateContent />
      </div>
    </Container>
  );
}

export default Translate;
