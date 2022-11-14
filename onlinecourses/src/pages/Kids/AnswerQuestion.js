import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./Kids.css";

function AnswerQuestion({ answer, question }) {
  return (
    <div>
      <Accordion
        className="accordion"
        style={{
          backgroundColor: "#fff2ed",
          borderRadius: 25,
          marginBottom: 10,
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography fontWeight="bold" fontFamily="Montserrat" fontSize={18}>
            {question}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography color="gray" align="justify" fontFamily="Montserrat">
            {answer}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default AnswerQuestion;
