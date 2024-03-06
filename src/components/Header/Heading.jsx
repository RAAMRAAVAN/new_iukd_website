import { Box, Typography } from "@mui/material"
import { keyframes } from '@emotion/react';
import { Facebook } from "@mui/icons-material";
export const Heading = () => {
    const movingTextAnimation = keyframes`
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(-100%);
  }
`;
    return(<>
    <Box>
      <Box display='flex' sx={{background:'linear-gradient(to right, #0f5c33, #034220)'}} width='100%' height="7vh" justifyContent='center' alignItems='center' >
        <Facebook sx={{color:"white"}}/>
        <Typography sx={{
          color:"white",
          // overflow: 'hidden',
          whiteSpace: 'wrap',
          // display:'flex',
          // width: '100%', // Ensure the text stays within the parent container
          // textAlign: 'right', // Align the text to the right
          // border: '1px black solid',
          // display: 'inline-block',
          // animation: `${movingTextAnimation} 20s linear infinite`,
          // direction: 'rtl', // Set the text direction to right-to-left
        }} textAlign='center' >Center for Addvanced Urology and kidney Diseases is the only center in the entire North Eastern region of India dedicated only for Urological problems.</Typography>
      </Box>
    </Box>
    </>)
}