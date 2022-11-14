import React from "react";
import Container from "react-bootstrap/esm/Container";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import "./English.css";
import EnglishRating from "./EnglishRating";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

function CourseCard({ title, subTitle, photo, btn }) {
  return (
    <Container>
      <Col>
        <Card
          style={{
            marginBottom: 25,
            marginTop: 22,
            borderRadius: 0,
            marginRight: 3,
            backgroundColor: "#b8aea7",
          }}
        >
          <img
            src={photo}
            style={{ marginInline: "-15px", marginTop: "-16px", width: "109%", marginLeft: "-16px" }}
          />
          <h5
            style={{
              marginTop: 15,
              textAlign: "left",
              marginLeft: 20,
              fontWeight: "bolder",
            }}
          >
            {title}
          </h5>
          <p
            style={{
              marginInline: 21,
              textAlign: "justify",
              marginTop: 10,
              fontSize: 13,
            }}
          >
            {subTitle}
          </p>
          <div style={{ marginLeft: 20 }}>
            <EnglishRating />
          </div>
          <p style={{ marginTop: 20, marginLeft: 20, textAlign: "left" }}>
            <a
              href=""
              style={{
                textDecoration: "none",
                color: "black",
                fontWeight: 600,
              }}
            >
              Detaylı Bilgi{" "}
              <ChevronRightIcon
                style={{ marginLeft: "-3px", marginTop: "-3px" }}
              />
            </a>
          </p>
        </Card>
      </Col>
    </Container>
  );
}

export default CourseCard;
