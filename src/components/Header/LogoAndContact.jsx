import { Box, IconButton, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { Call } from "@mui/icons-material";
export const LogoAndContact = () => {
    return(<>
    <Box>
      <Box display='flex' flexDirection='row' paddingX={5} justifyContent='space-between' alignItems='center'>
        <Box display='flex'>
          <img style={{ display: "flex", height: "100px" }} src="/images/iukd_logo.jpg" />
          <img style={{ display: "flex", height: "100px" }} src="/images/iukdspelling.webp" />
        </Box>
        <Box sx={{ display: { sm: 'block', xs: 'none' } }}>
          <Typography fontSize={20} ><Call sx={{fontWeight:"bold", fontSize:"30px"}}/>8822721671</Typography>
          <Typography fontSize={21} fontWeight='bold'>Book an Appoinment</Typography>
        </Box>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          // onClick={toggleDrawer(true)}
          sx={{ display: { xs: 'block', sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>
    </>)
}