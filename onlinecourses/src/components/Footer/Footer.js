import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Container, Divider } from "@mui/material";
import Contact from "../Contact/Contact";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import CopyrightIcon from "@mui/icons-material/Copyright";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";


export default function Footer() {
  return (
    <Container
      maxWidth="100%"
      style={{ backgroundColor: "#212529", color: "white" }}
    >
      <p style={{ marginLeft: "-4px", paddingTop: 20 }}>
        30 günlük ücretsiz denemenizi başlatın.
      </p>
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Contact />
        </Col>
      </Row>
      <Divider
        component="div"
        style={{ backgroundColor: "gray", marginBottom: 30 }}
      />
      <Row xs={1} md={2} className="g-4">
        <Col>
          <img
            style={{ marginTop: "-5px", width: 50, marginRight: 10 }}
            src="logoStars.png"
          />
          <p style={{ display: "contents", fontWeight: "bolder" }}>
            Kutup Yıldızı Akademi
          </p>
          <p
            style={{
              textAlign: "justify",
              marginLeft: 297,
              fontSize: "small",
              marginTop: 11,
              marginRight: 244,
            }}
          >
            "Bu yıl benim yılım." demek istiyorsan Kutup Yıldızı Akademi'de
            kendi yeteneklerini geliştir.
          </p>
          <div
            style={{ display: "flex", marginLeft: 297, fontWeight: "bolder" }}
          >
            <p style={{ marginRight: 10 }}>Hakkımızda</p>
            <p style={{ marginRight: 10 }}>Şirketimiz</p>
            <p style={{ marginRight: 10 }}>Destek</p>
            <p>Gizlilik Sözleşmesi</p>
          </div>
        </Col>
        <Col>
          <p style={{ marginRight: 28 }}>Get the app</p>
          <Box
            onClick={"asaasda"}
            style={{
              borderStyle: "groove",
              display: "inline-block",
              padding: 10,
              borderRadius: 25,
            }}
          >
            <span>
              <AppleIcon />
            </span>{" "}
            App Store
          </Box>
          <Box
            onClick={""}
            style={{
              borderStyle: "groove",
              display: "block",
              padding: 10,
              borderRadius: 25,
              maxWidth: "fit-content",
              position: "relative",
              left: 343,
              top: 10,
            }}
          >
            <span>
              <AndroidIcon />
            </span>{" "}
            Play Store
          </Box>
        </Col>
      </Row>
      <Divider
        component="div"
        style={{ backgroundColor: "gray", marginBottom: 30, marginTop: 30 }}
      />
      <Row xs={1} md={3} className="g-4">
        <Col style={{ marginBottom: 50, marginTop: 30 }}>
          <CopyrightIcon /> 2022 Kutup Yıldızı Akademi
        </Col>
        <Col>
          <img
            style={{ marginTop: "-5px", width: 50, marginRight: 10 }}
            src="logoStars.png"
          />
          <p style={{ display: "contents", fontWeight: "bolder" }}>
            Kutup Yıldızı Akademi
          </p>
        </Col>
        <Col style={{ marginTop: 33 }}>
          <InstagramIcon />
          <TwitterIcon />
          <YouTubeIcon />
          <LinkedInIcon />
          <WhatsAppIcon />
        </Col>
      </Row>
    </Container>
  );
}
