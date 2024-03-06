import { AdminPanelSettings, Call, Email, Maximize } from "@mui/icons-material"
import { Box, Grid, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";

export const Footers = () => {
    let Navigate=useNavigate();
    return(<>
        <Box sx={{backgroundColor:"#272626"}}>
            <Grid container  display='flex' justifyContent='space-between' padding={5}  >
                <Grid item lg={3}  padding={2}>
                    <Typography color='white' sx={{ textDecoration: 'underline', marginBottom: '8px', textDecorationSkipInk: '20px' }} marginBottom={1}>ABOUT</Typography>
                    <Typography sx={{color:'#bbbbbb'}}>We are a Centre for Advanced Urology & Kidney Diseases is the only centre in entire North-Eastern Region of India dedicated onlly for Urological Problems...</Typography>
                    <Typography sx={{color:'#bbbbbb'}} paddingTop={1}>read more</Typography>
                </Grid>
                <Grid item lg={3}  padding={2}>
                    <Typography color='white' sx={{ textDecoration: 'underline', marginBottom: '8px', textDecorationSkipInk: '20px' }} marginBottom={1}>Department</Typography>
                    <Typography sx={{color:'#bbbbbb'}}>UROLOGY</Typography>
                    <Typography sx={{color:'#bbbbbb'}}>URO-ONCOLOGY</Typography>
                    <Typography sx={{color:'#bbbbbb'}}>NEPHROLOGY</Typography>
                </Grid>
                <Grid item lg={3}  padding={2}>
                    <Typography color='white' sx={{ textDecoration: 'underline', marginBottom: '8px', textDecorationSkipInk: '20px' }} marginBottom={1}>GET IN TOUCH</Typography>
                    <Typography sx={{color:'#bbbbbb'}}> <Email sx={{color:"white"}}/> Support available for 24/7</Typography>
                    <Typography sx={{color:'#bbbbbb'}}>iukd.india@gmail.com</Typography>
                </Grid>
                <Grid item lg={3}  padding={2}>
                    <Typography color='white' sx={{ textDecoration: 'underline', marginBottom: '8px', textDecorationSkipInk: '20px' }} marginBottom={1}>CONTACT US</Typography>
                    <Typography sx={{color:'#bbbbbb'}}> <Call sx={{color:"white"}}/> +91 8822721671</Typography>
                    <Typography sx={{color:'#bbbbbb'}}> <Call sx={{color:"white"}}/> +91 9864104444</Typography>
                </Grid>
            </Grid>
            <Box borderTop="1px white solid" borderBottom='1px white solid' display='flex' justifyContent='space-between' paddingX='5%' paddingY={1}>
                <Typography color='white'> Copyright @ 2023 iUKD Designed By iUKD Team. All rights reserved</Typography>
                <Typography color='white' onClick={()=>Navigate("/admin")}><AdminPanelSettings sx={{color:"white"}} />Login</Typography>
            </Box>
            <Box display='flex' justifyContent='center' paddingY={6}>
                <Typography color='white'>About Us</Typography> 
                <Maximize sx={{color:"white", transform: 'rotate(90deg)', marginRight:"15px" }}/>
                <Typography color='white'>Privacy Policy</Typography>
                <Maximize sx={{color:"white", transform: 'rotate(90deg)', marginRight:"15px" }}/>
                <Typography color='white'>Terms & Conditions</Typography>
                <Maximize sx={{color:"white", transform: 'rotate(90deg)', marginRight:"15px" }}/>
                <Typography color='white'>Contact Us</Typography>
            </Box>
        </Box>
    </>)
}