import { LocationCity, LocationOn } from "@mui/icons-material"
import { Box, Button, Grid, Typography } from "@mui/material"

export const ArupKumarNath = (props) => {
    return (<>
        <Grid item>
            <Box sx={{ boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <img src="./images/doctor_image.webp" style={{ display: "flex", width: "100%" }} />

                <Box padding={2}>
                    <Typography color='black'><LocationOn sx={{ color: "red" }} />Guwahati</Typography>
                    <Box paddingY={2}>
                        <Typography fontWeight='bold' fontSize='16px' color='black'>Dr. Arup Kumar Nath {props.name}</Typography>
                        <Typography fontSize='16px' paddingY={1} color='black'>MS, MCh (UROLOGY)</Typography>
                        <Typography fontSize='14px' color='black'>Chairman, Managing Director & Head of Urology. Trained in Laser Prostrate Surgery (Milan, Italy)</Typography>
                    </Box>
                    <Button variant="contained" fullWidth sx={{ borderRadius: "0" }}>Book an Appoinment</Button>
                </Box>
            </Box>
        </Grid>
    </>)
}