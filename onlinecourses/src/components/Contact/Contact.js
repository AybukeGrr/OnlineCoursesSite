import { Container } from "@mui/material";
import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Contact() {
  return (
    <Container style={{ marginBottom: 50, marginInline: 450 }}>
      <Box
        sx={{
          width: 500,
          maxWidth: "100%",
          marginLeft: 13
        }}
      >
        <TextField
          fullWidth
          label=""
          id="fullWidth"
          style={{ backgroundColor: "white", borderRadius: 12 }}
          placeholder="Mail adresinizi giriniz"
        />
      </Box>
      <div style={{ marginTop: "-52px", marginInlineEnd: "-208px" }}>
        <Button
          style={{
            backgroundColor: "#f3d04e",
            size: "medium",
            paddingInline: 20,
            borderRadius: 12,
            paddingBlock: 11,
            marginRight: "-121px"
          }}
          variant="contained"
          onClick={() => {
            alert("En kısa zamanda size dönüş sağlayacağız!");
          }}
        >
          Gönder
        </Button>
      </div>
    </Container>
  );
}

export default Contact;
