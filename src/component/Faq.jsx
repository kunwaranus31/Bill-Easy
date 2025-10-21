import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Faq = ({ items = [] }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box sx={{ width: "100%", mt: 2 }}>
      {items.map((item, index) => (
        <Accordion
          key={index}
          expanded={expanded === index}
          onChange={handleChange(index)}
          sx={{
            boxShadow: "none",
            borderRadius: "8px", // main card corners
            mb: 2,
            background: "#F2F9FF",
            position: "relative",
            overflow: "hidden", // ✅ ensures the left rounded radius clips the gradient bar
            "&:before": { display: "none" },
            "&::after": {
              content: '""',
              position: "absolute",
              left: 0,
              top: 0,
              width: "4px",
              height: "100%",
              background: "linear-gradient(180deg, #0C71E0 0%, #073E7A 100%)",
              borderRadius: "8px 0 0 8px", // ✅ left side rounded
            },
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === index ? (
                <RemoveIcon
                fontSize="large"
                  sx={{ m:2,background: "#fff", borderRadius: 5, color: "primary.main" }}
                />
              ) : (
                <AddIcon
                fontSize="large"
                  sx={{ m:2, background: "#fff", borderRadius: 5, color: "primary.main" }}
                />
              )
            }
          >
            <Typography variant="h5">{item.question}</Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ color: "#475569", fontSize: "15px" }}>
            {item.answer}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default Faq;
