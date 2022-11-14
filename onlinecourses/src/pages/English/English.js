import React from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "@mui/material/Button";
import "./English.css";
import CourseCardList from "./CourseCardList";
import Carousel from "@mui/material"


function English() {
  return (
    <Container style={{ marginBottom: 100 }}>
      <div id="mainEnglish" style={{ height: 500 }}>
        <Row
          xs={1}
          md={2}
          className="g-4"
          style={{ marginTop: 20, marginRight: "auto" }}
        >
          <Col>
            <div>
              <video id="translate" src="translate.mp4" autoPlay loop muted />
            </div>
          </Col>
          <Col>
            <div>
              <h3
                style={{
                  marginRight: 106,
                  textAlign: "left",
                  fontFamily: "Monserrat",
                }}
              >
                İngilizce Konuşma Kulüpleri, Akademik İngilizce, İş İngilizcesi
                ve Kurumlara Özel İngilizce Eğitimi
              </h3>
              <p
                style={{
                  marginTop: 20,
                  marginRight: 174,
                  textAlign: "left",
                  color: "gray",
                  fontFamily: "Monserrat",
                  fontSize: 16,
                }}
              >
                Native Eğitmenler ile Konuşma Kulüpleri, Alanında Doktora
                Eğitimli Akademisyenler ile Akademik İngilizce ve İş İngilizcesi
                Eğitimi
              </p>
              <Button
                id="buttonTranslate"
                variant="contained"
                href="#courseTitle"
              >
                Kursları Gör
              </Button>
              <p
                style={{
                  marginRight: 498,
                  marginTop: 39,
                  color: "gray",
                  textAlign: "left",
                }}
              >
                5.000+ öğrenci kursunu Kutup Yıldızı'ndan tamamladı.
              </p>
            </div>
          </Col>
        </Row>
      </div>

      <div>
        <h1 id="courseTitle">En Popüler Kurslarımızı Keşfedin</h1>
        <div style={{ position: "relative" }}>
            <CourseCardList />
        </div>
      </div>
    </Container>
  );
}

export default English;
