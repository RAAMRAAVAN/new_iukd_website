import { Box, Grid, Typography } from "@mui/material"
import { Service } from "./Service"

export const OurServices = () => {
    return(<>
            <Box sx={{backgroundColor:"rgba(200, 200, 200, 0.75)", display:"flex", flexDirection:"column", alignItems:"center"}} paddingY={6} paddingX={3}>
                <Typography variant="h4">Our Services</Typography>
                <Typography sx={{display:"flex", width:"40%"}} textAlign='center'>Institute of Urology and Kidney Diseases is the only center in the entire North Eastern Region of India dedicated only to Urological Problems</Typography>
                <Grid  spacing={2} container marginY={5}>
                    <Service/>
                    <Service/>
                    <Service/>
                    <Service/>
                    <Service/>
                    <Service/>
                </Grid>
            </Box>

        </>
    )
}