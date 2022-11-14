import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import "./Kids.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 397,
  height: 268,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  margin: "auto",
  display: "flex",
  padding: "inherit",
};

const ModalVideo = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button
        id="videoPlayer"
        onClick={handleOpen}
        size="large"
        variant="contained"
        startIcon={<PlayArrowIcon />}
      ></Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            display="flex"
            width="320px"
            height="270px"
            align="center"
            margin="auto"
            padding="inherit"
          >
            <video id="video" src="exampleLesson.mp4" controls autoPlay />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default ModalVideo;
