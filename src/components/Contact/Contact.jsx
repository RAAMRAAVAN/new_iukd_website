import { Box, Button, Checkbox, FormControlLabel, Grid, TextField, Typography } from "@mui/material"
import { Footers } from "../Footer/Footers"
import { Call, Email, LocationOn } from "@mui/icons-material"
import { FixedHeader } from "../Header/FixedHeader"

export const Contact = () => {
    return (<>
        <FixedHeader page="Contact"/>
        <Box display='flex' justifyContent='center' alignItems='center'  marginY={6}>
            <Grid container display='flex' flexDirection='row' width='90%'>
                <Grid item lg={6}>
                    <Typography><Call sx={{color:"darkgreen", marginRight:"10px"}}/>+91 8822721671 / 9864104444</Typography>
                    <Typography><Email sx={{color:"darkgreen", marginRight:"10px"}}/>iukd.india@gmail.com</Typography>
                    <Typography><LocationOn sx={{color:"darkgreen", marginRight:"10px"}}/>Kamarkuchi, NH27, Opp Sciency City, Sonapur, Assam 782402</Typography>
                </Grid>
                <Grid item lg={6} display='flex' flexDirection='column'>
                    <Typography textAlign='center' variant="h6" fontWeight='bold'>GET IN TOUCH</Typography>
                    <Typography>Name*</Typography>
                    <TextField id="name" variant="outlined" fullWidth marginY={1}/>
                    <Typography>Phone*</Typography>
                    <TextField id="phone" variant="outlined" fullWidth marginY={1} />
                    <Typography>Description*</Typography>
                    <TextField id="description" variant="outlined" multiline rows={4} fullWidth marginY={1} />
                    <FormControlLabel control={<Checkbox defaultChecked />} label={"I accept the"+ "Terms & Conditions" + "and" + "Privacy Policy"} />
                    <Button variant="contained" sx={{ backgroundColor: "darkgreen", "&:hover": { backgroundColor: "darkgreen" } }}>Submit</Button>
                </Grid>
            </Grid></Box>
        <Footers />
    </>)
}