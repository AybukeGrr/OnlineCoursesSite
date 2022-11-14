import React from "react";
import Container from "react-bootstrap/esm/Container";
import "./WebApp.css"
import IconLabelButtons from "./Button";

function WebApp() {
  return (
    <Container id="content">
      <div>
        <img id="main" src="appMain.png" />
        <div>
          <h1
            style={{
              top: 90,
              position: "relative",
              textAlign: "left",
              left: 25,
              marginRight: 500,
              marginBottom: 148,
            }}
          >
            KY App İndirin Eğitiminize İstediğiniz Yerde Devam Edin
          </h1>
          <div style={{position: "relative", top: "-11px", left: 35}}>
            <IconLabelButtons />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default WebApp;
