import React, { useState } from "react";
import { Box, Typography,styled } from "@mui/material";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";

import Modal from "@mui/material/Modal";


const StyledModal = styled(Modal)({
    display:'flex',
    alignItems:'center',
    justifyContent:'center'

})

const Add = () => {
    const [open,setOpen] =useState(false);
  return (
    <>
      <Tooltip onClick={(e)=>setOpen(true)}
        title="Add"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "50%", md: 30 }, // Center horizontally on smaller screens and set 30px from the left edge on medium screens
          transform: { xs: "translateX(-50%)", md: "none" }, // Move tooltip left by 50% of its own width to center it on smaller screens
        }}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>

      <StyledModal
        open={open}
        onClose={(e)=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
