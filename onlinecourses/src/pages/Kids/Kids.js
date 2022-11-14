import React from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Kids.css";
import SelectButton from "./Button";
import ModalVideo from "./ModalVideo";
import PriceSwitch from "./Switch";
import AnswerQuestionList from "./AnswerQuestionList";

function Kids() {
  return (
    <Container id="container">
      <Row xs={1} md={2} className="g-4" style={{ marginTop: 20 }}>
        <Col>
          <div id="title">
            <h2 id="h2">
              4-13 Yaş Çocuklar İçin Native Öğretmenler ile Eğlenceli İngilizce
              Dersler
            </h2>
            <h4 id="h4">
              KY Kids, akademisyenler tarafından tasarlanmış çocuklara özel
              online İngilizce eğitim platformudur.
            </h4>
          </div>
        </Col>
        <Col id="img1">
          <img src="Kids2.png" />
        </Col>
      </Row>

      <SelectButton />

      <h1 className="subTitles" id="questionAndAnswer">
        Soru & Cevap
      </h1>

      <div className="question">
        {/* <QuestionAndAnswer /> */}
        <AnswerQuestionList />
      </div>

      <h1 className="subTitles" id="exampleLesson">
        Örnek Ders
      </h1>

      <Row xs={1} md={2} className="g-4">
        <Col id="kids3">
          <img src="kids3.png" />
        </Col>
        <Col id="video">
          <ModalVideo />
        </Col>
      </Row>

      <div id="price">
        <h1 className="subTitles" id="pricePacket">
          Paketler
        </h1>
        <PriceSwitch />
      </div>
    </Container>
  );
}

export default Kids;
