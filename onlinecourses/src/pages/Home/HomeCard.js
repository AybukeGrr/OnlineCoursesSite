import React from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function HomeCard({ title, subTitle, photo, icon, btn }) {
  const navigate = useNavigate();
  return (
    <Container className="container">
      <Col>
        <Card className="card" style={{ marginBottom: 25, marginTop: 20 }}>
          <Card.Title className="cardTitle">
            <span>
              <img
                style={{ width: 50, height: 50, paddingRight: 5 }}
                src={icon}
              />
              {title}
            </span>
          </Card.Title>
          <Card.Img className="img" variant="top" src={photo} />
          <Card.Body>
            <Card.Text>{subTitle}</Card.Text>
          </Card.Body>
          <Button
            className="button"
            onClick={() => {
              navigate(btn);
            }}
          >
            Daha Fazla Bilgi Al
          </Button>
        </Card>
      </Col>
    </Container>
  );
}

export default HomeCard;
