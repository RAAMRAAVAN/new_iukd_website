import { Box, Button, Grid, Typography } from "@mui/material"

export const Service = () => {
    return(<>
        <Grid item  lg={4}  >
            <Box display='flex' flexDirection='column' border='2px darkgreen solid' borderRadius='8px' height="50vh" boxShadow="8px 3px 10px gray" padding={5}>
                <img src="https://www.iukdindia.com/_next/image?url=%2Fservices%2Fiukds1.png&w=64&q=75" style={{display:"flex", width:"80px", height:"80px"}}/>
                <Typography variant="h5" marginTop={2} marginBottom={4}>Endo Urological Surgeries</Typography>
                <Typography> Experience exceptional care for Urological conditions with our advanced Endo Urological Surgeries. Utilizing minimal invasive...</Typography>
                <Button variant="contained" color="success">Leaen More</Button>
            </Box>
        </Grid>
    </>)
}