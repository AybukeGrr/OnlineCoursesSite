import React from 'react'
import Card from "@mui/material/Card";
import { Avatar, CardActions, CardContent, CardHeader } from "@mui/material";
import TeacherRating from "./TeacherRating";
import { Container } from "@mui/system";

function TeacherCard({avatar, name, city, content}) {
  return (
    <Container >
      <Card
        sx={{
          display: "flex",
          marginTop: 10,
          marginBottom: 10,
          paddingBottom: 5,
          paddingTop: 3,
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src={avatar}
          sx={{ width: 180, height: 180, margin: 3 }}
        />
        <CardContent style={{ marginRight: 25 }}>
          <h1 style={{ display: "flex", marginLeft: 6 }}>{name}</h1>
          <h3 style={{ display: "flex", color: "gray", marginLeft: 6 }}>{city}</h3>
          <p
            style={{
              position: "relative",
              marginLeft: 6,
              textAlign: "justify",
            }}
          >
            {content}
          </p>
        </CardContent>
        <CardActions>
          <TeacherRating />
        </CardActions>
      </Card>
      </Container>
  )
}

export default TeacherCard;