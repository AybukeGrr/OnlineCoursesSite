import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import CheckIcon from "@mui/icons-material/Check";
import "./Kids.css";

const PriceCardOne = () => {
  return (
    <Row xs={1} md={2} className="g-4">
      <Col>
        <Card
          style={{
            borderRadius: 25,
            boxShadow:
              "0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)",
            margin: "inherit",
            padding: 12,
            backgroundColor: "#FFE3E1",
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              style={{
                fontWeight: "bold",
                fontFamily: "font-family: 'Montserrat', sans-serif",
              }}
            >
              1 Aylık Paket
            </Typography>
            <Typography
              color="text.secondary"
              style={{
                fontSize: "small",
                fontFamily: "font-family: 'Montserrat', sans-serif",
              }}
            >
              4 kişilik grup
            </Typography>
            <p></p>
            <Typography
              variant="h5"
              component="div"
              style={{
                fontWeight: "bold",
                fontFamily: "font-family: 'Montserrat', sans-serif",
              }}
            >
              700 TL
            </Typography>
            <Typography variant="body2">
              <CheckIcon style={{ color: "#b16562" }} />
              Toplam 12 Ders
              <br />
              <CheckIcon style={{ color: "#b16562" }} />
              Haftada 3x30 dk Native Eğitmenler ile Speaking
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="large"
              variant="contained"
              style={{
                borderRadius: 10,
                margin: "auto",
                backgroundColor: "#b16562",
              }}
            >
              KAYIT OL
            </Button>
          </CardActions>
        </Card>
      </Col>
      <Col>
        <Card
          style={{
            borderRadius: 25,
            boxShadow:
              "0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%)",
            margin: "inherit",
            padding: 12,
          }}
        >
          <CardContent>
            <Typography
              variant="h5"
              component="div"
              style={{
                fontWeight: "bold",
                fontFamily: "font-family: 'Montserrat', sans-serif",
              }}
            >
              3 Aylık Paket
            </Typography>
            <Typography
              color="text.secondary"
              style={{
                fontSize: "small",
                fontFamily: "font-family: 'Montserrat', sans-serif",
              }}
            >
              4 kişilik grup
            </Typography>
            <p></p>
            <Typography
              variant="h5"
              component="div"
              style={{
                fontWeight: "bold",
                fontFamily: "font-family: 'Montserrat', sans-serif",
              }}
            >
              1300 TL
            </Typography>
            <Typography variant="body2">
              <CheckIcon style={{ color: "#b16562" }} />
              Toplam 36 Ders
              <br />
              <CheckIcon style={{ color: "#b16562" }} />
              Haftada 3x30 dk Native Eğitmenler ile Speaking
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              size="large"
              variant="contained"
              style={{
                borderRadius: 10,
                margin: "auto",
                backgroundColor: "#b16562",
              }}
            >
              KAYIT OL
            </Button>
          </CardActions>
        </Card>
      </Col>
    </Row>
  );
};

export default PriceCardOne;
