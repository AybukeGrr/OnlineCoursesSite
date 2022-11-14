import * as React from "react";
import Button from "@mui/material/Button";
import AndroidIcon from "@mui/icons-material/Android";
import Stack from "@mui/material/Stack";
import AppleIcon from "@mui/icons-material/Apple";

export default function IconLabelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button style={{backgroundColor: "black"}} variant="contained" startIcon={<AppleIcon />}>
        IOS Dowload
      </Button>
      <Button variant="contained" startIcon={<AndroidIcon />}>
        Andorid Dowload
      </Button>
    </Stack>
  );
}
