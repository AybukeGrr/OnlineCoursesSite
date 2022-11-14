import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/esm/Container";
import "./Home.css";
import HomeCardList from "./HomeCardList";

function HomeContent() {
  return (
    <Container id="cardContent">
      <div className="main">
        <video src="mainVideo.mp4" autoPlay loop muted />
        <div className="title">
          <h1>Kutup Yıldızı Akademisyenleri</h1>
          <h3>Akademik Başarında Yolunu</h3>
          <h3> Bulmana Yardımcı Olur!</h3>
        </div>
      </div>

      <div className="title" id="services">
        <h1 style={{ marginTop: -250, marginBottom: -188 }}>Hizmetlerimiz</h1>
      </div>

      {/* <Card/> */}
      <HomeCardList />
    </Container>
  );
}

export default HomeContent;
